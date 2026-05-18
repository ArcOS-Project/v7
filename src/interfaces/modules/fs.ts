import type { Constructs } from "$interfaces/common";
import type { IFilesystemDrive, IFilesystemProxy } from "$interfaces/fs";
import type {
  DirectoryReadReturn,
  ExtendedStat,
  FilesystemProgress,
  FilesystemProgressCallback,
  FsProxyInfo,
  RecursiveDirectoryReadReturn,
  UploadReturn,
} from "$types/fs";

export interface IFilesystem {
  drives: Record<string, IFilesystemDrive>;
  loadedProxies: IFilesystemProxy[];
  _init(): Promise<void>;
  getDriveById(id: string): IFilesystemDrive;
  mountDrive<T extends IFilesystemDrive = IFilesystemDrive>(
    id: string,
    supplier: Constructs<IFilesystemDrive>,
    letter?: string,
    onProgress?: FilesystemProgressCallback,
    ...args: any[]
  ): Promise<T | false>;
  getDriveIdByIdentifier(identifier: string): string;
  umountDrive(id: string, fromSystem?: boolean, onProgress?: FilesystemProgressCallback): Promise<boolean>;
  getDriveByLetter(letter: string, error?: boolean): IFilesystemDrive;
  getDriveIdentifier(path: string): string;
  getDriveByPath(path: string): IFilesystemDrive;
  validatePath(p: string): void;
  removeDriveLetter(p: string): string;
  validateDriveLetter(letter: string): void;
  getProxyInfo(p: string, topLevel?: boolean): FsProxyInfo | undefined;
  tryGetProxyInfo(p: string, topLevel?: boolean): FsProxyInfo | undefined;
  tryHandleProxyReadDir(p: string): Promise<DirectoryReadReturn | undefined>;
  tryHandleProxyReadFile(p: string): Promise<ArrayBuffer | undefined>;
  readDir(path: string): Promise<DirectoryReadReturn | undefined>;
  bulk<T = any>(path: string, extension: string): Promise<Record<string, T>>;
  createDirectory(path: string, dispatch?: boolean): Promise<boolean>;
  readFile(path: string, onProgress?: FilesystemProgressCallback): Promise<ArrayBuffer | undefined>;
  writeFile(path: string, data: Blob, onProgress?: FilesystemProgressCallback, dispatch?: boolean): Promise<boolean>;
  tree(path: string): Promise<RecursiveDirectoryReadReturn | undefined>;
  copyItem(source: string, destination: string, dispatch?: boolean, onProgress?: FilesystemProgressCallback): Promise<boolean>;
  moveItem(source: string, destination: string, dispatch?: boolean, onProgress?: FilesystemProgressCallback): Promise<boolean>;
  deleteItem(path: string, dispatch?: boolean): Promise<boolean>;
  uploadFiles(
    target: string,
    accept?: string,
    multiple?: boolean,
    onProgress?: FilesystemProgressCallback
  ): Promise<UploadReturn>;
  defaultProgress(d: FilesystemProgress): void;
  lockFile(path: string, pid: number): Promise<void>;
  releaseLock(path: string, pid: number): Promise<void>;
  direct(path: string): Promise<string | undefined>;
  nextAvailableDriveLetter(): string | undefined;
  isDirectory(path: string): Promise<false | DirectoryReadReturn>;
  stat(path: string): Promise<ExtendedStat | undefined>;
  imageThumbnail(path: string, width: number, height?: number): Promise<string | undefined>;
}
