import type { ReadableStore } from "$ts/writable";
import type { IntBool } from "$types/common";

export interface SqlTable {
  uuid: string;
  name: string;
  rootpage: number;
  sql: string;
  tbl_name: string;
  type: string;
  columns: SqlTableColumn[];
}

export interface SqlTableColumn {
  cid: number;
  name: string;
  type: string;
  notnull: IntBool;
  dflt_value: any;
  pk: IntBool;
  uuid: string;
}

export interface SqeletonTab {
  name: string;
  count?: ReadableStore<any[]>;
  className?: string;
}

export type SqeletonTabs = Record<string, SqeletonTab>;

export interface SqeletonError {
  uuid: string;
  sql: string;
  timestamp: number;
  text: string;
  system: boolean;
}

export interface SqeletonHistoryItem {
  uuid: string;
  sql: string;
  timestamp: number;
  result: Record<string, any>[][];
  system: boolean;
}
