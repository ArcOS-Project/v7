import { getItemNameFromPath, getParentDirectory } from "$ts/fs/util";
import type { ProcessHandler } from "$ts/process/handler";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import { authcode } from "$ts/util";
import type { FilesystemProgressCallback } from "$types/fs";
import type { ExpandedMessage, Message, MessageNode, PartialMessage } from "$types/messaging";
import type { Service } from "$types/service";
import { ServerManager } from "..";
import { Backend } from "../axios";
import { UserDaemon } from "../user/daemon";
import { GlobalDispatch } from "../ws";

export class MessagingInterface extends BaseService {
  token: string | undefined;
  serverUrl: string | false | undefined;
  serverAuthCode: string;

  //#region ELCYCEFIL
  constructor(handler: ProcessHandler, pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(handler, pid, parentPid, name, host);

    this.serverUrl = ServerManager.url();
    this.serverAuthCode = import.meta.env.DW_SERVER_AUTHCODE || "";
    this.token = host.daemon.token;
  }

  async start() {
    const daemon = this.handler.getProcess<UserDaemon>(+this.env.get("userdaemon_pid")!)!;
    const dispatch = daemon.serviceHost?.getService<GlobalDispatch>("GlobalDispatch")!;

    dispatch?.subscribe("incoming-message", (message: Message) => {
      daemon?.sendNotification({
        className: "incoming-message",
        image: `${import.meta.env.DW_SERVER_URL}${message.author?.profilePicture}`,
        title: message.author?.username || "New message",
        message: message.title,
        buttons: [
          {
            caption: "View message",
            action: () => {
              daemon?.spawnApp("Messages", +this.env.get("shell_pid"), "inbox", message._id);
            },
          },
        ],
      });
    });
  }

  //#endregion

  async getSentMessages(): Promise<PartialMessage[]> {
    if (this._disposed) return [];

    try {
      const response = await Backend.get("/messaging/sent", { headers: { Authorization: `Bearer ${this.token}` } });
      const data = (response.data as PartialMessage[]).map((message) => {
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
  async getReceivedMessages(): Promise<PartialMessage[]> {
    if (this._disposed) return [];

    try {
      const response = await Backend.get("/messaging/received", { headers: { Authorization: `Bearer ${this.token}` } });
      const data = (response.data as PartialMessage[]).map((message) => {
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
        headers: { Authorization: `Bearer ${this.token}` },
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
      const response = await Backend.delete(`/messaging/${messageId}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async readMessage(messageId: string): Promise<ExpandedMessage | undefined> {
    if (this._disposed) return;

    try {
      const response = await Backend.get(`/messaging/read/${messageId}`, { headers: { Authorization: `Bearer ${this.token}` } });

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
        headers: { Authorization: `Bearer ${this.token}` },
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

  async getMessageThread(messageId?: string): Promise<MessageNode[]> {
    const url = messageId ? `/messaging/thread/${messageId}` : `/messaging/thread`;

    try {
      const response = await Backend.get(url, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as MessageNode[];
    } catch {
      return [];
    }
  }

  async buildAttachment(filePath: string, onProgress?: FilesystemProgressCallback): Promise<File | undefined> {
    try {
      const parent = getParentDirectory(filePath);
      const filename = getItemNameFromPath(filePath);
      const parentDir = await this.fs.readDir(parent);
      const partial = parentDir?.files.filter((f) => f.name === filename)[0];
      const contents = await this.fs.readFile(filePath, onProgress);

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
  startCondition: (daemon) => !daemon.env.get("safemode"),
};
