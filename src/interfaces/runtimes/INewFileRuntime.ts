import type { IAppProcess } from "$interfaces/IAppProcess";
import type { StringStore } from "$types/writable";

// !tpa
export interface INewFileRuntime extends IAppProcess {
  newFile: StringStore;
  path: string;

  createFile(): Promise<void>;
}
