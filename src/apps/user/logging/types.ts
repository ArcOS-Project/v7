import type { LogItem, LogLevel } from "$types/shared/logging";
import type { ReadableStore } from "$types/shared/writable";

// !tpa
/**
 * A record where the key is a log source and the value is all the log items that match that source
 */
export type CollectorResult = { [key: string]: LogItem[] };
/**
 * The `Object.entries()` version of {@link CollectorResult}
 */
export type IterableCollectorResult = [string, LogItem[]][];
/**
 * The filter level used by the Logging app.
 */
export type FilterLevel = LogLevel | "all";
/**
 * A map equivalent of {@link CollectorResult}
 */
export type GroupedBySource = Map<string, LogItem[]>;
/**
 * The currently selected source. Technically the same as {@link StringStore}
 */
export type CurrentSource = ReadableStore<string>;
/**
 * One log item source.
 */
export type LogSource = { what: string; timestamp: number };
// !endtpa
