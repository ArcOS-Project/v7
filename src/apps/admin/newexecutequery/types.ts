import type { DbQueryCollectionColumn, DbQueryOrderBy, DbQueryWhere } from "$types/server/admin";

export type NewExecuteQueryWhereClauses = Record<string, DbQueryWhere[]>;

export interface SavedQuery {
  collectionName: string;
  selectedColumns: string[];
  whereClauses: DbQueryWhere[];
  orderBy: DbQueryOrderBy;
  generatedBy: string;
  generatedAt: string;
}
