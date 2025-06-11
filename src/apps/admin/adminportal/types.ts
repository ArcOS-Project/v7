import type { ServerLogItem, ServerStatistics, User } from "$types/admin";
import type { BugReport, ReportStatistics } from "$types/bughunt";
import type { ExpandedUserInfo } from "$types/user";
import type { Component } from "svelte";
import type { AdminPortalRuntime } from "./runtime";
import type { SharedDriveType } from "$types/shares";
import type { FsAccess } from "$types/fs";

export interface AdminPortalPage {
  name: string;
  icon: string;
  content: Component<any>;
  hidden?: boolean;
  separator?: boolean;
  scopes?: string[];
  parent?: string;
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
  reports: BugReport[];
};

export type SharesData = {
  shares: SharedDriveType[];
  users: ExpandedUserInfo[];
};

export type ViewShareData = {
  share: SharedDriveType;
  accessors: FsAccess[];
  users: ExpandedUserInfo[];
};

export type FilesystemsData = {
  users: ExpandedUserInfo[];
};

//
// End props for individual pages
//

export type UsersPageFilters = "all" | "regular" | "admins" | "disapproved" | "online";
export type SharesPageFilters = "all" | "resized" | "locked";
