import type { IAppProcess } from "$interfaces/IAppProcess";
import type { StringStore } from "$types/writable";

// !tpa-prop
export interface INewFolderRuntime extends IAppProcess {
  newFolder: StringStore;
  path: string;

  createFolder(): Promise<void>;
}
