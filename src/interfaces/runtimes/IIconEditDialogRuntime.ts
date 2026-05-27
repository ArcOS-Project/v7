import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ReadableStore, StringStore } from "$types/shared/writable";

// !tpa
export interface IIconEditDialogRuntime extends IAppProcess {
  iconName?: string;
  returnId?: string;
  type: StringStore;
  values: ReadableStore<Record<string, string>>;
  currentIcon: StringStore;
  defaultIcon?: string;
  sent: boolean;

  updateCurrentIcon(type?: string, values?: Record<string, string>): Promise<void>;
  default(): void;
  save(): void;
}
