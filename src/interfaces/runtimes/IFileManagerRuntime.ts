import type {
  FileManagerNotice,
  LoadSaveDialogData,
  QuotedDrive,
  VirtualFileManagerLocation,
} from "$apps/user/filemanager/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IFilesystemDrive } from "$interfaces/IFilesystemDrive";
import type { DirectoryReadReturn, FolderEntry } from "$types/fs";
import type { ShortcutStore } from "$types/shortcut";
import type { BooleanStore, ReadableStore, StringStore } from "$types/writable";

export interface IFileManagerRuntime extends IAppProcess {
  path: StringStore;
  contents: ReadableStore<DirectoryReadReturn | undefined>;
  shortcuts: ReadableStore<ShortcutStore>;
  loading: BooleanStore;
  errored: BooleanStore;
  selection: ReadableStore<string[]>;
  starting: BooleanStore;
  rootFolders: ReadableStore<FolderEntry[]>;
  drives: ReadableStore<Record<string, QuotedDrive>>;
  notice: ReadableStore<FileManagerNotice | undefined>;
  showNotice: ReadableStore<boolean>;
  loadSave?: LoadSaveDialogData;
  saveName: StringStore;
  virtual: ReadableStore<VirtualFileManagerLocation | undefined>;
  drive: ReadableStore<IFilesystemDrive | undefined>;
  directoryListing: ReadableStore<HTMLDivElement>;
  virtualLocations: Record<string, VirtualFileManagerLocation>;

  navigate(path: string): Promise<void>;
  refresh(): Promise<void>;
  lockRefresh(): void;
  unlockRefresh(refresh?: boolean): void;
  parentDir(): void;
  updateDrives(): Promise<void>;
  unmountDrive(drive: IFilesystemDrive, id: string): void;
  confirmUmountDrive(drive: IFilesystemDrive, id: string): Promise<void>;
  updateAltMenu(): void;
  updateRootFolders(): void;
  updateNotice(): Promise<void>;
  setCopyFiles(files?: string[]): void;
  setCutFiles(files?: string[]): void;
  pasteFiles(): Promise<void>;
  uploadItems(): Promise<void>;
  openFile(path: string): void;
  createShortcut(name: string, path: string, folder?: boolean): Promise<void>;
  deleteSelected(): Promise<void>;
  confirmDeleteSelected(isUserFs?: boolean): Promise<void>;
  downloadSelected(): Promise<void>;
  singlefySelected(): void;
  updateSelection(e: MouseEvent, path: string): void;
  selectorUp(): Promise<void>;
  selectorDown(): Promise<void>;
  EnterKey(alternative?: boolean): Promise<void>;
  isDirectory(path: string, workingPath?: string): boolean;
  shareAccessIsAdministrative(drive: IFilesystemDrive): boolean;
  DirectoryNotFound(): void;
  SystemFolderDeletionRestricted(userPathKey: string): void;
  confirmLoadSave(): Promise<void>;
  setupLoadSave(loadSave?: LoadSaveDialogData): void;
  handleVirtualLocation(path: string): void;
}
