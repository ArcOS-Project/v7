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
}

export interface MessageCreateData {
  title: string;
  body: string;
  recipients: string[];
  attachments: File[];
}

export interface MessageNode extends Message {
  replies: MessageNode[];
}

export interface PartialMessage {
  authorId: string;
  title: string;
  recipient: string;
  attachmentCount: number;
  deleted?: boolean;
  _id: string;
  repliesTo?: string;
  createdAt: string;
  author?: PublicUserInfo;
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
