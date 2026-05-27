import type { IAppProcess } from "$interfaces/IAppProcess";
import type { StringStore } from "$types/shared/writable";

// !tpa
export interface INewFolderRuntime extends IAppProcess {
  newFolder: StringStore;
  path: string;

  createFolder(): Promise<void>;
}
