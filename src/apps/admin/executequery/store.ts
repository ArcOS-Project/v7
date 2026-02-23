import type { ExecuteQueryRuntime } from "./runtime";
import type { QueryDesignation, QueryDesignationsType } from "./types";

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

export const QueryUserColumns = ["userId", "authorId", "recipient", "repliesTo"];

export const EmptyQueryDesignation: QueryDesignation = { obtainer: () => [], scopes: [] };

export function QueryDesignations(runtime: ExecuteQueryRuntime): QueryDesignationsType {
  return {
    "": EmptyQueryDesignation,
    users: {
      obtainer: () => runtime.users,
      scopes: ["admin.users.list"],
    },
    totp: {
      obtainer: async () => await runtime.admin.getAllTotp(),
      scopes: ["admin.totp.get"],
    },
    tokens: {
      obtainer: async () => await runtime.admin.getAllTokens(),
      scopes: ["admin.tokens.get"],
    },
    reports: {
      obtainer: async () => await runtime.admin.getAllBugReports(),
      scopes: ["admin.bughunt.reports.list"],
    },
    shares: {
      obtainer: async () => await runtime.admin.getAllShares(),
      scopes: ["admin.share.list"],
    },
    indexes: {
      obtainer: async () => await runtime.admin.getAllIndexingNodes(),
      scopes: ["admin.index.get"],
    },
    activities: {
      obtainer: async () => await runtime.admin.getAllActivity(),
      scopes: ["admin.activities.list"],
    },
    logs: {
      obtainer: async () => await runtime.admin.getServerLogs(),
      scopes: ["admin.logs"],
    },
    auditlog: {
      obtainer: async () => await runtime.admin.getAuditLog(),
      scopes: ["admin.auditlog"],
    },
  };
}
