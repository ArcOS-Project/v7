import type { IAppProcess } from "$interfaces/IAppProcess";
import type { BooleanStore } from "$types/writable";

export interface IMasterOptionsRuntime extends IAppProcess {
  loading: BooleanStore;

  killGhosts(): Promise<void>;
  killUserApps(): Promise<void>;
}
