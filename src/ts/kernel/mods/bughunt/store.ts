import type { ReportOptions } from "$types/server/bughunt";

export const defaultReportOptions: ReportOptions = {
  title: "Auto-generated report",
  body: "No user-input was provided when generating this report.",
};
