import { AdminGrant } from "./commands/admin/grant";
import { AdminRevoke } from "./commands/admin/revoke";
import { AdminScopesAdd } from "./commands/scopes/add";
import { AdminScopesAvailable } from "./commands/scopes/available";
import { AdminScopesGet } from "./commands/scopes/get";
import { AdminScopesRemove } from "./commands/scopes/remove";
import { AdminServerAuditlog } from "./commands/server/auditlog";
import { AdminServerLogs } from "./commands/server/logs";
import { AdminServerStats } from "./commands/server/stats";
import { AdminTokensListAll } from "./commands/tokens/list/all";
import { AdminTokensPurgeAll } from "./commands/tokens/purge/all";
import { AdminTokensPurgeOne } from "./commands/tokens/purge/one";
import { AdminTokensPurgeUser } from "./commands/tokens/purge/user";

export const AdminCommandStore = {
  server: {
    logs: AdminServerLogs,
    auditlog: AdminServerAuditlog,
    stats: AdminServerStats,
  },
  admin: {
    grant: AdminGrant,
    revoke: AdminRevoke,
    scopes: {
      available: AdminScopesAvailable,
      get: AdminScopesGet,
      add: AdminScopesAdd,
      remove: AdminScopesRemove,
    },
  },
  tokens: {
    list: {
      all: AdminTokensListAll,
    },
    purge: {
      all: AdminTokensPurgeAll,
      one: AdminTokensPurgeOne,
      user: AdminTokensPurgeUser,
    },
  },
};

export const RESULT_CAPTIONS: Record<number, string> = {
  0: "OK",
  1: "EMPTY",
  2: "PERMISSION DENIED",
  3: "NOT MODIFIED",
  4: "COMMAND NOT FOUND",
  5: "SYNTAX ERROR",
};
