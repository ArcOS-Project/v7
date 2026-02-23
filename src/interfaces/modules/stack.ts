import type { Constructs } from "$interfaces/common";
import type { IProcess, IProcessDispatch } from "$interfaces/process";
import type { IAppRenderer } from "$interfaces/renderer";
import type { ProcessContext, ProcessKillResult } from "$types/process";
import type { ReadableStore } from "$types/writable";

export interface IProcessHandler {
  BUSY: string;
  IS_BUSY: boolean;
  get MEMORY(): number;
  store: ReadableStore<Map<number, IProcess>>;
  rendererPid: number;
  renderer: IAppRenderer | undefined;
  _init(): Promise<void>;
  startRenderer(initPid: number): Promise<void>;
  spawn<T extends IProcess = IProcess>(
    process: Constructs<T>,
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
