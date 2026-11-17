import type { NewExecuteQueryWhereClauses } from "$apps/admin/newexecutequery/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IAdminBootstrapper } from "$interfaces/services/IAdminBootstrapper";
import type { DbQuery, DbQueryCollectionColumn } from "$types/server/admin";
import type { BooleanStore, ReadableStore, StringStore } from "$types/shared/writable";
import type { ExpandedUserInfo } from "$types/user";

export interface INewExecuteQueryRuntime extends IAppProcess {
  get admin(): IAdminBootstrapper;

  users: ExpandedUserInfo[];
  collections: ReadableStore<string[]>;
  columns: ReadableStore<DbQueryCollectionColumn[]>;
  selectedCollection: StringStore;
  selectedColumns: ReadableStore<Record<string, DbQueryCollectionColumn[]>>;
  whereClauses: ReadableStore<NewExecuteQueryWhereClauses>;
  loading: BooleanStore;
  allowSensitiveColumns: boolean;
  USER_COLUMNS: string[];

  SelectCollection(collection: string): Promise<void>;
  ShowSelectColumns(): Promise<void>;
  AddWhereClause(): void;
  DuplicateClause(i: number): void;
  DeleteClause(i: number): void;
  CompileQuery(): DbQuery;
  Execute(): Promise<void>;
}

export interface INewExecuteQueryOverlayRuntime extends IAppProcess {
  parent: INewExecuteQueryRuntime;
}
