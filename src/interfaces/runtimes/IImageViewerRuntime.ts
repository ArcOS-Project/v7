import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ReadableStore } from "$types/writable";

export interface IImageViewerRuntime extends IAppProcess {
  openedFile: ReadableStore<string>;
  imageUrl: ReadableStore<string>;
  indirect: ReadableStore<boolean>;
  overridePopulatable: boolean;

  readFile(path: string): Promise<void>;
  readFileIndirectFallback(path: string): Promise<void>;
}
