import { DevelopmentLogo, EsrLogo, RcLogo, ReleaseLogo, UnstableLogo } from "$ts/images/branding";
import { AdminScopes } from "$ts/server/admin/store";
import Activities from "./AdminPortal/Page/Activities.svelte";
import AuditLog from "./AdminPortal/Page/AuditLog.svelte";
import BugHunt from "./AdminPortal/Page/BugHunt.svelte";
import Dashboard from "./AdminPortal/Page/Dashboard.svelte";
import Filesystems from "./AdminPortal/Page/Filesystems.svelte";
import Logs from "./AdminPortal/Page/Logs.svelte";
import Scopes from "./AdminPortal/Page/Scopes.svelte";
import Shares from "./AdminPortal/Page/Shares.svelte";
import Tokens from "./AdminPortal/Page/Tokens.svelte";
import Users from "./AdminPortal/Page/Users.svelte";
import ViewBugReport from "./AdminPortal/Page/ViewBugReport.svelte";
import ViewScopes from "./AdminPortal/Page/ViewScopes.svelte";
import ViewShare from "./AdminPortal/Page/ViewShare.svelte";
import ViewUser from "./AdminPortal/Page/ViewUser.svelte";
import type { AdminPortalPage, AdminPortalPages, SpecificAdminActions } from "./types";

export const AdminPortalPageStore: AdminPortalPages = new Map<string, AdminPortalPage>([
  [
    "dashboard",
    {
      name: "Dashboard",
      icon: "layout-dashboard",
      content: Dashboard,
      props: async (process) => {
        const stats = await process.admin.getStatistics();
        const logs = (await process.admin.getServerLogs()).reverse();

        return { stats, logs };
      },
      scopes: [AdminScopes.adminLogs, AdminScopes.adminStats],
    },
  ],
  [
    "bughunt",
    {
      name: "Bug Hunt",
      icon: "bug",
      content: BugHunt,
      separator: true,
      scopes: [AdminScopes.adminBugHuntList, AdminScopes.adminBugHuntStats],
      props: async (process) => {
        const reports = await process.admin.getAllBugReports();
        const stats = await process.admin.getBugHuntStatistics();

        return { reports, stats };
      },
    },
  ],
  [
    "viewBugReport",
    {
      name: "View Bug Report",
      content: ViewBugReport,
      hidden: true,
      scopes: [
        AdminScopes.adminBugHuntGet,
        AdminScopes.adminBugHuntDelete,
        AdminScopes.adminBugHuntOpen,
        AdminScopes.adminBugHuntClose,
      ],
      icon: "",
      parent: "bugHunt",
    },
  ],
  [
    "users",
    {
      name: "Users",
      icon: "user",
      content: Users,
      separator: true,
      props: async (process) => {
        const users = await process.admin.getAllUsers();

        return { users };
      },
      scopes: [AdminScopes.adminUsersList],
    },
  ],
  [
    "viewUser",
    {
      name: "View User",
      hidden: true,
      icon: "",
      content: ViewUser,
      props: async (process) => {
        return { reports: await process.admin.getAllBugReports() };
      },
      scopes: [AdminScopes.adminBugHuntGet],
      parent: "users",
    },
  ],
  [
    "shares",
    {
      name: "Shares",
      icon: "network",
      content: Shares,
      props: async (process) => {
        return { shares: await process.admin.getAllShares(), users: await process.admin.getAllUsers() };
      },
      scopes: [AdminScopes.adminShareList, AdminScopes.adminUsersList],
    },
  ],
  [
    "viewShare",
    {
      name: "View share",
      hidden: true,
      icon: "",
      content: ViewShare,
      props: async (process) => {
        return { users: await process.admin.getAllUsers(), accessors: await process.admin.getAllFsAccessors() };
      },
      scopes: [AdminScopes.adminUsersList, AdminScopes.adminAccessorsGet],
      parent: "shares",
    },
  ],
  [
    "filesystems",
    {
      name: "Filesystems",
      icon: "server",
      content: Filesystems,
      props: async (process) => {
        return { users: (await process.admin.getAllUsers()).reverse() };
      },
      scopes: [AdminScopes.adminUsersList, AdminScopes.adminUserfsQuota],
      separator: true,
    },
  ],
  [
    "tokens",
    {
      name: "Tokens",
      icon: "key",
      content: Tokens,
      props: async (process) => {
        return { tokens: await process.admin.getAllTokens(), users: await process.admin.getAllUsers() };
      },
      scopes: [AdminScopes.adminTokensGet, AdminScopes.adminUsersList],
    },
  ],
  [
    "activities",
    {
      name: "Activities",
      icon: "shield-ellipsis",
      content: Activities,
      props: async (process) => {
        return { activities: await process.admin.getAllActivity(), users: await process.admin.getAllUsers() };
      },
      scopes: [AdminScopes.adminUsersList, AdminScopes.adminActivitiesList],
    },
  ],
  [
    "scopes",
    {
      name: "Scopes",
      icon: "telescope",
      content: Scopes,
      separator: true,
      props: async (process) => {
        return { admins: (await process.admin.getAllUsers()).filter((u) => u.admin) };
      },
      scopes: [
        AdminScopes.adminScopesAvailable,
        AdminScopes.adminScopesGet,
        AdminScopes.adminScopesPut,
        AdminScopes.adminUsersList,
      ],
    },
  ],
  [
    "viewScopes",
    {
      name: "View scopes",
      icon: "",
      parent: "scopes",
      content: ViewScopes,
      hidden: true,
      props: async (process) => {
        return { scopes: await process.admin.getAvailableScopes() };
      },
      scopes: [AdminScopes.adminScopesAvailable],
    },
  ],
  [
    "auditLog",
    {
      name: "Audit log",
      icon: "scroll-text",
      content: AuditLog,
      props: async (process) => {
        return { audits: (await process.admin.getAuditLog()).reverse(), users: await process.admin.getAllUsers() };
      },
      scopes: [AdminScopes.adminAuditLog, AdminScopes.adminUsersList],
    },
  ],
  [
    "logs",
    {
      name: "Logs",
      icon: "layout-list",
      content: Logs,
      scopes: [AdminScopes.adminLogs],
      props: async (process) => {
        const logs = (await process.admin.getServerLogs()).reverse();

        logs.length = 1024;

        return { logs };
      },
    },
  ],
]);

export const LogoTranslations: Record<string, string> = {
  release: ReleaseLogo,
  development: DevelopmentLogo,
  rc: RcLogo,
  esr: EsrLogo,
  unstable: UnstableLogo,
};

export const specificAdminActions: SpecificAdminActions = {
  logs: {
    caption: "View logs",
    scopes: [AdminScopes.adminAuditLog, AdminScopes.adminLogs],
  },
  stats: {
    caption: "View statistics",
    scopes: [AdminScopes.adminStats],
  },
  adminGnr: {
    caption: "Admin G&R",
    scopes: [AdminScopes.adminGrant, AdminScopes.adminRevoke],
  },
  preferences: {
    caption: "Manage preferences",
    scopes: [AdminScopes.adminPreferencesGet, AdminScopes.adminPreferencesPut],
  },
  accessFs: {
    caption: "Access filesystems",
    scopes: [
      AdminScopes.adminUserfsDirect,
      AdminScopes.adminUserfsFile,
      AdminScopes.adminUserfsFolder,
      AdminScopes.adminUserfsTree,
    ],
  },
  userQuota: {
    caption: "Manage user quota",
    scopes: [AdminScopes.adminUserfsQuota],
  },
  listUsers: {
    caption: "List users",
    scopes: [AdminScopes.adminUsersList],
  },
  deleteUser: {
    caption: "Delete user!",
    scopes: [AdminScopes.adminUsersDelete],
  },
  changeEmail: {
    caption: "Change email",
    scopes: [AdminScopes.adminUsersChangeEmail],
  },
  changePassword: {
    caption: "Change user password",
    scopes: [AdminScopes.adminUsersChangePswd],
  },
  approval: {
    caption: "User A&D",
    scopes: [AdminScopes.adminUsersApprove, AdminScopes.adminUsersDisapprove],
  },
  getTokens: {
    caption: "Get tokens",
    scopes: [AdminScopes.adminTokensGet],
  },
  deleteTokens: {
    caption: "Delete tokens",
    scopes: [
      AdminScopes.adminTokensPurgeAllDelete,
      AdminScopes.adminTokensPurgeOneDelete,
      AdminScopes.adminTokensPurgeUserDelete,
    ],
  },
  getScopes: {
    caption: "Get scopes",
    scopes: [AdminScopes.adminScopesAvailable, AdminScopes.adminScopesGet],
  },
  changeScopes: {
    caption: "Change scopes",
    scopes: [AdminScopes.adminScopesPut],
  },
  listBugReports: {
    caption: "List bug reports",
    scopes: [AdminScopes.adminBugHuntList],
  },
  manageBugReports: {
    caption: "Manage bug reports",
    scopes: [
      AdminScopes.adminBugHuntClose,
      AdminScopes.adminBugHuntDelete,
      AdminScopes.adminBugHuntGet,
      AdminScopes.adminBugHuntOpen,
    ],
  },
  bugHuntStats: {
    caption: "BugHunt stats",
    scopes: [AdminScopes.adminBugHuntStats],
  },
  viewActivities: {
    caption: "View activities",
    scopes: [AdminScopes.adminActivitiesList, AdminScopes.adminActivitiesUserGet],
  },
  deleteActivities: {
    caption: "Delete activities",
    scopes: [AdminScopes.adminActivitiesDelete, AdminScopes.adminActivitiesDeleteUser],
  },
  getTotp: {
    caption: "Get TOTP",
    scopes: [AdminScopes.adminTotpGet, AdminScopes.adminTotpGetUser],
  },
  manageTotp: {
    caption: "Manage TOTP",
    scopes: [AdminScopes.adminTotpDeactivateUser, AdminScopes.adminTotpDeleteUser],
  },
  getDfas: {
    caption: "Get DFAs",
    scopes: [AdminScopes.adminAccessorsGet, AdminScopes.adminAccessorsGetUser],
  },
  deleteDfas: {
    caption: "Delete DFAs",
    scopes: [AdminScopes.adminAccessorsDelete, AdminScopes.adminAccessorsDeleteUser],
  },
  getIndexes: {
    caption: "Get indexes",
    scopes: [AdminScopes.adminIndexGet, AdminScopes.adminIndexGetUser],
  },
  deleteIndexes: {
    caption: "Delete indexes",
    scopes: [AdminScopes.adminIndexDeleteUser],
  },
  shareInteract: {
    caption: "Share interact",
    scopes: [AdminScopes.adminShareInteract],
  },
  deleteShare: {
    caption: "Delete share",
    scopes: [AdminScopes.adminShareDelete],
  },
  manageShareMembers: {
    caption: "Manage share members",
    scopes: [AdminScopes.adminShareMembersGet, AdminScopes.adminShareKick, AdminScopes.adminShareAddUser],
  },
  getSdfas: {
    caption: "Get SDFAs",
    scopes: [AdminScopes.adminShareAccessorsGet],
  },
  deleteSdfas: {
    caption: "Delete SDFAs",
    scopes: [AdminScopes.adminShareAccessorsDelete],
  },
  changeShareAuth: {
    caption: "Change share auth",
    scopes: [AdminScopes.adminShareChangePswd, AdminScopes.adminShareRename, AdminScopes.adminShareChown],
  },
  manageShareQuota: {
    caption: "Manage share quota",
    scopes: [AdminScopes.adminShareQuotaGet, AdminScopes.adminShareQuotaPut],
  },
};
