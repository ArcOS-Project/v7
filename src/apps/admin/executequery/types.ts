import type { AdminScopesType } from "$ts/server/admin/store";
import type { MaybePromise } from "$types/common";
import type { QueryComparisonTypes, QuerySources } from "./store";

export type QuerySourceKey = (typeof QuerySources)[number];
export interface QueryDesignation {
  scopes?: AdminScopesType[];
  obtainer: () => MaybePromise<any[]>;
}

export interface QueryExpression {
  columnName?: string;
  comparisonType?: QueryComparisonTypesType;
  comparisonValue?: string | boolean;
  hierarchyValue?: any;
}

export type QueryExpressionsType = Record<QuerySourceKey, QueryExpression[]>;
export type QueryDesignationsType = Record<QuerySourceKey, QueryDesignation>;
export type QueryComparisonTypesType = (typeof QueryComparisonTypes)[number];
