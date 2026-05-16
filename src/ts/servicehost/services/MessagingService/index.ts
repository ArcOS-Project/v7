import type { IServiceHost } from "$interfaces/IServiceHost";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { IServerManager } from "$interfaces/modules/IServerManager";
import type { IMessagingConnector } from "$interfaces/modules/server/IMessagingConnector";
import type { IUserConnector } from "$interfaces/modules/server/IUserConnector";
import type { IGlobalDispatch } from "$interfaces/services/IGlobalDispatch";
import type { IMessagingInterface } from "$interfaces/services/IMessagingInterface";
import { Daemon, Env, Fs, getKMod, Server, Stack } from "$ts/env";
import { BaseService } from "$ts/servicehost/base";
import { Plural } from "$ts/util";
import { arrayBufferToBlob } from "$ts/util/convert";
import { getItemNameFromPath, getParentDirectory, join } from "$ts/util/fs";
import type { FilesystemProgressCallback } from "$types/fs";
import type { ExpandedMessage, ExpandedMessageNode, MessageAttachment } from "$types/messaging";
import type { Service } from "$types/service";

export class MessagingInterface extends BaseService implements IMessagingInterface {
  get serverUrl() {
    return getKMod<IServerManager>("server").url;
  }

  //#region LIFECYCLE
  constructor(pid: number, parentPid: number, name: string, host: IServiceHost, initBroadcast?: (msg: string) => void) {
    super(pid, parentPid, name, host, initBroadcast);

    this.setSource(__SOURCE__);
  }

  async start() {
    this.initBroadcast?.("Starting messaging service");

    const daemon = Stack.getProcess<IUserDaemon>(+Env.get("userdaemon_pid")!)!;
    const dispatch = daemon.serviceHost?.getService<IGlobalDispatch>("GlobalDispatch")!;

    dispatch?.subscribe("incoming-message", (message: ExpandedMessage) => {
      daemon?.notifications?.sendNotification({
        className: "incoming-message",
        image: `${Server.url}${message.author?.profilePicture}`,
        title: message.author?.username || "New message",
        message: message.title,
        buttons: [
          {
            caption: "View message",
            action: () => {
              daemon?.spawn?.spawnApp("Messages", +Env.get("shell_pid"), {}, "inbox", message._id);
            },
          },
        ],
      });
    });
  }

  //#endregion

  async getSentMessages(): Promise<ExpandedMessage[]> {
    if (this._disposed) return [];

    const messages = (await Daemon.GetConnector<IMessagingConnector>("MessagingConnector").Sent()).result ?? [];

    return messages.map((message) => {
      if (message.author) {
        message.author.profilePicture = Daemon.GetConnector<IUserConnector>("UserConnector").PictureUrl(message.authorId);
      }

      return message;
    });
  }

  async getReceivedMessages(): Promise<ExpandedMessage[]> {
    if (this._disposed) return [];
    const messages = (await Daemon.GetConnector<IMessagingConnector>("MessagingConnector").Received()).result ?? [];

    return messages.map((message) => {
      if (message.author) {
        message.author.profilePicture = Daemon.GetConnector<IUserConnector>("UserConnector").PictureUrl(message.authorId);
      }

      return message;
    });
  }

  async getInboxListing(): Promise<ExpandedMessage[]> {
    if (this._disposed) return [];

    const messages = (await Daemon.GetConnector<IMessagingConnector>("MessagingConnector").Inbox()).result ?? [];

    return messages.map((message) => {
      if (message.author) {
        message.author.profilePicture = Daemon.GetConnector<IUserConnector>("UserConnector").PictureUrl(message.authorId);
      }

      return message;
    });
  }

  async sendMessage(
    subject: string,
    recipients: string[],
    body: string,
    attachments: File[],
    repliesTo?: string,
    onProgress?: FilesystemProgressCallback
  ): Promise<boolean> {
    if (this._disposed) return false;
    return (
      await Daemon.GetConnector<IMessagingConnector>("MessagingConnector").Create(
        subject,
        recipients,
        body,
        attachments,
        repliesTo,
        onProgress
      )
    ).success;
  }

  async deleteMessage(messageId: string): Promise<boolean> {
    if (this._disposed) return false;
    return (await Daemon.GetConnector<IMessagingConnector>("MessagingConnector").Delete(messageId)).success ?? [];
  }

  async readMessage(messageId: string): Promise<ExpandedMessage | undefined> {
    if (this._disposed) return;
    const message = (await Daemon.GetConnector<IMessagingConnector>("MessagingConnector").Read(messageId)).result;

    if (message && message.author) {
      message.author.profilePicture = Daemon.GetConnector<IUserConnector>("UserConnector").PictureUrl(message.authorId);
    }

    return message;
  }

  async readAttachment(
    messageId: string,
    attachmentId: string,
    onProgress?: FilesystemProgressCallback
  ): Promise<ArrayBuffer | undefined> {
    if (this._disposed) return;

    return (
      await Daemon.GetConnector<IMessagingConnector>("MessagingConnector").AttachmentRead(messageId, attachmentId, onProgress)
    ).result;
  }

  async getMessageThread(messageId?: string): Promise<ExpandedMessageNode[]> {
    // Not changing the author pfp URLs here because it's an effectively never ending tree of messages
    return (await Daemon.GetConnector<IMessagingConnector>("MessagingConnector").Thread(messageId)).result ?? [];
  }

  async buildAttachment(filePath: string, onProgress?: FilesystemProgressCallback): Promise<File | undefined> {
    try {
      const parent = getParentDirectory(filePath);
      const filename = getItemNameFromPath(filePath);
      const parentDir = await Fs.readDir(parent);
      const partial = parentDir?.files.filter((f) => f.name === filename)[0];
      const contents = await Fs.readFile(filePath, onProgress);

      if (!partial || !contents) return undefined;

      return new File([contents], filename, { type: partial.mimeType });
    } catch {
      return undefined;
    }
  }

  async downloadAttachments(message: ExpandedMessage, attachments: MessageAttachment[], savePath: string) {
    let totalSize = attachments.map((a) => a.size).reduce((a, b) => a + b, 0);
    const dlProg = await Daemon!.files!.FileProgress(
      {
        type: "size",
        max: totalSize,
        caption: `Reading attachments`,
        icon: "MessagingIcon",
        subtitle: `Just a moment...`,
      },
      Daemon.getShell()?.pid || this.pid
    );

    dlProg.setDone(0);
    dlProg?.show();

    const result: Record<string, ArrayBuffer> = {};

    for (const attachment of attachments) {
      let lastValue = 0;

      const data = await this.readAttachment(message._id, attachment._id, (prog) => {
        // Using some math to increase the byte size of the progress appropriately
        dlProg.mutDone(Math.max(0, prog.value - lastValue));
        lastValue = prog.value;
      });

      if (data) result[attachment._id] = data;
      else totalSize -= attachment.size; // If the attachment could not be obtained, subtract it from the total for the save progress
    }

    await dlProg.stop();

    const saveProg = await Daemon!.files!.FileProgress(
      {
        type: "size",
        max: totalSize,
        caption: "Saving attachments",
        icon: "MessagingIcon",
        subtitle: `Saving to ${savePath}/`,
      },
      Daemon.getShell()?.pid || this.pid
    );

    saveProg.setDone(0);
    saveProg.show();

    for (const attachmentId in result) {
      const attachmentData = result[attachmentId];
      const attachment = attachments.find((a) => a._id === attachmentId);

      if (!attachment || !attachmentData) {
        saveProg.mutDone(+1);
        continue;
      }

      const destination = join(savePath, attachment.filename);
      saveProg.updSub(`Saving ${savePath}`);
      let lastValue = 0;
      await Fs.writeFile(destination, arrayBufferToBlob(attachmentData), (prog) => {
        saveProg.mutDone(Math.max(0, prog.value - lastValue));
        lastValue = prog.value;
      });
    }

    saveProg.stop();
  }

  async checkForMissedMessages() {
    const archived = Daemon!.preferences().appPreferences?.Messages?.archive || [];
    const messages =
      (await this?.getReceivedMessages())?.filter(
        (m) => !m.read && !archived.includes(m._id) && m.authorId !== Daemon.userInfo?._id
      ) || [];

    if (!messages?.length) return;

    if (messages?.length === 1) {
      const message = messages[0];
      Daemon!.notifications?.sendNotification({
        className: "incoming-message",
        image: message.author?.profilePicture,
        title: message.author?.username || "New message",
        message: message.title,
        buttons: [
          {
            caption: "View message",
            action: () => {
              Daemon!.spawn?.spawnApp("Messages", +Env.get("shell_pid"), {}, "inbox", message._id);
            },
          },
        ],
      });
    } else {
      Daemon!.notifications?.sendNotification({
        title: "Missed messages",
        message: `You have ${messages.length} ${Plural("message", messages.length)} in your inbox that you haven't read yet.`,
        image: "MessagingIcon",
        buttons: [
          {
            caption: "Open inbox",
            action: () => {
              Daemon!.spawn?.spawnApp("Messages", +Env.get("shell_pid"), {}, "inbox");
            },
          },
        ],
      });
    }
  }
}

export const messagingService: Service = {
  name: "Messaging service",
  description: "Handles the ArcOS messaging system",
  initialState: "started",
  process: MessagingInterface,
  startCondition: () => !Env.get("safemode"),
};
