import type { IAppProcess } from "$interfaces/IAppProcess";
import type { BooleanStore } from "$types/shared/writable";

// !tpa
export interface IMasterOptionsRuntime extends IAppProcess {
  loading: BooleanStore;

  killGhosts(): Promise<void>;
  killUserApps(): Promise<void>;
}
