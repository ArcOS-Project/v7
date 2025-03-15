import type { ArcShortcut, ShortcutStore } from "./shortcut";

export interface FileEntry {
  name: string;
  size: number;
  dateCreated: Date;
  dateModified: Date;
  mimeType: string;
  itemId: string;
  shortcut?: ArcShortcut;
}

export interface FsAccess {
  _id?: string;
  userId: string;
  path: string;
  accessor: string;
  createdAt?: Date;
}

export type PathedFileEntry = FileEntry & { path: string };

export type FullFileEntry = FileEntry & {
  data: Blob;
};

export interface FolderEntry {
  name: string;
  dateCreated: Date;
  dateModified: Date;
  itemId: string;
}

export interface DirectoryReadReturn {
  dirs: FolderEntry[];
  files: FileEntry[];
  totalFiles: number;
  totalFolders: number;
  totalSize: number;
  shortcuts: ShortcutStore;
}

export interface RecursiveDirectoryReadReturn {
  dirs: RecursiveDirectory[];
  files: FileEntry[];
}

export type RecursiveDirectory = FolderEntry & {
  children: RecursiveDirectoryReadReturn;
};

export interface UserQuota {
  used: number;
  max: number;
  free: number;
  percentage: number;
  unknown?: boolean;
}

export interface SingleUploadReturn {
  path: string;
  file: File;
  content: Blob;
}

export type UploadReturn = SingleUploadReturn[];

export interface FilesystemProgress {
  type: "size" | "items" | "percentage";
  max: number;
  value: number;
  what?: string;
}

export type FilesystemProgressCallback = (progress: FilesystemProgress) => void;
