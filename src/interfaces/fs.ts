import type {
  DirectoryReadReturn,
  DriveCapabilities,
  FilesystemProgressCallback,
  FilesystemStat,
  RecursiveDirectoryReadReturn,
  UserQuota,
} from "$types/fs";
import type { LogLevel } from "$types/logging";
import type { Constructs } from "./common";
import type { IServerManager } from "./modules/server";

export interface IFilesystemDrive {
  server: IServerManager;
  driveLetter: string | undefined;
  label: string;
  uuid: string;
  readonly FIXED: boolean;
  readonly REMOVABLE: boolean;
  readonly READONLY: boolean;
  readonly HIDDEN: boolean;
  readonly IDENTIFIES_AS: string;
  readonly FILESYSTEM_SHORT: string;
  readonly FILESYSTEM_LONG: string;
  BUSY: boolean;
  Log(message: string, level?: LogLevel): void;
  lockFile(path: string, pid: number): Promise<void>;
  releaseLock(path: string, pid: number, fromSystem?: boolean): Promise<void>;
  __spinUp(onProgress?: FilesystemProgressCallback): Promise<boolean>;
  __spinDown(onProgress?: FilesystemProgressCallback): Promise<boolean>;
  _spinUp(onProgress?: FilesystemProgressCallback): Promise<boolean>;
  _spinDown(onProgress?: FilesystemProgressCallback): Promise<boolean>;
  readDir(path: string): Promise<DirectoryReadReturn | undefined>;
  createDirectory(path: string): Promise<boolean>;
  readFile(path: string, onProgress?: FilesystemProgressCallback): Promise<ArrayBuffer | undefined>;
  writeFile(path: string, data: Blob, onProgress?: FilesystemProgressCallback): Promise<boolean>;
  tree(path: string): Promise<RecursiveDirectoryReadReturn | undefined>;
  copyItem(source: string, destination: string): Promise<boolean>;
  moveItem(source: string, destination: string): Promise<boolean>;
  deleteItem(path: string): Promise<boolean>;
  direct(path: string): Promise<string | undefined>;
  quota(): Promise<UserQuota>;
  bulk<T = any>(path: string, extension: string): Promise<Record<string, T>>;
  stat(path: string): Promise<FilesystemStat | undefined>;
  isCapable(capability: DriveCapabilities): void;
  tryIsCapable(capability: DriveCapabilities): boolean;
  imageThumbnail(path: string, width: number, height?: number): Promise<string | undefined>;
}

export interface IFilesystemProxy {
  uuid: string;
  readonly displayName?: string;
  readDir(path: string): Promise<DirectoryReadReturn | undefined>;
  readFile(path: string, onProgress?: FilesystemProgressCallback): Promise<ArrayBuffer | undefined>;
}

export interface IFilesystemProxyConstructor extends Constructs<IFilesystemProxy, [string]> {
  PROXY_UUID: string;
}
