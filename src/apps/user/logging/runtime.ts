import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { LogItem } from "$types/logging";
import type { CollectorResult, FilterLevel, LogSource } from "./types";

export class LoggingRuntime extends AppProcess {
  public groups = Store<Map<string, LogItem[]>>(new Map());
  public sources = Store<LogSource[]>([]);
  public currentSource = Store<string>("*");
  public selectedLevel = Store<FilterLevel>("all");

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    source?: string,
    level?: FilterLevel
  ) {
    super(handler, pid, parentPid, app);

    this.kernel.Logs.subscribe(() => this.updateGroups());

    this.dispatch.subscribe("change-source", (source) => {
      this.currentSource.set(source);
    });

    if (source) this.currentSource.set(source);
    if (level !== undefined) this.selectedLevel.set(level);
  }

  public updateGroups() {
    const groupStore = this.groups.get();
    const { items, sources } = this.collectLogsBySource(true);
    const entries = Object.entries(items);

    for (const [source, items] of entries) {
      groupStore.set(source, items);
    }

    this.windowTitle.set(`${this.kernel.Logs().length} items`);
    this.groups.set(groupStore);
    this.sources.set(sources);
  }

  collectLogsBySource(reverse = false) {
    let logs = this.kernel.Logs().sort((a, b) => b.timestamp - a.timestamp);

    if (reverse) logs.reverse();

    const sources: LogSource[] = [];
    const items: CollectorResult = {};

    for (const log of logs) {
      if (!sources.filter((l) => l.what === log.source).length) {
        sources.push({ what: log.source, timestamp: log.timestamp });
      }

      if (!items[log.source]) items[log.source] = [];

      items[log.source].push(log);
    }

    return { items, sources };
  }
}
