import type { IAppProcess } from "$interfaces/IAppProcess";
import type { StringStore } from "$types/writable";

export interface IIconPickerRuntime extends IAppProcess {
  forWhat?: string; // good question
  defaultIcon?: string;
  selected: StringStore;
  groups: Record<string, Record<string, string>>;
  store: Record<string, string>;
  returnId?: string;

  confirm(): Promise<void>;
  cancel(): Promise<void>;
  selectRandom(): void;
}
