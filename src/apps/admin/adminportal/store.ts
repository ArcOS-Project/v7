import { DevelopmentLogo, EsrLogo, RcLogo, ReleaseLogo, UnstableLogo } from "$ts/images/branding";
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
      scopes: ["admin.logs", "admin.stats"],
    },
  ],
  [
    "bughunt",
    {
      name: "Bug Hunt",
      icon: "bug",
      content: BugHunt,
      separator: true,
      scopes: ["admin.bughunt.reports.list", "admin.bughunt.stats"],
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
      scopes: ["admin.bughunt.get", "admin.bughunt.delete", "admin.bughunt.open", "admin.bughunt.close"],
      icon: "",
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
      scopes: ["admin.users.list"],
    },
  ],
  [
    "viewUser",
    {
      name: "View User",
      hidden: true,
      icon: "",
      content: ViewUser,
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
    },
  ],
  [
    "filesystems",
    {
      name: "Filesystems",
      icon: "server",
      content: Filesystems,
    },
  ],
  [
    "indexing",
    {
      name: "Indexing",
      icon: "list-check",
      content: Indexing,
      separator: true,
    },
  ],
  [
    "tokens",
    {
      name: "Tokens",
      icon: "key",
      content: Tokens,
    },
  ],
  [
    "approvals",
    {
      name: "Approvals",
      icon: "user-check",
      content: Approvals,
    },
  ],
  [
    "activities",
    {
      name: "Activities",
      icon: "shield-ellipsis",
      content: Activities,
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
