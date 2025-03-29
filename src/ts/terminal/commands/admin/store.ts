import { AdminGrant } from "./commands/admin/grant";
import { AdminRevoke } from "./commands/admin/revoke";
import { AdminBugHuntListAll } from "./commands/bughunt/list/all";
import { AdminBugHuntReportClose } from "./commands/bughunt/report/close";
import { AdminBugHuntReportDelete } from "./commands/bughunt/report/delete";
import { AdminBugHuntReportOpen } from "./commands/bughunt/report/open";
import { AdminBugHuntStats } from "./commands/bughunt/stats";
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
import { AdminUserApprove } from "./commands/user/approve";
import { AdminUserChangeemail } from "./commands/user/changeemail";
import { AdminUserChangepswdGenerated } from "./commands/user/changepswd/generated";
import { AdminUserChangepswdManual } from "./commands/user/changepswd/manual";
import { AdminUserDelete } from "./commands/user/delete";
import { AdminUserDisapprove } from "./commands/user/disapprove";
import { AdminUserList } from "./commands/user/list";
import { AdminUserPreferencesGet } from "./commands/user/preferences/get";
import { AdminUserPreferencesSet } from "./commands/user/preferences/set";

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
  bughunt: {
    report: {
      delete: AdminBugHuntReportDelete,
      open: AdminBugHuntReportOpen,
      close: AdminBugHuntReportClose,
    },
    list: {
      all: AdminBugHuntListAll,
    },
    stats: AdminBugHuntStats,
  },
  user: {
    approve: AdminUserApprove,
    disapprove: AdminUserDisapprove,
    changeemail: AdminUserChangeemail,
    list: AdminUserList,
    changepswd: {
      generated: AdminUserChangepswdGenerated,
      manual: AdminUserChangepswdManual,
    },
    preferences: {
      get: AdminUserPreferencesGet,
      set: AdminUserPreferencesSet,
    },
    delete: AdminUserDelete,
  },
};

export const RESULT_CAPTIONS: Record<number, string> = {
  0: "OK",
  1: "EMPTY",
  2: "PERMISSION DENIED",
  3: "NOT FOUND OR UNCHANGED",
  4: "COMMAND NOT FOUND",
  5: "SYNTAX ERROR",
  6: "ABORT",
  7: "MISMATCH ERROR",
};
