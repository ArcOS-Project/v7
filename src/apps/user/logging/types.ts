import type { ReadableStore } from "$ts/writable";
import type { LogItem, LogLevel } from "$types/logging";

export type CollectorResult = { [key: string]: LogItem[] };
export type IterableCollectorResult = [string, LogItem[]][];
export type FilterLevel = LogLevel | "all";
export type GroupedBySource = Map<string, LogItem[]>;
export type CurrentSource = ReadableStore<string>;
export type LogSource = { what: string; timestamp: number };
