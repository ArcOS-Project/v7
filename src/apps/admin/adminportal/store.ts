import { DevelopmentLogo, EsrLogo, RcLogo, ReleaseLogo, UnstableLogo } from "$ts/images/branding";
import { AdminScopes } from "$ts/server/admin/store";
import { sliceIntoChunks } from "$ts/util";
import type { PartialUserTotp, Token } from "$types/admin";
import Activities from "./AdminPortal/Page/Activities.svelte";
import AuditLog from "./AdminPortal/Page/AuditLog.svelte";
import BugHunt from "./AdminPortal/Page/BugHunt.svelte";
import Dashboard from "./AdminPortal/Page/Dashboard.svelte";
import ExecuteQuery from "./AdminPortal/Page/ExecuteQuery.svelte";
import Filesystems from "./AdminPortal/Page/Filesystems.svelte";
import Logs from "./AdminPortal/Page/Logs.svelte";
import NoAdminBootstrapper from "./AdminPortal/Page/NoAdminBootstrapper.svelte";
import Scopes from "./AdminPortal/Page/Scopes.svelte";
import Shares from "./AdminPortal/Page/Shares.svelte";
import Store from "./AdminPortal/Page/Store.svelte";
import Tokens from "./AdminPortal/Page/Tokens.svelte";
import Users from "./AdminPortal/Page/Users.svelte";
import ViewBugReport from "./AdminPortal/Page/ViewBugReport.svelte";
import ViewScopes from "./AdminPortal/Page/ViewScopes.svelte";
import ViewShare from "./AdminPortal/Page/ViewShare.svelte";
import ViewStoreItem from "./AdminPortal/Page/ViewStoreItem.svelte";
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
        const logs = (await process.admin.getServerLogs()).reverse(); // Newest log first

        return { stats, logs };
      },
      scopes: [AdminScopes.adminLogs, AdminScopes.adminStats],
    },
  ],
  [
    "query",
    {
      name: "Execute query",
      icon: "scan-search",
      content: ExecuteQuery,
      separator: true,
      props: async (process) => {
        const users = await process.admin.getAllUsers();

        return { users };
      },
      scopes: [AdminScopes.adminUsersList],
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
        const users = await process.admin.getAllUsers();

        return { reports, stats, users };
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
      parent: "bughunt",
      props: async (process) => {
        const id = process.switchPageProps().id;

        return { report: await process.admin.getBugReport(id) };
      },
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
        return { users: (await process.admin.getAllUsers()).reverse() }; // Newest users first
      },
      scopes: [AdminScopes.adminUsersList, AdminScopes.adminUserfsQuota],
    },
  ],
  [
    "store",
    {
      name: "App Store",
      icon: "shopping-bag",
      content: Store,
      props: async (process) => {
        return { items: await process.admin.getAllStoreItems(), users: await process.admin.getAllUsers() };
      },
      scopes: [AdminScopes.adminStoreListAll, AdminScopes.adminUsersList],
      separator: true,
    },
  ],
  [
    "viewStoreItem",
    {
      name: "View Store Item",
      icon: "",
      hidden: true,
      content: ViewStoreItem,
      props: async (process) => {
        const id = process.switchPageProps().id;

        return { item: await process.admin.getStoreItem(id) };
      },
      scopes: [
        AdminScopes.adminStoreBlock,
        AdminScopes.adminStoreUnblock,
        AdminScopes.adminStoreDeleteOne,
        AdminScopes.adminStoreDeprecate,
        AdminScopes.adminStoreUndeprecate,
        AdminScopes.adminStoreVerificationGet,
        AdminScopes.adminStoreVerificationSet,
        AdminScopes.adminStoreUnverify,
        AdminScopes.adminStoreOfficialOff,
        AdminScopes.adminStoreOfficialOn,
      ],
      parent: "store",
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
        return { admins: (await process.admin.getAllUsers()).filter((u) => u.admin) }; // Filter
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
        return {
          // Chunk the logs into 20 items to reduce lag, and have the newest presented first.
          audits: sliceIntoChunks((await process.admin.getAuditLog()).reverse(), 20),
          users: await process.admin.getAllUsers(),
        };
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
        const logs = (await process.admin.getServerLogs()).reverse(); // Newest first

        logs.length = 1024; // Cap off at 1024 because server logs accumulate REALLY fast

        return { logs };
      },
    },
  ],
  [
    "noAdminBootstrapper",
    {
      name: "No admin bootstrapper",
      content: NoAdminBootstrapper,
      props: async () => ({}),
      hidden: true,
      icon: "",
    },
  ],
]);

// report's mode -> LogoTranslations -> url to corresponding logo
export const LogoTranslations: Record<string, string> = {
  release: ReleaseLogo,
  development: DevelopmentLogo,
  rc: RcLogo,
  esr: EsrLogo,
  unstable: UnstableLogo,
};

// TODO: MOVE TO ADMIN RESOURCE DRIVE
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
  adminDrive: {
    caption: "Access ARD",
    scopes: [AdminScopes.adminAfsRead, AdminScopes.adminAfsWrite, AdminScopes.adminAfsQuota],
  },
  storeBlockUnblock: {
    caption: "Store (un)block",
    scopes: [AdminScopes.adminStoreBlock, AdminScopes.adminStoreUnblock],
  },
  storeDelete: {
    caption: "Store deletion",
    scopes: [AdminScopes.adminStoreDeleteOne, AdminScopes.adminStoreDeleteUser],
  },
  storeDeprecate: {
    caption: "Store deprecation",
    scopes: [AdminScopes.adminStoreDeprecate, AdminScopes.adminStoreUndeprecate],
  },
  storeOfficial: {
    caption: "Store set official",
    scopes: [AdminScopes.adminStoreOfficialOff, AdminScopes.adminStoreOfficialOn],
  },
  storeVerification: {
    caption: "Manage store verification",
    scopes: [AdminScopes.adminStoreVerificationGet, AdminScopes.adminStoreVerificationSet, AdminScopes.adminScopesAvailable],
  },
};

// TODO: MOVE TO ADMIN RESOURCE DRIVE
export const globalAdminActions: SpecificAdminActions = {
  god: {
    caption: "God Admin",
    scopes: [...Object.values(AdminScopes)],
  },
  logStat: {
    caption: "Logs & Stats",
    scopes: [AdminScopes.adminLogs, AdminScopes.adminAuditLog, AdminScopes.adminStats],
  },
  admins: {
    caption: "Administrators",
    scopes: [
      AdminScopes.adminGrant,
      AdminScopes.adminRevoke,
      AdminScopes.adminScopesAvailable,
      AdminScopes.adminScopesGet,
      AdminScopes.adminScopesPut,
    ],
  },
  preferences: {
    caption: "Preferences",
    scopes: [AdminScopes.adminPreferencesGet, AdminScopes.adminPreferencesPut],
  },
  userfs: {
    caption: "User FS",
    scopes: [
      AdminScopes.adminUserfsDirect,
      AdminScopes.adminUserfsFile,
      AdminScopes.adminUserfsFolder,
      AdminScopes.adminUserfsQuota,
      AdminScopes.adminUserfsTree,
    ],
  },
  users: {
    caption: "Users",
    scopes: [
      AdminScopes.adminUsersApprove,
      AdminScopes.adminUsersChangeEmail,
      AdminScopes.adminUsersChangePswd,
      AdminScopes.adminUsersDelete,
      AdminScopes.adminUsersDisapprove,
      AdminScopes.adminUsersApprove,
    ],
  },
  tokens: {
    caption: "Tokens",
    scopes: [
      AdminScopes.adminTokenDelete,
      AdminScopes.adminTokensGet,
      AdminScopes.adminTokensPurgeAllDelete,
      AdminScopes.adminTokensPurgeOneDelete,
      AdminScopes.adminTokensPurgeUserDelete,
      AdminScopes.adminLogout,
    ],
  },
  bughunt: {
    caption: "Bug hunt",
    scopes: [
      AdminScopes.adminBugHuntClose,
      AdminScopes.adminBugHuntDelete,
      AdminScopes.adminBugHuntGet,
      AdminScopes.adminBugHuntList,
      AdminScopes.adminBugHuntOpen,
      AdminScopes.adminBugHuntStats,
    ],
  },
  activities: {
    caption: "Activities",
    scopes: [
      AdminScopes.adminActivitiesDelete,
      AdminScopes.adminActivitiesDeleteUser,
      AdminScopes.adminActivitiesList,
      AdminScopes.adminActivitiesUserGet,
    ],
  },
  totp: {
    caption: "2FA",
    scopes: [
      AdminScopes.adminTotpDeactivateUser,
      AdminScopes.adminTotpDeleteUser,
      AdminScopes.adminTotpGet,
      AdminScopes.adminTotpGetUser,
    ],
  },
  accessors: {
    caption: "Accessors",
    scopes: [
      AdminScopes.adminAccessorsDelete,
      AdminScopes.adminAccessorsDeleteUser,
      AdminScopes.adminAccessorsGet,
      AdminScopes.adminAccessorsGetUser,
    ],
  },
  indexing: {
    caption: "Indexing",
    scopes: [
      AdminScopes.adminIndexDeleteUser,
      AdminScopes.adminIndexGet,
      AdminScopes.adminIndexGetUser,
      AdminScopes.adminIndexUser,
    ],
  },
  shares: {
    caption: "Shares",
    scopes: [
      AdminScopes.adminShareAccessorsDelete,
      AdminScopes.adminShareAccessorsGet,
      AdminScopes.adminShareAddUser,
      AdminScopes.adminShareChangePswd,
      AdminScopes.adminShareChown,
      AdminScopes.adminShareDelete,
      AdminScopes.adminShareInteract,
      AdminScopes.adminShareKick,
      AdminScopes.adminShareList,
      AdminScopes.adminShareListUser,
      AdminScopes.adminShareMembersGet,
      AdminScopes.adminShareQuotaGet,
      AdminScopes.adminShareQuotaPut,
      AdminScopes.adminShareRename,
    ],
  },
  store: {
    caption: "Store",
    scopes: [
      AdminScopes.adminStoreBlock,
      AdminScopes.adminStoreDeleteOne,
      AdminScopes.adminStoreDeleteUser,
      AdminScopes.adminStoreDeprecate,
      AdminScopes.adminStoreListAll,
      AdminScopes.adminStoreListUser,
      AdminScopes.adminStoreOfficialOff,
      AdminScopes.adminStoreOfficialOn,
      AdminScopes.adminStoreUnblock,
      AdminScopes.adminStoreUndeprecate,
      AdminScopes.adminStoreUnverify,
      AdminScopes.adminStoreVerificationGet,
      AdminScopes.adminStoreVerificationSet,
    ],
  },
  afs: {
    caption: "ARD",
    scopes: [AdminScopes.adminAfsQuota, AdminScopes.adminAfsRead, AdminScopes.adminAfsWrite],
  },
};

export const DefaultTotpInfo: PartialUserTotp = {
  _id: "",
  activated: false,
  userId: "",
};

export const DefaultTokenInfo: Token = {
  value: "",
  userId: "",
};
