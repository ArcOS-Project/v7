import type { Activity, AuditLog, ExpandedToken, ServerLogItem, ServerStatistics, User } from "$types/admin";
import type { BugReport, ReportStatistics } from "$types/bughunt";
import type { FsAccess } from "$types/fs";
import type { SharedDriveType } from "$types/shares";
import type { ExpandedUserInfo, UserInfo } from "$types/user";
import type { Component } from "svelte";
import type { AdminPortalRuntime } from "./runtime";
import type { StoreItem } from "$types/package";

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

export type StoreData = {
  items: StoreItem[];
  users: ExpandedUserInfo[];
};

export type ViewStoreItemData = {
  item: StoreItem;
};

export type TokensData = {
  tokens: ExpandedToken[];
  users: ExpandedUserInfo[];
};

export type ActivitiesData = {
  activities: Activity[];
  users: ExpandedUserInfo[];
};

export type ScopesData = {
  admins: ExpandedUserInfo[];
};

export type ViewScopesData = {
  admin: ExpandedUserInfo;
  scopes: Record<string, string>;
};

export type AuditLogData = {
  users: ExpandedUserInfo[];
  audits: AuditLog[];
};

//
// End props for individual pages
//

export type UsersPageFilters = "all" | "regular" | "admins" | "disapproved" | "online";
export type SharesPageFilters = "all" | "resized" | "locked";
export type StorePageFilters = "all" | "official" | "deprecated";
export interface SpecificAdminAction {
  caption: string;
  scopes: string[];
  className?: string;
  disabled?: (user: UserInfo) => boolean;
  separate?: boolean;
}

export type SpecificAdminActions = Record<string, SpecificAdminAction>;

export interface FilesystemsPageQuota extends Record<string, any> {
  user: ExpandedUserInfo;
  used: number;
  max: number;
  free: number;
  percentage: number;
  unknown?: boolean;
}
