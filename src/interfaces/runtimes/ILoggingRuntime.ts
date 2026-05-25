import type { CollectorResult, FilterLevel, LogSource } from "$apps/user/logging/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { LogItem } from "$types/logging";
import type { ReadableStore } from "$types/writable";

export interface ILoggingRuntime extends IAppProcess {
  groups: ReadableStore<Map<string, LogItem[]>>;
  sources: ReadableStore<LogSource[]>;
  currentSource: ReadableStore<string>;
  selectedLevel: ReadableStore<FilterLevel>;
  isArchive: boolean;

  updateGroups(): void;
  collectLogsBySource(
    logs: LogItem[],
    reverse?: boolean
  ): {
    items: CollectorResult;
    sources: LogSource[];
  };
}
