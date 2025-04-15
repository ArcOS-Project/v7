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
  createdAt: boolean;
  updatedAt: boolean;
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
