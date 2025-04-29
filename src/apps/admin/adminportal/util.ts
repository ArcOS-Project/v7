import { WarningIcon } from "$ts/images/dialog";
import { FileIcon } from "$ts/images/filesystem";
import { GoodStatusIcon } from "$ts/images/status";
import type { BugReport } from "$types/bughunt";
import { ShortLogLevelCaptions, type LogItem } from "$types/logging";
import dayjs from "dayjs";

export function stringifyLogs(logs: LogItem[]) {
  let result = "";

  for (const log of logs) {
    const ts = dayjs(log.timestamp).format("HH:mm:ss.SSS");
    const ll = ShortLogLevelCaptions[log.level];

    result += `${ts} [${ll}] ${log.source}: ${log.message}\n`;
  }

  return result;
}

export function getReportIcon(report: BugReport): string {
  if (report.closed) return WarningIcon;

  if (!report.resolved) return FileIcon;

  return GoodStatusIcon;
}
