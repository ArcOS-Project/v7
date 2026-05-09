import type { FileProgressMutator, FsProgressOperation } from "$apps/components/fsprogress/types";
import type { LoadSaveDialogData } from "$apps/user/filemanager/types";
import type { ILegacyServerDrive } from "$interfaces/drives/ILegacyServerDrive";
import type { IMemoryFilesystemDrive } from "$interfaces/drives/IMemoryFilesystemDrive";
import type { IFilesystemDrive } from "$interfaces/IFilesystemDrive";
import type { IUserContext } from "$interfaces/IUserDaemon";
import type { FileHandler, FileOpenerResult } from "$types/fs";
import type { LegacyConnectionInfo } from "$types/legacy";
import type { ArcShortcut } from "$types/shortcut";
import type { CategorizedDiskUsage } from "$types/user";

export interface IFilesystemUserContext extends IUserContext {
  TempFs?: IMemoryFilesystemDrive;
  fileHandlers: Record<string, FileHandler>;
  mountedDrives: string[];
  _init(): Promise<void>;
  _deactivate(): Promise<void>;
  mountZip(path: string, letter?: string, fromSystem?: boolean): Promise<false | IFilesystemDrive | undefined>;
  unmountMountedDrives(): Promise<void>;
  FileProgress(initialData: Partial<FsProgressOperation>, parentPid?: number): Promise<FileProgressMutator>;
  moveMultiple(sources: string[], destination: string, pid: number): Promise<void>;
  copyMultiple(sources: string[], destination: string, pid: number): Promise<void>;
  findHandlerToOpenFile(path: string): Promise<FileOpenerResult[]>;
  getAllFileHandlers(): Promise<FileOpenerResult[]>;
  LoadSaveDialog(data: Omit<LoadSaveDialogData, "returnId">): Promise<string[] | [undefined]>;
  openFile(path: string, shortcut?: ArcShortcut): Promise<any>;
  openWith(path: string): Promise<void>;
  determineCategorizedDiskUsage(): Promise<CategorizedDiskUsage>;
  getThumbnailFor(path: string): Promise<string | undefined>;
  mountLegacyFilesystem(connectionInfo: LegacyConnectionInfo): Promise<false | ILegacyServerDrive>;
  moveToTrashOrDeleteItem(path: string, dispatch?: boolean): Promise<boolean>;
  normalizePath(path: string): string;
  mountSourceDrive(): Promise<IFilesystemDrive | false>;
}
