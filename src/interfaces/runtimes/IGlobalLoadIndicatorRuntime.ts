import type { GlobalLoadIndicatorProgress } from "$apps/components/globalloadindicator/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ReadableStore, StringStore } from "$types/writable";

// !tpa-prop
export interface IGlobalLoadIndicatorRuntime extends IAppProcess {
  caption: StringStore;
  progress: ReadableStore<GlobalLoadIndicatorProgress | undefined>;

  updateProgress(progress: Partial<GlobalLoadIndicatorProgress>): void;
}
