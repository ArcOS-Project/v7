import type { IAppProcess } from "$interfaces/IAppProcess";
import type { StringStore } from "$types/shared/writable";

// !tpa
export interface IRenameItemRuntime extends IAppProcess {
  newName: StringStore;
  parentDir: string;
  path: string;

  rename(): Promise<void>;
}
