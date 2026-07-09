import type { DispatchCallback } from "$types/system/dispatch";
import type { ProcessState } from "$types/system/process";

// !tpa
export interface IProcess {
  dispatch: IDispatch;
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

export interface IDispatch {
  subscribe(event: string, callback: DispatchCallback): void;
  dispatch(event: string, ...args: any[]): Promise<boolean>;
}
// !endtpa
