import { ErrorIcon, InfoIcon, WarningIcon } from "$ts/images/dialog";
import { BugReportIcon } from "$ts/images/general";
import { LogLevel } from "$types/logging";
import type { FilterLevel } from "./types";

export const FilterLevels: FilterLevel[] = [LogLevel.info, LogLevel.warning, LogLevel.error, LogLevel.critical];

export const FilterIcons: Map<"all" | LogLevel, string> = new Map([
  [LogLevel.info, "info"],
  [LogLevel.warning, "triangle-alert"],
  [LogLevel.error, "circle-alert"],
  [LogLevel.critical, "bomb"],
]);

export const LogItemIcons: Record<LogLevel, string> = {
  [LogLevel.critical]: BugReportIcon,
  [LogLevel.error]: ErrorIcon,
  [LogLevel.warning]: WarningIcon,
  [LogLevel.info]: InfoIcon,
};
