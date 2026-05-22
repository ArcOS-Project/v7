import type { IAppProcess } from "$interfaces/IAppProcess";
import type { StringStore } from "$types/writable";

export interface INewFolderRuntime extends IAppProcess {
  newFolder: StringStore;
  path: string;

  createFolder(): Promise<void>;
}
