import type { IAppProcess } from "$interfaces/IAppProcess";
import type { App } from "$types/app";
import type { ReadableStore } from "$types/writable";

export interface IAppInfoRuntime extends IAppProcess {
  targetApp: ReadableStore<App>;
  targetAppId: string;

  killAll(): Promise<void>;
  processManager(): Promise<void>;
}
