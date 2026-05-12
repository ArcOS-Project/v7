import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ReadableStore } from "$types/writable";

export interface IBootScreenRuntime extends IAppProcess {
  progress: ReadableStore<boolean>;
  status: ReadableStore<string>;

  begin(): Promise<void>;
  startBooting(e?: KeyboardEvent): Promise<void>;
}
