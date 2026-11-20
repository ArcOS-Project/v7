import type { BugReport } from "../bughunt";

export interface BugReportSourceInformation {
  line: number;
  column: number;
  originalSource: string;
  prettySource: string;
  prettyLine?: number;
  prettyColumn?: number;
  errorMessage?: string;
  fileUrl?: string;
  filename?: string;
}

export interface BugHuntGetResponse {
  report: BugReport;
  reportId: string;
}