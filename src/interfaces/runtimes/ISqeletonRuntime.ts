import type { SqeletonError, SqeletonHistoryItem, SqeletonTabs, SqlTable } from "$apps/user/sqeleton/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ICommandResult } from "$interfaces/ICommandResult";
import type { ISqlInterfaceProcess } from "$interfaces/ISqlInterfaceProcess";
import type { ReadableStore } from "$types/writable";

export interface ISqeletonRuntime extends IAppProcess {
  openedFile: ReadableStore<string>;
  openedFileName: ReadableStore<string>;
  _intf: ReadableStore<ISqlInterfaceProcess | undefined>;
  queries: ReadableStore<string[]>;
  queryIndex: ReadableStore<number>;
  errors: ReadableStore<SqeletonError[]>;
  queryHistory: ReadableStore<SqeletonHistoryItem[]>;
  working: ReadableStore<boolean>;
  errored: ReadableStore<boolean>;
  result: ReadableStore<Record<string, any>[][] | undefined>;
  tables: ReadableStore<SqlTable[]>;
  busy: boolean;
  currentTab: ReadableStore<string>;
  syntaxError: ReadableStore<boolean>;
  tempDbPath: string;
  tempDb?: ISqlInterfaceProcess;
  tabs: SqeletonTabs;
  get Interface(): ISqlInterfaceProcess | undefined;
  set Interface(value: ISqlInterfaceProcess | undefined);

  start(): Promise<void>;
  stop(): Promise<void>;
  render({ path }: { path?: string }): Promise<void>;
  readFile(path: string): Promise<void>;
  openFile(): Promise<void>;
  newFile(): Promise<void>;
  execute(code: string, simple?: boolean, system?: boolean): Promise<string | Record<string, any>[][] | undefined>;
  updateTables(): Promise<void>;
  newQuery(value?: string): void;
  openOrCreateQuery(value: string): void;
  deleteQuery(index?: number): void;
  tableToSql(table: SqlTable, pretty?: boolean, dropFirst?: boolean): Promise<ICommandResult<string>>;
  hasSyntaxError(input: string): Promise<boolean>;
  waitForAvailable(): Promise<void>;
  dropTableInteractively(table: string): void;
  ExistingConnectionError(): void;
  DbOpenError(e: string): void;
  TablesUpdateError(e: string): void;
}
