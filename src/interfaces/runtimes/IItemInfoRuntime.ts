import type { ItemInfo } from "$apps/components/iteminfo/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ArcShortcut } from "$types/shortcut";
import type { ReadableStore } from "$types/writable";

export interface IItemInfoRuntime extends IAppProcess {
  info: ReadableStore<ItemInfo>;
  shortcut: ReadableStore<ArcShortcut>;

  open(): Promise<void>;
  openWith(path: string): Promise<void>;
  renameItem(): Promise<void>;
}
