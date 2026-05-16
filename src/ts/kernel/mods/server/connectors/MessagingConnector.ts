import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IMessagingConnector } from "$interfaces/modules/server/IMessagingConnector";
import { CommandResult } from "$ts/result";
import { ToAxiosProgress } from "$ts/util";
import type { FilesystemProgressCallback } from "$types/fs";
import type { ExpandedMessage, ExpandedMessageNode } from "$types/messaging";
import { ServerConnector } from ".";

export class MessagingConnector extends ServerConnector implements IMessagingConnector {
  override prefix = "/messaging";

  async AttachmentRead(
    messageId: string,
    attachmentId: string,
    onProgress?: FilesystemProgressCallback
  ): Promise<ICommandResult<ArrayBuffer>> {
    try {
      return CommandResult.FromResponse(
        await this.server.get(`/attachment/${messageId}/${attachmentId}`, {
          responseType: "arraybuffer",
          onDownloadProgress: ToAxiosProgress(onProgress),
        })
      );
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async Thread(messageId?: string): Promise<ICommandResult<ExpandedMessageNode[]>> {
    try {
      return CommandResult.FromResponse(await this.server.get("/thread" + messageId ? `/${messageId}` : ""));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async Delete(messageId: string): Promise<ICommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.delete(`/${messageId}`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async Inbox(): Promise<ICommandResult<ExpandedMessage[]>> {
    try {
      return CommandResult.FromResponse(await this.server.get(`/inbox`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async Create(
    subject: string,
    recipients: string[],
    body: string,
    attachments: File[],
    repliesTo?: string,
    onProgress?: FilesystemProgressCallback
  ): Promise<ICommandResult> {
    try {
      const formData = new FormData();
      formData.set("title", subject);
      formData.set("body", body);
      formData.set("recipients", JSON.stringify(recipients));

      if (repliesTo) formData.set("repliesTo", repliesTo);

      attachments.forEach((a) => formData.append("attachments", a));

      return CommandResult.FromResponse(await this.server.post("/", formData, { onUploadProgress: ToAxiosProgress(onProgress) }));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async Read(messageId: string): Promise<ICommandResult<ExpandedMessage>> {
    try {
      return CommandResult.FromResponse(await this.server.get(`/read/${messageId}`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async Received(): Promise<ICommandResult<ExpandedMessage[]>> {
    try {
      return CommandResult.FromResponse(await this.server.get(`/received`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async Sent(): Promise<ICommandResult<ExpandedMessage[]>> {
    try {
      return CommandResult.FromResponse(await this.server.get(`/sent`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }
}
