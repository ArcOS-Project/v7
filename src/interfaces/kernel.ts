import type { IProcess, IProcessDispatch } from "$interfaces/process";
import type { AppRenderer } from "$ts/apps/renderer";
import type { FilesystemDrive } from "$ts/kernel/mods/fs/drives/drive";
import type { StateHandler } from "$ts/state";
import type { App } from "$types/app";
import type { BugReport, OutgoingBugReport, ReportOptions } from "$types/bughunt";
import type { SystemDispatchResult } from "$types/dispatch";
import type {
  DirectoryReadReturn,
  ExtendedStat,
  FilesystemProgress,
  FilesystemProgressCallback,
  RecursiveDirectoryReadReturn,
  UploadReturn,
} from "$types/fs";
import type { LogItem, LogLevel } from "$types/logging";
import type { ProcessContext, ProcessKillResult } from "$types/process";
import type { ServerInfo, ServerOption } from "$types/server";
import type { ReadableStore } from "$types/writable";

export interface IWaveKernel {
  modules: string[];
  Logs: LogItem[];
  PANICKED: boolean;
  startMs: number;
  init: IProcess | undefined;
  state: StateHandler | undefined;
  initPid: number;
  params: URLSearchParams;
  ARCOS_MODE: string;
  ARCOS_BUILD: string;
  ARCOS_LICENSE: string;
  PREMATURE: boolean;
  _init(): Promise<void>;
  getModule<T = any>(id: string, dontCrash?: boolean): T;
  Log(source: string, message: string, level?: LogLevel): void;
  panic(reason: string, brief?: string): Promise<void>;
}

export interface IEnvironment {
  _init(): Promise<void>;
  delete(key: string): boolean;
  get(key: string): any;
  getMultiple(keys: string[]): any[];
  getAll(): Record<string, string>;
  setReadonly(key: string): void;
  setWritable(key: string): void;
  set(key: string, value: any): boolean;
  setMultiple(entries: [string, any][]): void;
  reset(): void;
}

export interface IServerManager {
  connected: boolean;
  serverInfo?: ServerInfo;
  previewBranch?: string;
  servers: ServerOption[];
  url?: string;
  authCode?: string;
  checkUsernameAvailability(username: string): Promise<boolean>;
  checkEmailAvailability(username: string): Promise<boolean>;
  switchServer(url: string): Promise<boolean>;
  loadServers(): void;
  writeServers(servers: ServerOption[]): void;
  resetServers(): void;
  addServer(config: ServerOption): boolean;
  removeServer(url: string): boolean;
  isAdded(url: string): boolean;
}

export interface IFilesystem {
  drives: Record<string, FilesystemDrive>;
  _init(): Promise<void>;
  getDriveById(id: string): FilesystemDrive;
  mountDrive<T = FilesystemDrive>(
    id: string,
    supplier: typeof FilesystemDrive,
    letter?: string,
    onProgress?: FilesystemProgressCallback,
    ...args: any[]
  ): Promise<T | false>;
  getDriveIdByIdentifier(identifier: string): string;
  umountDrive(id: string, fromSystem?: boolean, onProgress?: FilesystemProgressCallback): Promise<boolean>;
  getDriveByLetter(letter: string, error?: boolean): FilesystemDrive;
  getDriveIdentifier(path: string): string;
  getDriveByPath(path: string): FilesystemDrive;
  validatePath(p: string): void;
  removeDriveLetter(p: string): string;
  validateDriveLetter(letter: string): void;
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
  isDirectory(path: string): Promise<boolean | DirectoryReadReturn>;
  stat(path: string): Promise<ExtendedStat | undefined>;
  imageThumbnail(path: string, width: number, height?: number): Promise<string | undefined>;
}

export interface IBugHunt {
  _init(): Promise<void>;
  createReport(options?: ReportOptions, app?: App, storeItemId?: string): OutgoingBugReport;
  sendReport(outgoing: OutgoingBugReport, token?: string, options?: ReportOptions): Promise<boolean>;
  getToken(): string;
  getUserBugReports(token: string): Promise<BugReport[]>;
  getPublicBugReports(): Promise<BugReport[]>;
}

export interface IProcessHandler {
  BUSY: string;
  IS_BUSY: boolean;
  get MEMORY(): number;
  store: ReadableStore<Map<number, IProcess>>;
  rendererPid: number;
  renderer: AppRenderer | undefined;
  _init(): Promise<void>;
  startRenderer(initPid: number): Promise<void>;
  spawn<T = IProcess>(
    process: Function,
    renderTarget?: HTMLDivElement | undefined,
    userId?: string,
    parentPid?: number | undefined,
    ...args: any[]
  ): Promise<T | undefined>;
  kill(pid: number, force?: boolean): Promise<ProcessKillResult>;
  _killSubProceses(pid: number, force?: boolean): Promise<void>;
  getSubProcesses(parentPid: number): Map<number, IProcess>;
  getProcess<T = IProcess>(pid: number, disposedToo?: boolean): T | undefined;
  getPid(): number;
  isPid(pid: number): boolean;
  ConnectDispatch(pid: number): IProcessDispatch | undefined;
  waitForAvailable(or?: string): Promise<void>;
  getProcessContext(pid: number): ProcessContext | undefined;
}

export interface ISystemDispatch {
  subscribers: Record<string, Record<number, (data: any) => void>>;

  subscribe<T = any[]>(event: string, callback: (data: T) => void): number;
  unsubscribeId(event: string, id: number): void;
  discardEvent(event: string): void;
  dispatch<T = any[]>(caller: string, data?: T, system?: boolean): SystemDispatchResult;
}

export interface ISoundbus {
  playSound(id: string, volume?: number): boolean | undefined;
  stopSound(id: string): boolean;
  getStore(): [string, string][];
  loadExternal(source: string, play?: boolean): void;
}
