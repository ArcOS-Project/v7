import { AppProcess } from "$ts/apps/process";
import { KernelLogs } from "$ts/kernel/getters";
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
  private archive: LogItem[] = [];
  public isArchive = false;

  //#region ELCYCEFIL

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    source?: string,
    level?: FilterLevel,
    archive?: LogItem[]
  ) {
    super(handler, pid, parentPid, app);

    this.archive = archive || [];
    this.isArchive = this.archive.length > 0;

    if (!this.archive.length) KernelLogs().subscribe(() => this.updateGroups());
    else {
      this.updateGroups();
    }

    this.dispatch.subscribe("change-source", (source) => {
      this.currentSource.set(source);
    });

    if (source) this.currentSource.set(source);
    if (level !== undefined) this.selectedLevel.set(level);
  }

  //#endregion

  public updateGroups() {
    const logs = this.archive.length ? this.archive : KernelLogs()();
    const groupStore = this.groups.get();
    const { items, sources } = this.collectLogsBySource(logs, false);
    const entries = Object.entries(items);

    for (const [source, items] of entries) {
      groupStore.set(source, items);
    }

    this.windowTitle.set(`${this.isArchive ? "Viewing archive - " : ""}${logs.length} items`);
    this.groups.set(groupStore);
    this.sources.set(sources);

    if (!groupStore.get(this.currentSource())) this.currentSource.set(sources[0].what);
  }

  collectLogsBySource(logs: LogItem[], reverse = false) {
    logs = logs.sort((a, b) => b.timestamp - a.timestamp);

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
