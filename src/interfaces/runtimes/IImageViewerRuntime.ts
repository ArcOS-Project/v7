import type { IAppProcess } from "$interfaces/IAppProcess";
import type { NumberStore, ReadableStore } from "$types/shared/writable";
import type { ImageViewer } from "svelte-image-viewer";

// !tpa
export interface IImageViewerRuntime extends IAppProcess {
  openedFile: ReadableStore<string>;
  imageUrl: ReadableStore<string>;
  indirect: ReadableStore<boolean>;
  viewer: ReadableStore<ImageViewer>;
  scale: NumberStore;
  overridePopulatable: boolean;

  readFileDialog(): Promise<void>;
  readFile(path: string): Promise<void>;
  readFileIndirectFallback(path: string): Promise<void>;
}
