import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IBugHuntUserSpaceProcess } from "$interfaces/services/IBugHuntUserSpaceProcess";
import type { BugReport } from "$types/bughunt";
import type { BooleanStore, ReadableStore, StringStore } from "$types/writable";

export interface IBugHuntRuntime extends IAppProcess {
  loading: BooleanStore;
  currentTab: StringStore;
  store: ReadableStore<BugReport[]>;
  selectedReport: StringStore;
  bughunt: IBugHuntUserSpaceProcess;

  changeTab(tab: string): Promise<void>;
  refresh(tab?: string): Promise<void>;
  invalidateCaches(restoreSelected?: boolean): Promise<void>;
  newReport(): void;
  viewLogs(): void;
  userData(): void;
  exportReport(): Promise<void>;
}
