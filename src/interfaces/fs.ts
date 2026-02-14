import type {
  DirectoryReadReturn,
  DriveCapabilities,
  FilesystemProgressCallback,
  FilesystemStat,
  RecursiveDirectoryReadReturn,
  UserQuota,
} from "$types/fs";
import type { FSQuota, UserDirectory } from "$types/legacy";
import type { LogLevel } from "$types/logging";
import type { SharedDriveType } from "$types/shares";
import type { IServerManager } from "./kernel";

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
  imageThumbnail(path: string, width: number, height?: number): Promise<string | undefined>;
}

export interface IMemoryFilesystemDrive extends IFilesystemDrive {
  takeSnapshot(): Promise<Record<string, any>>;
  restoreSnapshot(snapshot: Record<string, any>): void;
}

export interface ISharedDrive extends IFilesystemDrive {
  shareId?: string;
  shareInfo: SharedDriveType;
}

export interface IZipDrive extends IFilesystemDrive {
  _sync(progress?: FilesystemProgressCallback): Promise<void>;
}

export interface ILegacyServerDrive extends IFilesystemDrive {
  TEST_MODES: [boolean, number][];
  DEFAULT_DIRECTORY: UserDirectory;
  DEFAULT_QUOTA: FSQuota;
  legacy_readDir(path: string): Promise<UserDirectory>;
  legacy_readFile(path: string): Promise<ArrayBuffer | undefined>;
  legacy_testConnection(server: string, authCode?: string): Promise<false | { proto: string; port: number; url: string }>;
  legacy_generateToken(username: string, password: string): Promise<boolean>;
  legacy_quota(): Promise<FSQuota>;
}
