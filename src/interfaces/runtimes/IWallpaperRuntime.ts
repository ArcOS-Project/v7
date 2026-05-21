import type { DesktopIcons } from "$apps/components/wallpaper/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IConfigurator } from "$interfaces/IConfigurator";
import type { DirectoryReadReturn } from "$types/fs";
import type { ShortcutStore } from "$types/shortcut";
import type { BooleanStore, ReadableStore, StringStore } from "$types/writable";

export interface IWallpaperRuntime extends IAppProcess {
  CONFIG_PATH: string;
  contents: ReadableStore<DirectoryReadReturn | undefined>;
  selected: StringStore;
  shortcuts: ReadableStore<ShortcutStore>;
  iconsElement: ReadableStore<HTMLDivElement>;
  orphaned: ReadableStore<string[]>;
  loading: BooleanStore;
  directory: string;
  Positions: ReadableStore<DesktopIcons>;
  Configuration: IConfigurator<DesktopIcons>;

  updateContents(): Promise<void>;
  findAndDeleteOrphans(contents: DirectoryReadReturn | undefined): void;
  findFreeDesktopIconPosition(identifier: string, wrapper?: HTMLDivElement): void;
  deleteItem(path: string): Promise<void>;
  uploadItems(): Promise<void>;
}
