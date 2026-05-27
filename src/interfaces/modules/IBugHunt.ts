import type { App } from "$types/apps/app";
import type { BugReport, OutgoingBugReport, ReportOptions } from "$types/server/bughunt";
import type { IKernelModule } from "./IKernelModule";

// !tpa
export interface IBugHunt extends IKernelModule {
  _init(): Promise<void>;
  createReport(options?: ReportOptions, app?: App, storeItemId?: string): OutgoingBugReport;
  sendReport(outgoing: OutgoingBugReport, token?: string, options?: ReportOptions): Promise<boolean>;
  getToken(): string;
  getUserBugReports(token: string): Promise<BugReport[]>;
  getPublicBugReports(token: string): Promise<BugReport[]>;
}
// !endtpa