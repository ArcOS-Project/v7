import type { IAppProcess } from "$interfaces/IAppProcess";
import type { App } from "$types/apps/app";
import type { ReadableStore } from "$types/shared/writable";

// !tpa
export interface IAppInfoRuntime extends IAppProcess {
  targetApp: ReadableStore<App>;
  targetAppId: string;

  killAll(): Promise<void>;
  processManager(): Promise<void>;
}
