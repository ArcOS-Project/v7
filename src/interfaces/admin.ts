import type { BugReportTpaFile } from "$apps/admin/adminportal/types";
import type { BugReport } from "$types/bughunt";
import type { ReadableStore } from "$types/writable";
import type { IAppProcess } from "./app";
import type { IAdminBootstrapper } from "./services/AdminBootstrapper";
import type { IShareManager } from "./services/ShareMgmt";

export interface IAdminPortalRuntime extends IAppProcess {
  ready: ReadableStore<boolean>;
  currentPage: ReadableStore<string>;
  switchPageProps: ReadableStore<Record<string, any>>;
  redacted: ReadableStore<boolean>;
  propSize: ReadableStore<number>;
  shares: IShareManager;
  admin: IAdminBootstrapper;
  start(): Promise<void>;
  switchPage(pageId: string, props?: Record<string, any>, force?: boolean): Promise<void>;
  saveTpaFilesOfBugReport(report: BugReport): Promise<BugReportTpaFile[]>;
  viewUserById(userId: string): Promise<void>;
}
