import type { IAppProcess } from "$interfaces/IAppProcess";
import type { BooleanStore } from "$types/writable";

// !tpa-prop
export interface IMasterOptionsRuntime extends IAppProcess {
  loading: BooleanStore;

  killGhosts(): Promise<void>;
  killUserApps(): Promise<void>;
}
