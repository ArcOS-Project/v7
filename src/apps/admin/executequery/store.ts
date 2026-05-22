import type { IExecuteQueryRuntime } from "$interfaces/runtimes/IExecuteQueryRuntime";
import type { QueryDesignation, QueryDesignationsType } from "./types";

export const QueryUserColumns = ["userId", "authorId", "recipient", "repliesTo"];
export const ConceiledColumns = ["users.passwordHash", "tokens.value"];

export const EmptyQueryDesignation: QueryDesignation = { obtainer: () => [], scopes: [] };

export function QueryDesignations(runtime: IExecuteQueryRuntime): QueryDesignationsType {
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
    ips: {
      obtainer: async () => await runtime.admin.GetIpAddresses(),
      scopes: ["admin.ip.list"],
    },
  };
}
