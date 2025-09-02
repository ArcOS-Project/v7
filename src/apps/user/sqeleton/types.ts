import type { ReadableStore } from "$ts/writable";

export interface SqlTable {
  name: string;
  rootpage: number;
  sql: string;
  tbl_name: string;
  type: string;
}

export interface SqeletonTab {
  name: string;
  count?: ReadableStore<any[]>;
  className?: string;
}

export type SqeletonTabs = Record<string, SqeletonTab>;
