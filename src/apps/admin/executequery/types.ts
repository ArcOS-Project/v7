import type { AdminScopesType } from "$ts/servicehost/services/AdminBootstrapper/store";
import type { MaybePromise } from "$types/common";

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

export type SavedQuery = { selectedSource: QuerySourceKey; expressions: QueryExpressionsType };

export const QuerySources = [
  "",
  "users",
  "tokens",
  "totp",
  "reports",
  "shares",
  "indexes",
  "activities",
  "logs",
  "auditlog",
] as const;

export const QueryComparisonTypes = [
  "",
  "is equal to",
  "is not equal to",
  "includes",
  "does not include",
  "is defined",
  "is not defined",
  "is boolean",
  "is greater than",
  "is greater than or equal to",
  "is less than",
  "is less than or equal to",
] as const;
