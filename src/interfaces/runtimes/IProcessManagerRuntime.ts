import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IProcess } from "$interfaces/IProcess";
import type { IServiceHost } from "$interfaces/IServiceHost";
import type { ProcessKillResult } from "$types/process";
import type { ReadableStore } from "$types/writable";
import type { Component } from "svelte";

export interface IProcessManagerRuntime extends IAppProcess {
  selected: ReadableStore<string>;
  running: ReadableStore<number>;
  currentTab: ReadableStore<string>;
  tabs: Record<string, Component>;
  host: IServiceHost;

  render(): Promise<false | undefined>;
  kill(proc: IProcess): Promise<void>;
  killError(name: string, result: ProcessKillResult): void;
  stopService(id: string): Promise<void>;
  restartService(id: string): Promise<void>;
  startService(id: string): Promise<void>;
  serviceInfoFor(id: string): void;
  appInfoFor(proc: IAppProcess): void;
  processInfoFor(proc: IProcess): void;
}
