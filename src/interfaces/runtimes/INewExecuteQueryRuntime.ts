import type { NewExecuteQueryWhereClauses, SavedQuery } from "$apps/admin/newexecutequery/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IAdminBootstrapper } from "$interfaces/services/IAdminBootstrapper";
import type { DbQuery, DbQueryCollectionColumn, DbQueryOrderBy } from "$types/server/admin";
import type { BooleanStore, ReadableStore, StringStore } from "$types/shared/writable";
import type { ExpandedUserInfo } from "$types/user";

export interface INewExecuteQueryRuntime extends IAppProcess {
  USER_COLUMNS: string[];
  users: ExpandedUserInfo[];
  loading: BooleanStore;
  allowSensitiveColumns: boolean;

  // query data
  collections: ReadableStore<string[]>;
  columns: ReadableStore<DbQueryCollectionColumn[]>;
  selectedCollection: StringStore;
  selectedColumns: ReadableStore<Record<string, DbQueryCollectionColumn[]>>;
  whereClauses: ReadableStore<NewExecuteQueryWhereClauses>;
  orderBy: ReadableStore<Record<string, DbQueryOrderBy>>;

  get admin(): IAdminBootstrapper;
  Execute(): Promise<void>;

  // selection
  RefreshCollections(): Promise<void>;
  SelectCollection(collection: string): Promise<ICommandResult>;
  ShowSelectColumns(): Promise<void>;

  // clauses
  AddWhereClause(): void;
  DuplicateClause(i: number): void;
  DeleteClause(i: number): void;

  // compile
  CompileDbQuery(): DbQuery;
  CompileSavedQuery(): SavedQuery;

  // load/save
  LoadSavedQuery(query: SavedQuery): Promise<ICommandResult<string[]>>;
  LoadSavedQueryFromFile(): Promise<ICommandResult<string[]>>;
  SaveQueryToFile(): Promise<ICommandResult>;
  DoLoadQueryFromFile(): Promise<void>;
  DoSaveQueryToFile(): Promise<void>;

  // utils
  DisplayError(result: ICommandResult): Promise<void>;
  DisplayWarnings(warnings: string[]): Promise<void>;
}

export interface INewExecuteQueryOverlayRuntime extends IAppProcess {
  parent: INewExecuteQueryRuntime;
}
