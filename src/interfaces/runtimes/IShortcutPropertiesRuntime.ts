import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ArcShortcut } from "$types/shortcut";
import type { ReadableStore } from "$types/writable";

export interface IShortcutPropertiesRuntime extends IAppProcess {
  shortcutData: ReadableStore<ArcShortcut>;
  iconStore: Record<string, string>;
  path?: string;

  start(): Promise<false | undefined>;
  save(): Promise<void>;
  goTarget(): Promise<void>;
  changeIcon(): Promise<void>;
  pickTarget(): Promise<void>;
}
