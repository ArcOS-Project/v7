import type { IAppProcess } from "$interfaces/IAppProcess";
import type { StringStore } from "$types/shared/writable";

// !tpa
export interface INewFileRuntime extends IAppProcess {
  newFile: StringStore;
  path: string;

  createFile(): Promise<void>;
}
