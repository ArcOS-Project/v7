import type { IProcess } from "$interfaces/IProcess";
import type { LogItem, LogLevel } from "$types/logging";
import type { IStateHandler } from "./IStateHandler";

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


