import type { App } from "./app";
import type { ArcShortcut, ShortcutStore } from "./shortcut";
import type { PublicUserInfo } from "./user";

export interface FileEntry {
  name: string;
  size: number;
  dateCreated: Date;
  dateModified: Date;
  mimeType: string;
  itemId: string;
  shortcut?: ArcShortcut;
  action?: () => void;
  modifiers?: SummarizedFsModifiers;
}

export interface FsAccess {
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
  modifiers?: SummarizedFsModifiers;
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
  | "tree"
  | "copyItem"
  | "moveItem"
  | "deleteItem"
  | "direct"
  | "quota"
  | "bulk"
  | "stat"
  | "bulkytree";

export interface FilesystemStat {
  isFile: boolean;
  isDirectory: boolean;
  size: number;
  created: number;
  modified: number;
}

export interface FsModifier {
  _id?: string;
  userId: string;
  itemId: string;
  kind: FsModifierKind;
  isAdmin?: boolean;
  isDir?: boolean;
  createdAt?: string;
  modifiedAt?: string;
}

export interface ExtendedFsModifier extends FsModifier {
  user?: PublicUserInfo;
}

export interface SummarizedFsModifiers {
  itemId: string;
  lastWrite: ExtendedFsModifier | null;
  createdBy: ExtendedFsModifier | null;
}

export type FsModifierKind = "create" | "write";

export interface FsModifierOptions {
  kind: FsModifierKind;
  isAdmin?: boolean;
  isDir?: boolean;
}

export interface ExtendedStat extends FilesystemStat {
  modifiers?: SummarizedFsModifiers;
}
// uhhh yes?
