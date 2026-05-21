import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IIconService } from "$interfaces/services/IIconService";
import type { ReadableStore } from "$types/writable";

export interface IIconEditorRuntime extends IAppProcess {
  iconGroups: ReadableStore<Record<string, string[]>>;
  icons: ReadableStore<Record<string, string>>;
  filtered: ReadableStore<Record<string, string>>;
  iconService?: IIconService;
  selectedIcon: ReadableStore<string>;
  selectedGroup: ReadableStore<string>;
  hasChanges: ReadableStore<boolean>;

  revert(): void;
  setGroups(): void;
  updateFiltered(v?: string): void;
  save(): Promise<void>;
  editIcon(): Promise<void>;
}
