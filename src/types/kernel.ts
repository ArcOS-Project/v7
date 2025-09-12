import type { AppRenderer } from "$ts/apps/renderer";
import type { FilesystemDrive } from "$ts/kernel/mods/fs/drive";
import type { ProcessDispatch } from "$ts/process/dispatch";
import type { Process } from "$ts/process/instance";
import type { StateHandler } from "$ts/state";
import type { ReadableStore } from "$ts/writable";
import type { BugReport, OutgoingBugReport, ReportOptions } from "./bughunt";
import type { SystemDispatchResult } from "./dispatch";
import type {
  DirectoryReadReturn,
  FilesystemProgress,
  FilesystemProgressCallback,
  FilesystemStat,
  RecursiveDirectoryReadReturn,
  UploadReturn,
} from "./fs";
import type { ArcLangOptions } from "./lang";
import type { LogItem, LogLevel } from "./logging";
import type { LanguageOptions } from "./msl";
import type { ProcessKillResult } from "./process";
import type { ServerInfo } from "./server";

export type ConstructedWaveKernel = {
  modules: string[];
  Logs: ReadableStore<LogItem[]>;
  PANICKED: boolean;
  startMs: number;
  init: Process | undefined;
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
  panic(reason: string): Promise<void>;
};

export interface EnvironmentType {
  _init(): Promise<void>;
  set(key: string, value: any): boolean;
  setMultiple(entries: [string, any][]): void;
  delete(key: string): boolean;
  get(key: string): any;
  getMultiple(keys: string[]): any[];
  setReadonly(key: string): void;
  setWritable(key: string): void;
  reset(): void;
}

export interface ServerManagerType {
  url: string;
  connected: boolean;
  serverInfo: ServerInfo | undefined;
  checkUsernameAvailability(username: string): Promise<boolean>;
  checkEmailAvailability(email: string): Promise<boolean>;
  _init(): Promise<void>;
}

export interface FilesystemType {
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
  isDirectory(path: string): Promise<false | DirectoryReadReturn | undefined>;
  stat(path: string): Promise<FilesystemStat | undefined>;
  imageThumbnail(path: string, width: number, height?: number): Promise<string | undefined>;
}

export interface BugHuntType {
  _init(): Promise<void>;
  createReport(options?: ReportOptions): OutgoingBugReport;
  sendReport(outgoing: OutgoingBugReport, token?: string, options?: ReportOptions): Promise<boolean>;
  getToken(): string;
  getUserBugReports(token: string): Promise<BugReport[]>;
  getPublicBugReports(): Promise<BugReport[]>;
  server: ServerManagerType;
  env: EnvironmentType;
  handler: ProcessHandlerType;
}

export interface ProcessHandlerType {
  BUSY: boolean;
  store: ReadableStore<Map<number, Process>>;
  rendererPid: number;
  renderer: AppRenderer | undefined;
  env: EnvironmentType;
  dispatch: SystemDispatchType;
  _init(): Promise<void>;
  startRenderer(initPid: number): Promise<void>;
  spawn<T = Process>(
    process: typeof Process,
    renderTarget?: HTMLDivElement | undefined,
    userId?: string,
    parentPid?: number | undefined,
    ...args: any[]
  ): Promise<T | undefined>;
  kill(pid: number, force?: boolean): Promise<ProcessKillResult>;
  _killSubProceses(pid: number, force?: boolean): Promise<void>;
  getSubProcesses(parentPid: number): Map<number, Process>;
  getProcess<T = Process>(pid: number, disposedToo?: boolean): T | undefined;
  getPid(): number;
  isPid(pid: number): boolean;
  ConnectDispatch(pid: number): ProcessDispatch | undefined;
  waitForAvailable(): Promise<void>;
}

export interface SystemDispatchType {
  subscribers: Record<string, Record<number, (data: any) => void>>;

  subscribe<T = any[]>(event: string, callback: (data: T) => void): number;
  unsubscribeId(event: string, id: number): void;
  discardEvent(event: string): void;
  dispatch<T = any[]>(caller: string, data?: T, system?: boolean): SystemDispatchResult;
}

export interface SoundbusType {
  playSound(id: string, volume?: number): boolean | undefined;
  stopSound(id: string): boolean;
  getStore(): [string, string][];
  loadExternal(source: string, play?: boolean): void;
}

export interface ArcLangType {
  stack: ProcessHandlerType;
  locked: boolean;
  run(code: string, parentPid: number, options?: ArcLangOptions): Promise<unknown>;
}

export interface ArcMslType {
  _init(): Promise<void>;
  run(source: string, parent: number, options?: LanguageOptions): Promise<string[] | undefined>;
}
