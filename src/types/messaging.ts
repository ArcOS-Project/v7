import type { PublicUserInfo } from "./user";

export interface Message {
  authorId: string; // userId
  title: string;
  body: string;
  recipient: string; // userId[]
  attachments?: string[]; // attachmentId[]
  _id: string;
  repliesTo?: string;
  deleted?: boolean;
  correlationId: string;
  createdAt: string;
  updatedAt: string;
  author?: PublicUserInfo;
  read: boolean;
}

export interface MessageCreateData {
  title: string;
  body: string;
  recipients: string[];
  attachments: File[];
}

export interface MessageNode extends Message {
  replies: MessageNode[];
  attachmentCount: number;
}

export interface PartialMessage {
  _id: string;
  authorId: string;
  title: string;
  recipient: string;
  attachmentCount: number;
  deleted?: boolean;
  repliesTo?: string;
  createdAt: string;
  author?: PublicUserInfo;
  correlationId: string;
  read: boolean;
  parent?: PartialMessage;
}

export type ExpandedMessage = Omit<Message, "attachments"> & {
  attachments: MessageAttachment[];
};
export type ExpandedPartialMessage = Omit<PartialMessage, "attachments"> & {
  attachments: MessageAttachment[];
};

export interface MessageAttachment {
  filename: string;
  size: number;
  mimeType: string;
  signature: string; // sha256
  _id: string;
}
