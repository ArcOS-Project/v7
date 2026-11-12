import type { IProcess } from "$interfaces/IProcess";
import type { LogItem, LogLevel } from "$types/shared/logging";
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
  LogOperation(modType: KernelOpModuleType, module: KernelOpModuleName, event: string): void;
  panic(reason: string, brief?: string): Promise<void>;
}

export const KernelOpModuleNames = [
  "env",
  "dispatch",
  "soundbus",
  "stack",
  "server",
  "bughunt",
  "fs",
  "printer",
  "renderer",
  "state",
  "$",
] as const;
export const KernelOpModuleTypes = ["kernel", "kmod", "kproc", "dom"] as const;
export type KernelOpModuleName = (typeof KernelOpModuleNames)[number];
export type KernelOpModuleType = (typeof KernelOpModuleTypes)[number];

export interface KernelOperationLogItem {
  moduleType: KernelOpModuleType;
  module: KernelOpModuleName;
  event: string;
  timestamp: Date;
}
