import { DevelopmentLogo, EsrLogo, RcLogo, ReleaseLogo, UnstableLogo } from "$ts/images/branding";
import { AdminScopes } from "$ts/server/admin/store";
import Activities from "./AdminPortal/Page/Activities.svelte";
import Administrators from "./AdminPortal/Page/Administrators.svelte";
import Approvals from "./AdminPortal/Page/Approvals.svelte";
import AuditLog from "./AdminPortal/Page/AuditLog.svelte";
import BugHunt from "./AdminPortal/Page/BugHunt.svelte";
import Dashboard from "./AdminPortal/Page/Dashboard.svelte";
import Filesystems from "./AdminPortal/Page/Filesystems.svelte";
import Indexing from "./AdminPortal/Page/Indexing.svelte";
import Logs from "./AdminPortal/Page/Logs.svelte";
import Scopes from "./AdminPortal/Page/Scopes.svelte";
import Shares from "./AdminPortal/Page/Shares.svelte";
import Tokens from "./AdminPortal/Page/Tokens.svelte";
import TwoFactor from "./AdminPortal/Page/TwoFactor.svelte";
import Users from "./AdminPortal/Page/Users.svelte";
import ViewBugReport from "./AdminPortal/Page/ViewBugReport.svelte";
import ViewShare from "./AdminPortal/Page/ViewShare.svelte";
import ViewUser from "./AdminPortal/Page/ViewUser.svelte";
import type { AdminPortalPage, AdminPortalPages } from "./types";

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
      scopes: [AdminScopes.adminUsersList],
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
    "2fa",
    {
      name: "2FA",
      icon: "fingerprint",
      content: TwoFactor,
      separator: true,
    },
  ],

  [
    "administrators",
    {
      name: "Administrators",
      icon: "shield-user",
      content: Administrators,
    },
  ],
  [
    "scopes",
    {
      name: "Scopes",
      icon: "telescope",
      content: Scopes,
      separator: true,
    },
  ],
  [
    "auditLog",
    {
      name: "Audit log",
      icon: "scroll-text",
      content: AuditLog,
    },
  ],
  [
    "logs",
    {
      name: "Logs",
      icon: "layout-list",
      content: Logs,
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
