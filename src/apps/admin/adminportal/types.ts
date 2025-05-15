import type { ServerLogItem, ServerStatistics, User } from "$types/admin";
import type { BugReport, ReportStatistics } from "$types/bughunt";
import type { ExpandedUserInfo } from "$types/user";
import type { Component } from "svelte";
import type { AdminPortalRuntime } from "./runtime";

export interface AdminPortalPage {
  name: string;
  icon: string;
  content: Component<any>;
  hidden?: boolean;
  separator?: boolean;
  scopes?: string[];
  props?: (process: AdminPortalRuntime) => Promise<Record<string, any>> | Record<string, any>; // = any data to be gathered before rendering
}

export type AdminPortalPages = Map<string, AdminPortalPage>;
export type PageData = Record<string, any>;

//
// Props for individual pages
//

export type DashboardData = {
  stats: ServerStatistics;
  logs: ServerLogItem[];
};

export type BugHuntData = {
  users: User[];
  reports: BugReport[];
  stats: ReportStatistics;
};

export type ViewBugReportData = {
  report: BugReport;
};

export type UsersData = {
  users: ExpandedUserInfo[];
};

export type ViewUserData = {
  user: ExpandedUserInfo;
};

//
// End props for individual pages
//
