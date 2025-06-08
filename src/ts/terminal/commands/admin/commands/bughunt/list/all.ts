import { AdminScopes } from "$ts/server/admin/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminBugHuntListAll: AdminCommandType = async (term, admin) => {
  if (!admin.canAccess(AdminScopes.adminBugHuntList)) return 2;

  const reports = await admin.getAllBugReports();

  if (!reports.length) return 1;

  for (const report of reports) {
    term.rl?.println(`[${report._id}] ${report.title}`);
  }

  return 0;
};
