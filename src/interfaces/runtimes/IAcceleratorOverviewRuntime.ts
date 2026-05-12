import type { IAppProcess } from "$interfaces/IAppProcess";
import type { AppStorage } from "$types/app";
import type { ReadableStore } from "$types/writable";

export interface IAcceleratorOverviewRuntime extends IAppProcess {
  KnownAcceleratorKeys: string[];
  store: ReadableStore<[string, [string[], string][]][]>;
  apps: ReadableStore<AppStorage>;
  splitAcceleratorString(accelerator: string): string[];
}
