import type { ICommandResult } from "$interfaces/ICommandResult";
import { CommandResult } from "$ts/result";
import type { QueryableOptions } from "$types/server/query";
import type { HeaderContent, ITableDataSource } from "$types/shared/tables";

export function TableDataSource<T extends object, R extends QueryableOptions = {}>(): typeof ITableDataSource<T, R> {
  class DataSourceImpl {
    Header: HeaderContent<T> = [];
    Config?: Partial<R>;
    SortModePreference?: string;
    simple = false;

    constructor(config: Partial<R>, simple = false) {
      this.Config = config;
      this.simple = simple;
    }

    async FetchData(): Promise<ICommandResult<T[]>> {
      // stub
      return CommandResult.Ok([]);
    }
  }

  return DataSourceImpl as typeof ITableDataSource<T, R>;
}
