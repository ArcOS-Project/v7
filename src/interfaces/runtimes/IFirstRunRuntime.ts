import type { FirstRunPage } from "$apps/components/firstrun/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { BooleanStore, ReadableStore } from "$types/writable";

export interface IFirstRunRuntime extends IAppProcess {
  done: BooleanStore;
  currentPage: ReadableStore<FirstRunPage>;
  switchPage(id: string): void;
  chooseProfilePicture(): void;
}
