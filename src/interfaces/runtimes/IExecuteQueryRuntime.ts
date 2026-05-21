import type {
  QueryDesignationsType,
  QueryExpression,
  QueryExpressionsType,
  QuerySourceKey,
} from "$apps/admin/executequery/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IAdminBootstrapper } from "$interfaces/services/IAdminBootstrapper";
import type { ExpandedUserInfo } from "$types/user";
import type { BooleanStore, NumberStore, ReadableStore, StringStore } from "$types/writable";

export interface IExecuteQueryRuntime extends IAppProcess {
  result: ReadableStore<any[]>;
  dataSource: ReadableStore<any[]>;
  selectedSource: ReadableStore<QuerySourceKey>;
  loading: BooleanStore;
  truncated: BooleanStore;
  totalCount: NumberStore;
  columns: ReadableStore<string[]>;
  columnTypes: ReadableStore<string[]>;
  expressions: ReadableStore<QueryExpressionsType>;
  admin: IAdminBootstrapper;
  users: ExpandedUserInfo[];
  readonly queryDesignations: QueryDesignationsType;

  updateResult(key: QuerySourceKey): Promise<void>;
  updateColumnTypes(items?: any[]): void;
  executeQuery(): Promise<void>;
  evaluateExpression(item: any, expression: QueryExpression): boolean;
  comparison_isEqualTo(value: any, { comparisonValue, hierarchyValue }: QueryExpression, valueIsObject?: boolean): boolean;
  comparison_isNotEqualTo(value: any, { comparisonValue, hierarchyValue }: QueryExpression, valueIsObject?: boolean): boolean;
  comparison_includes(value: any, { comparisonValue, hierarchyValue }: QueryExpression, valueIsObject?: boolean): boolean;
  comparison_doesNotInclude(value: any, { comparisonValue, hierarchyValue }: QueryExpression, valueIsObject?: boolean): boolean;
  comparison_isDefined(value: any): boolean;
  comparison_isNotDefined(value: any): boolean;
  comparison_isBoolean(value: any, { comparisonValue }: QueryExpression): boolean;
  comparison_isLessThan(value: any, { comparisonValue }: QueryExpression): boolean;
  comparison_isLessThanOrEqualTo(value: any, { comparisonValue }: QueryExpression): boolean;
  comparison_isGreaterThanOrEqualTo(value: any, { comparisonValue }: QueryExpression): boolean;
  duplicateExpression(index: number): void;
  deleteExpression(index: number): void;
  addExpression(): void;
  exportResults(): Promise<void>;
  loadQueryDialog(): Promise<boolean>;
  saveQueryDialog(): Promise<boolean>;
  loadQueryList(): Promise<string[]>;
  saveQuery(name: string, data?: QueryExpressionsType): Promise<void>;
  loadQuery(name: string): Promise<boolean>;
  deleteQuery(name: string): Promise<boolean>;
  normalizeQueryPath(name: string): string;
  noAccessToSource(): void;
  findMostColumnsOf(input: any[]): string[];
}

export interface ILoadQueryOverlayRuntime extends IAppProcess {
  parent: IExecuteQueryRuntime;
  queries: string[];
  selectedQuery: StringStore;
  Confirm(): Promise<void>;
}

export interface ISaveQueryOverlayRuntime extends IAppProcess {
  queryName: StringStore;
  Confirm(): Promise<void>;
}
