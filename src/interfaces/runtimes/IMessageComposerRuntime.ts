import type { Attachment } from "$apps/components/messagecomposer/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IMessagingInterface } from "$interfaces/services/IMessagingInterface";
import type { ReadableStore } from "$types/writable";

export interface IMessageComposerRuntime extends IAppProcess {
  sending: ReadableStore<boolean>;
  recipients: ReadableStore<string[]>;
  attachments: ReadableStore<Attachment[]>;
  title: ReadableStore<string>;
  body: ReadableStore<string>;
  replyId: string | undefined;
  service: IMessagingInterface;
  send(): Promise<void>;
  discard(): Promise<boolean | void>;
  sendFailed(): void;
  addAttachment(): Promise<void>;
  filesToAttachments(...files: File[]): Attachment[];
  removeAttachment(uuid: string): void;
  removeRecipient(recipient: string): void;
  isModified(): number;
}
