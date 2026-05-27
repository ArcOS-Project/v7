import type { IAppProcess } from "$interfaces/IAppProcess";
import type { AppStorage } from "$types/apps/app";
import type { ReadableStore } from "$types/shared/writable";

// !tpa
export interface IAcceleratorOverviewRuntime extends IAppProcess {
  KnownAcceleratorKeys: string[];
  store: ReadableStore<[string, [string[], string][]][]>;
  apps: ReadableStore<AppStorage>;
  splitAcceleratorString(accelerator: string): string[];
}
