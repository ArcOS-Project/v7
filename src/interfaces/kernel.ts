import type { IProcess, IProcessDispatch } from "$interfaces/process";
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
import type { IFilesystemDrive } from "./fs";
import type { IAppRenderer } from "./renderer";
import type { IStateHandler } from "./state";

export interface IWaveKernel {
  modules: string[];
  Logs: LogItem[];
  PANICKED: boolean;
  startMs: number;
  init: IProcess | undefined;
  state: IStateHandler | undefined;
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


