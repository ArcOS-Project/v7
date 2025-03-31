import { AdminAccessorsDeleteAll } from "./commands/accessors/delete/all";
import { AdminAccessorsDeleteUser } from "./commands/accessors/delete/user";
import { AdminAccessorsListAll } from "./commands/accessors/list/all";
import { AdminAccessorsListUser } from "./commands/accessors/list/user";
import { AdminActivitiesDeleteAll } from "./commands/activities/delete/all";
import { AdminActivitiesDeleteUser } from "./commands/activities/delete/user";
import { AdminActivitiesListAll } from "./commands/activities/list/all";
import { AdminActivitiesListUser } from "./commands/activities/list/user";
import { AdminGrant } from "./commands/admin/grant";
import { AdminRevoke } from "./commands/admin/revoke";
import { AdminBugHuntListAll } from "./commands/bughunt/list/all";
import { AdminBugHuntReportClose } from "./commands/bughunt/report/close";
import { AdminBugHuntReportDelete } from "./commands/bughunt/report/delete";
import { AdminBugHuntReportOpen } from "./commands/bughunt/report/open";
import { AdminBugHuntStats } from "./commands/bughunt/stats";
import { AdminHelp } from "./commands/help";
import { AdminMount } from "./commands/mount";
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
import { AdminTotpDeactivate } from "./commands/totp/deactivate";
import { AdminTotpDelete } from "./commands/totp/delete";
import { AdminTotpGet } from "./commands/totp/get";
import { AdminTotpListAll } from "./commands/totp/list/all";
import { AdminUserApprove } from "./commands/user/approve";
import { AdminUserChangeemail } from "./commands/user/changeemail";
import { AdminUserChangepswdGenerated } from "./commands/user/changepswd/generated";
import { AdminUserChangepswdManual } from "./commands/user/changepswd/manual";
import { AdminUserDelete } from "./commands/user/delete";
import { AdminUserDisapprove } from "./commands/user/disapprove";
import { AdminUserList } from "./commands/user/list";
import { AdminUserPreferencesGet } from "./commands/user/preferences/get";
import { AdminUserPreferencesSet } from "./commands/user/preferences/set";
import { AdminUserQuotaGet } from "./commands/user/quota/get";
import { AdminUserQuotaSet } from "./commands/user/quota/set";

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
    quota: {
      get: AdminUserQuotaGet,
      set: AdminUserQuotaSet,
    },
  },
  mount: AdminMount,
  activities: {
    list: {
      all: AdminActivitiesListAll,
      user: AdminActivitiesListUser,
    },
    delete: {
      all: AdminActivitiesDeleteAll,
      user: AdminActivitiesDeleteUser,
    },
  },
  totp: {
    list: {
      all: AdminTotpListAll,
    },
    get: AdminTotpGet,
    delete: AdminTotpDelete,
    deactivate: AdminTotpDeactivate,
  },
  "?": AdminHelp,
  accessors: {
    list: {
      all: AdminAccessorsListAll,
      user: AdminAccessorsListUser,
    },
    delete: {
      all: AdminAccessorsDeleteAll,
      user: AdminAccessorsDeleteUser,
    },
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
