import type { ICommandResult } from "$interfaces/ICommandResult";
import type { QueryableOptions } from "$types/server/query";

export declare class ITableDataSource<T extends object, R extends QueryableOptions = {}> {
  constructor(config: Partial<R>, simple?: boolean);
  Header: HeaderContent<T>;
  Config?: Partial<R>;
  SortModePreference?: string;
  simple: boolean;
  canSelect?: boolean;

  OnRowSubmit?(item: T): void;
  FetchData(): Promise<ICommandResult<T[]>>;
}

export type HeaderContent<T extends object> = Array<HeaderItem<T>>;

export interface HeaderItem<T extends object> {
  sortable?: boolean;
  caption: string;
  sort?: (data: T[], reversed?: boolean) => T[];
  sortDefault?: boolean;
  complex?: boolean;
  columnPercentage?: number;
}
