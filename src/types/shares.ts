export interface SharedDriveType {
  userId: string;
  accessors: string[];
  shareName: string;
  maxSize: number;
  passwordHash: string;
  description?: string;
  locked: boolean;
  ownerName?: string;
  _id: string;
}

export interface ShareCreateOptions {
  userId: string;
  description?: string;
  size?: number;
  shareName: string;
  password: string;
}
