import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ReadableStore } from "$types/writable";

export interface IPdfViewerRuntime extends IAppProcess {
  openedFile: ReadableStore<string>;
  documentUrl: ReadableStore<string>;

  readFile(path: string): Promise<void>;
  readFileIndirectFallback(path: string): Promise<void>;
}
