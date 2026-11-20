export interface DbQuery {
  selectColumns: string[];
  fromCollection: string;
  whereClauses: DbQueryWhere[];
  orderBy?: DbQueryOrderBy;
}

export interface DbQueryOrderBy {
  column?: string;
  descending?: boolean;
}

export const DB_QUERY_WHERE_MODES = [
  "isEqualTo",
  "isNotEqualTo",
  "includes",
  "doesNotInclude",
  "isDefined",
  "isNotDefined",
  "isBoolean",
  "isGreaterThan",
  "isGreaterThanOrEqualTo",
  "isLessThan",
  "isLessThanOrEqualTo",
  "lengthIsGreaterThan",
  "lengthIsLessThan",
  "lengthIsGreaterThanOrEqualTo",
  "lengthIsLessThanOrEqualTo",
  "lengthIsEqualTo",
  "lengthIsNotEqualTo",
] as const;
export type DbQueryWhereMode = (typeof DB_QUERY_WHERE_MODES)[number];

export const WhereModeCaptions: Record<DbQueryWhereMode, string> = {
  isEqualTo: "is equal to",
  isNotEqualTo: "is not equal to",
  includes: "includes",
  doesNotInclude: "does not include",
  isDefined: "is defined",
  isNotDefined: "is not defined",
  isBoolean: "is boolean",
  isGreaterThan: "is greater than",
  isGreaterThanOrEqualTo: "is greater than or equal to",
  isLessThan: "is less than",
  isLessThanOrEqualTo: "is less than or equal to",
  lengthIsGreaterThan: "length is greater than",
  lengthIsGreaterThanOrEqualTo: "length is greater than or equal to",
  lengthIsLessThan: "length is less than",
  lengthIsLessThanOrEqualTo: "length is less than or equal to",
  lengthIsEqualTo: "length is equal to",
  lengthIsNotEqualTo: "length is not equal to",
};

export interface DbQueryWhere {
  columnName: string;
  mode: DbQueryWhereMode;
  value?: any;
  hierarchyKey?: string;
  uuid: string; // client-side each-key
  relational?: boolean; // client-side relational bool
  valueFromColumn?: DbQueryValueFromColumn;
}

export interface DbQueryValueFromColumn {
  columnName?: string;
  hierarchy?: string;
}

export interface DbQueryCollectionColumn {
  column: string;
  required: boolean;
  dataType: string;
  normalizedType: TypeOf;
  sensitive?: boolean;
}

export type DbQueryCollection = Record<string, DbQueryCollectionColumn[]>;

export type TypeOf = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array";
