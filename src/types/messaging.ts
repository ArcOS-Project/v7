import type { PublicUserInfo } from "./user";

export interface Message {
  authorId: string; // userId
  title: string;
  body: string;
  recipient: string; // userId[]
  attachments?: string[]; // attachmentId[]
  _id: string;
  repliesTo?: string;
  correlationId: string;
  createdAt: string;
  updatedAt: string;
  read: boolean;
}

export interface MessageCreateData {
  title: string;
  body: string;
  recipients: string[];
  attachments: File[];
}

export interface ExpandedMessage extends Message {
  attachmentData?: MessageAttachment[];
  author?: PublicUserInfo;
}

export interface ExpandedMessageNode extends ExpandedMessage {
  replies: ExpandedMessageNode[];
}

export interface MessageAttachment {
  filename: string;
  size: number;
  mimeType: string;
  realPath: string; // /attachments/*
  signature: string; // sha256
  _id: string;
}
