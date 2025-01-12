export interface FileEntry {
  name: string;
  size: number;
  dateCreated: Date;
  dateModified: Date;
}

export interface FolderEntry {
  name: string;
  dateCreated: Date;
  dateModified: Date;
}

export interface DirectoryReadReturn {
  dirs: FolderEntry[];
  files: FileEntry[];
}

export interface RecursiveDirectoryReadReturn {
  dirs: (FolderEntry & { children: RecursiveDirectoryReadReturn })[];
  files: FileEntry[];
}

export interface UserQuota {
  used: number;
  max: number;
  free: number;
  percentage: number;
}

export interface SupplierFlags {
  readDir: boolean;
  createDirectory: boolean;
  readFile: boolean;
  writeFile: boolean;
  tree: boolean;
  copyItem: boolean;
  moveItem: boolean;
  deleteItem: boolean;
}

export type FilesystemOperation =
  | "readDir"
  | "createDirectory"
  | "readFile"
  | "writeFile"
  | "tree"
  | "copyItem"
  | "moveItem"
  | "deleteItem";

export type ReadDirectorySupplier = (
  path: string
) => Promise<DirectoryReadReturn | undefined>;
export type CreateDirectorySupplier = (path: string) => Promise<boolean>;
export type ReadFileSupplier = (
  path: string
) => Promise<ArrayBuffer | undefined>;
export type WriteFileSupplier = (path: string, data: Blob) => Promise<boolean>;
export type TreeSupplier = (
  path: string
) => Promise<RecursiveDirectoryReadReturn | undefined>;
export type CopyItemSupplier = (
  source: string,
  destination: string
) => Promise<boolean>;
export type MoveItemSupplier = (
  source: string,
  destination: string
) => Promise<boolean>;
export type DeleteItemSupplier = (path: string) => Promise<boolean>;
