import type { LogItem, LogLevel } from "$types/logging";
import type { ReadableStore } from "$types/writable";

export type CollectorResult = { [key: string]: LogItem[] };
export type IterableCollectorResult = [string, LogItem[]][];
export type FilterLevel = LogLevel | "all";
export type GroupedBySource = Map<string, LogItem[]>;
export type CurrentSource = ReadableStore<string>;
export type LogSource = { what: string; timestamp: number };
