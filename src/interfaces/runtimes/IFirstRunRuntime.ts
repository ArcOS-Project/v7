import type { FirstRunPage } from "$apps/components/firstrun/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { BooleanStore, ReadableStore, StringStore } from "$types/shared/writable";

// !tpa
export interface IFirstRunRuntime extends IAppProcess {
  done: BooleanStore;
  currentPage: ReadableStore<FirstRunPage>;
  displayName: StringStore;
  switchPage(id: string): void;
  chooseProfilePicture(): void;
  setDisplayName(): void;
}
