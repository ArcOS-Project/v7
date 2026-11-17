import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IAdminBootstrapper } from "$interfaces/services/IAdminBootstrapper";
import type { DbQueryCollectionColumn } from "$types/server/admin";
import type { BooleanStore, ReadableStore, StringStore } from "$types/shared/writable";

export interface INewExecuteQueryRuntime extends IAppProcess {
  get admin(): IAdminBootstrapper;

  collections: ReadableStore<string[]>;
  columns: ReadableStore<DbQueryCollectionColumn[]>;
  selectedCollection: StringStore;
  selectedColumns: ReadableStore<Record<string, string[]>>;
  loading: BooleanStore;
  allowSensitiveColumns: boolean;

  SelectCollection(collection: string): Promise<void>;
  ShowSelectColumns(): Promise<void>;
}

export interface INewExecuteQueryOverlayRuntime extends IAppProcess {
  parent: INewExecuteQueryRuntime;
}
