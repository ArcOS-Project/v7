export interface DirectFilesystemAccessor {
  _id?: string;
  userId: string;
  path: string;
  accessor: string;
  createdAt?: Date;
}

export interface FilesystemIndexingItem {
  _id: string;
  userId: string;
  itemId: string;
  type: "file" | "directory";
  size?: number;
  mimeType?: string;
  dateCreated: Date;
  dateModified: Date;
  path: string;
}
