import type { BugReport } from "$types/bughunt";
import { ShortLogLevelCaptions, type LogItem } from "$types/logging";
import dayjs from "dayjs";

export function stringifyLogs(logs: LogItem[]) {
  let result = "";

  for (const log of logs) {
    const ts = dayjs(log.timestamp).format("HH:mm:ss.SSS");
    const ll = ShortLogLevelCaptions[log.level];

    // hour:minute:second:millisecond [LEVEL] source: message
    result += `${ts} [${ll}] ${log.source}: ${log.message}\n`;
  }

  return result;
}

// Honestly this function used to be a lot bigger
// in ArcOS-Reports-Panel, but I ported it anyway :sob:
export function getReportIcon(report: BugReport): string {
  if (report.closed) return "WarningIcon";
  return "GoodStatusIcon";
}
