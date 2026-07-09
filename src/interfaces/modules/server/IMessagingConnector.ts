import type { ICommandResult } from "$interfaces/ICommandResult";
import type { ExpandedMessage, ExpandedMessageNode, Message } from "$types/server/messaging";
import type { FilesystemProgressCallback } from "$types/system/fs";
import type { IServerConnector } from "../IServerManager";

// !tpa
export interface IMessagingConnector extends IServerConnector {
  AttachmentRead(
    messageId: string,
    attachmentId: string,
    onProgress?: FilesystemProgressCallback
  ): Promise<ICommandResult<ArrayBuffer>>;
  Thread(messageId?: string): Promise<ICommandResult<ExpandedMessageNode[]>>;
  Delete(messageId: string): Promise<ICommandResult>;
  Inbox(): Promise<ICommandResult<ExpandedMessage[]>>;
  Create(
    subject: string,
    recipients: string[],
    body: string,
    attachments: File[],
    repliesTo?: string,
    onProgress?: FilesystemProgressCallback
  ): Promise<ICommandResult<Message[]>>;
  Read(messageId: string): Promise<ICommandResult<ExpandedMessage>>;
  Received(): Promise<ICommandResult<ExpandedMessage[]>>;
  Sent(): Promise<ICommandResult<ExpandedMessage[]>>;
}
