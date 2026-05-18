import type { DispatchCallback } from "$types/dispatch";
import type { ProcessState } from "$types/process";

export interface IProcess {
  dispatch: IProcessDispatch;
  pid: number;
  parentPid: number;
  name: string;
  get _disposed(): boolean;
  _criticalProcess: boolean;
  sourceUrl: string;
  STATE: ProcessState;
  get MEMORY(): number;
  __start(): Promise<any>;
  __stop(): Promise<any>;
  killSelf(): Promise<void>;
  requestFileLock(path: string): Promise<false | undefined>;
  unlockFile(path: string): Promise<false | undefined>;
  setSource(source: string): void;
}

export interface IProcessDispatch {
  subscribe(event: string, callback: DispatchCallback): void;
  dispatch(event: string, ...args: any[]): Promise<boolean>;
}
