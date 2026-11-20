import type { IFilesystemProxy } from "$interfaces/IFilesystemDrive";
import type { App } from "../apps/app";
import type { PublicUserInfo } from "../user";
import type { ArcShortcut, ShortcutStore } from "./shortcut";

// !tpa
export interface FileEntry {
  name: string;
  size: number;
  dateCreated: Date;
  dateModified: Date;
  mimeType: string;
  itemId: string;
  shortcut?: ArcShortcut;
  action?: () => void;
  modifiers?: SummarizedFilesystemModifiers;
}

export interface FileAccessor {
  _id?: string;
  userId: string;
  shareId?: string;
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
  modifiers?: SummarizedFilesystemModifiers;
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
  shortcuts: ShortcutStore;
}

export type RecursiveDirectory = FolderEntry & {
  children: RecursiveDirectoryReadReturn;
};

export interface UserQuota extends Record<string, number | boolean | undefined> {
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

export interface FileHandler {
  isHandler: true;
  name: string;
  description: string;
  icon: string;
  hidden?: boolean;
  opens: {
    extensions?: string[];
    mimetypes?: string[];
  };
  handle: (path: string) => void;
}

export interface FileOpenerResult {
  type: "handler" | "app";
  app?: App;
  handler?: FileHandler;
  id: string;
}

export type DriveCapabilities =
  | "readDir"
  | "makeDir"
  | "readFile"
  | "writeFile"
  | "copyItem"
  | "moveItem"
  | "deleteItem"
  | "tree"
  | "direct"
  | "bulk"
  | "stat"
  | "quota";

export interface FilesystemStat {
  isFile: boolean;
  isDirectory: boolean;
  size: number;
  created: number;
  modified: number;
}

export interface FilesystemModifier {
  _id?: string;
  userId: string;
  itemId: string;
  kind: FilesystemModifierKind;
  isAdmin?: boolean;
  isDir?: boolean;
  createdAt?: string;
  modifiedAt?: string;
}

export interface ExtendedFilesystemModifier extends FilesystemModifier {
  user?: PublicUserInfo;
}

export interface SummarizedFilesystemModifiers {
  itemId: string;
  lastWrite: ExtendedFilesystemModifier | null;
  createdBy: ExtendedFilesystemModifier | null;
}

export type FilesystemModifierKind = "create" | "write";

export interface FilesystemModifierOptions {
  kind: FilesystemModifierKind;
  isAdmin?: boolean;
  isDir?: boolean;
}

export interface ExtendedStat extends FilesystemStat {
  modifiers?: SummarizedFilesystemModifiers;
}

export interface FilesystemProxyInfo {
  prefix: string;
  proxyUuid: string;
  proxyHandler: IFilesystemProxy;
  path: string;
  displayName?: string;
}

export type RecyclingStrategy = "cancel" | "recycle" | "incinerate";
// !endtpa

export const DefaultUserQuota: UserQuota = {
  used: 0,
  max: 100,
  free: 100,
  percentage: 0,
  unknown: true,
};

