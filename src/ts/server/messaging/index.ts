import { Env, Fs, getKMod, Server, Stack } from "$ts/env";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import { authcode } from "$ts/util";
import { getItemNameFromPath, getParentDirectory } from "$ts/util/fs";
import type { FilesystemProgressCallback } from "$types/fs";
import type { ServerManagerType } from "$types/kernel";
import type { ExpandedMessage, ExpandedMessageNode } from "$types/messaging";
import type { Service } from "$types/service";
import { Backend } from "../axios";
import { Daemon, UserDaemon } from "../user/daemon";
import { GlobalDispatch } from "../ws";

export class MessagingInterface extends BaseService {
  get serverUrl() {
    return getKMod<ServerManagerType>("server").url;
  }

  get serverAuthCode() {
    return authcode();
  }

  //#region LIFECYCLE
  constructor(pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(pid, parentPid, name, host);

    this.setSource(__SOURCE__);
  }

  async start() {
    const daemon = Stack.getProcess<UserDaemon>(+Env.get("userdaemon_pid")!)!;
    const dispatch = daemon.serviceHost?.getService<GlobalDispatch>("GlobalDispatch")!;

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
              daemon?.spawn?.spawnApp("Messages", +Env.get("shell_pid"), "inbox", message._id);
            },
          },
        ],
      });
    });
  }

  //#endregion

  async getSentMessages(): Promise<ExpandedMessage[]> {
    if (this._disposed) return [];

    try {
      const response = await Backend.get("/messaging/sent", { headers: { Authorization: `Bearer ${Daemon!.token}` } });
      const data = (response.data as ExpandedMessage[]).map((message) => {
        if (message.author) {
          message.author.profilePicture = `${this.serverUrl}/user/pfp/${message.authorId}${authcode()}`;
        }

        return message;
      });

      return data;
    } catch {
      return [];
    }
  }
  async getReceivedMessages(): Promise<ExpandedMessage[]> {
    if (this._disposed) return [];

    try {
      const response = await Backend.get("/messaging/received", { headers: { Authorization: `Bearer ${Daemon!.token}` } });
      const data = (response.data as ExpandedMessage[]).map((message) => {
        if (message.author) {
          message.author.profilePicture = `${this.serverUrl}/user/pfp/${message.authorId}${authcode()}`;
        }

        return message;
      });

      return data;
    } catch {
      return [];
    }
  }

  async getInboxListing(): Promise<ExpandedMessage[]> {
    if (this._disposed) return [];

    try {
      const response = await Backend.get("/messaging/inbox", { headers: { Authorization: `Bearer ${Daemon!.token}` } });
      const data = (response.data as ExpandedMessage[]).map((message) => {
        if (message.author) {
          message.author.profilePicture = `${this.serverUrl}/user/pfp/${message.authorId}${authcode()}`;
        }

        return message;
      });

      return data;
    } catch {
      return [];
    }
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

    const formData = new FormData();
    formData.set("title", subject);
    formData.set("body", body);
    formData.set("recipients", JSON.stringify(recipients));

    if (repliesTo) formData.set("repliesTo", repliesTo);

    attachments.forEach((a) => formData.append("attachments", a));

    try {
      const response = await Backend.post("/messaging", formData, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
        onUploadProgress: (progress) => {
          onProgress?.({
            max: progress.total || 0,
            value: progress.loaded || 0,
            type: "size",
          });
        },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async deleteMessage(messageId: string): Promise<boolean> {
    if (this._disposed) return false;

    try {
      const response = await Backend.delete(`/messaging/${messageId}`, { headers: { Authorization: `Bearer ${Daemon!.token}` } });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async readMessage(messageId: string): Promise<ExpandedMessage | undefined> {
    if (this._disposed) return;

    try {
      const response = await Backend.get(`/messaging/read/${messageId}`, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
      });

      const data = response.data as ExpandedMessage;

      if (data && data.author) {
        data.author.profilePicture = `${this.serverUrl}/user/pfp/${data.authorId}${authcode()}`;
      }

      return response.data as ExpandedMessage;
    } catch {
      return undefined;
    }
  }

  async readAttachment(
    messageId: string,
    attachmentId: string,
    onProgress?: FilesystemProgressCallback
  ): Promise<ArrayBuffer | undefined> {
    if (this._disposed) return;

    try {
      const response = await Backend.get(`/messaging/attachment/${messageId}/${attachmentId}`, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
        responseType: "arraybuffer",
        onDownloadProgress: (progress) => {
          onProgress?.({
            max: progress.total || 0,
            value: progress.loaded || 0,
            type: "size",
          });
        },
      });

      return response.data;
    } catch {
      return undefined;
    }
  }

  async getMessageThread(messageId?: string): Promise<ExpandedMessageNode[]> {
    const url = messageId ? `/messaging/thread/${messageId}` : `/messaging/thread`;

    try {
      const response = await Backend.get(url, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
        params: { reverse: true },
      });

      // Not changing the author pfp URLs here because it's an effectively never ending tree of messages

      return response.data as ExpandedMessageNode[];
    } catch {
      return [];
    }
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
}

export const messagingService: Service = {
  name: "Messaging service",
  description: "Handles the ArcOS messaging system",
  initialState: "started",
  process: MessagingInterface,
  startCondition: () => !Env.get("safemode"),
};
