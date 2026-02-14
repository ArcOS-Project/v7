import type { App } from "$types/app";
import type { BugReport, OutgoingBugReport, ReportOptions } from "$types/bughunt";

export interface IBugHunt {
  _init(): Promise<void>;
  createReport(options?: ReportOptions, app?: App, storeItemId?: string): OutgoingBugReport;
  sendReport(outgoing: OutgoingBugReport, token?: string, options?: ReportOptions): Promise<boolean>;
  getToken(): string;
  getUserBugReports(token: string): Promise<BugReport[]>;
  getPublicBugReports(): Promise<BugReport[]>;
}
