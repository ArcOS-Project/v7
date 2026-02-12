import type { PermissionError, PermissionString } from "$ts/permissions/store";
import type {
  DirectoryReadReturn,
  ExtendedStat,
  FilesystemProgressCallback,
  IFilesystemDrive,
  RecursiveDirectoryReadReturn,
  UploadReturn,
} from "$types/fs";
import type { PermissionStorage } from "$types/permission";
import type { IProcess } from "./process";

export interface IPermissionHandler {
  _criticalProcess: boolean;
  readConfiguration(): Promise<void>;
  writeConfiguration(config: PermissionStorage): Promise<void>;
  hasPermission(process: IProcess, permission: PermissionString): boolean;
  grantPermission(process: IProcess, permission: PermissionString): void;
  revokePermission(process: IProcess, permission: PermissionString): void;
  isDenied(process: IProcess, permission: PermissionString): boolean;
  denyPermission(process: IProcess, permission: PermissionString): void;
  revokeDenial(process: IProcess, permission: PermissionString): void;
  requestPermission(process: IProcess, permission: PermissionString): Promise<void>;
  hasPermissionExplicit<T>(process: IProcess, permission: PermissionString, returnValue?: T): T | undefined;
  getOrCreatePermissionedFilesystemInteractor(process: IProcess): IPermissionedFilesystemInteractor;
  hasReadPermissionForPathExplicit(process: IProcess, path: string): void;
  hasWritePermissionForPathExplicit(process: IProcess, path: string): void;
  validatePermissionString(permission: PermissionString): void;
  throwError(error: PermissionError, client?: string, permission?: PermissionString): void;
  getPermissionId(process: IProcess, sudo?: boolean): string;
  setRegistration(clientId: string, appId: string): void;
  removeRegistration(clientId: string): void;
  removeApplication(appId: string): void;
  hasSudo(process: IProcess): boolean;
  grantSudo(process: IProcess): void;
  revokeSudo(process: IProcess): void;
  refreshSudo(process: IProcess): void;
}
export interface IPermissionedFilesystemInteractor {
  get mountDrive():
    | (<T = IFilesystemDrive>(
        id: string,
        supplier: IFilesystemDrive,
        letter?: string,
        onProgress?: FilesystemProgressCallback,
        ...args: any[]
      ) => Promise<T | false>)
    | undefined;
  get getDriveIdByIdentifier(): ((identifier: string) => string) | undefined;
  get umountDrive():
    | ((id: string, fromSystem?: boolean, onProgress?: FilesystemProgressCallback) => Promise<boolean>)
    | undefined;
  get getDriveByLetter(): ((letter: string, error?: boolean) => IFilesystemDrive) | undefined;
  get getDriveIdentifier(): ((path: string) => string) | undefined;
  get getDriveByPath(): ((path: string) => IFilesystemDrive) | undefined;
  get validatePath(): ((p: string) => void) | undefined;
  get removeDriveLetter(): ((p: string) => string) | undefined;
  get validateDriveLetter(): ((letter: string) => void) | undefined;
  readDir(path: string): Promise<DirectoryReadReturn | undefined>;
  bulk<T = any>(path: string, extension: string): Promise<Record<string, T>>;
  createDirectory(path: string, dispath?: boolean): Promise<boolean>;
  readFile(path: string, onProgress?: FilesystemProgressCallback): Promise<ArrayBuffer | undefined>;
  writeFile(path: string, data: Blob, onProgress?: FilesystemProgressCallback): Promise<boolean>;
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
  direct(path: string): Promise<string | undefined>;
  isDirectory(path: string): Promise<false | DirectoryReadReturn | undefined>;
  stat(path: string): Promise<ExtendedStat | undefined>;
}
