import type { IBaseService } from "$interfaces/service";
import type { FilesystemProgressCallback } from "$types/fs";
import type { ExpandedMessage, ExpandedMessageNode, MessageAttachment } from "$types/messaging";

export interface IMessagingInterface extends IBaseService {
  get serverUrl(): string | undefined;
  start(): Promise<void>;
  getSentMessages(): Promise<ExpandedMessage[]>;
  getReceivedMessages(): Promise<ExpandedMessage[]>;
  getInboxListing(): Promise<ExpandedMessage[]>;
  sendMessage(
    subject: string,
    recipients: string[],
    body: string,
    attachments: File[],
    repliesTo?: string,
    onProgress?: FilesystemProgressCallback
  ): Promise<boolean>;
  deleteMessage(messageId: string): Promise<boolean>;
  readMessage(messageId: string): Promise<ExpandedMessage | undefined>;
  readAttachment(
    messageId: string,
    attachmentId: string,
    onProgress?: FilesystemProgressCallback
  ): Promise<ArrayBuffer | undefined>;
  getMessageThread(messageId?: string): Promise<ExpandedMessageNode[]>;
  buildAttachment(filePath: string, onProgress?: FilesystemProgressCallback): Promise<File | undefined>;
  downloadAttachments(message: ExpandedMessage, attachments: MessageAttachment[], savePath: string): void;
}
