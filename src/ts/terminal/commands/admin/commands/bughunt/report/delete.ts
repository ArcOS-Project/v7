import { AdminScopes } from "$ts/server/admin/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminBugHuntReportDelete: AdminCommandType = async (term, admin, argv) => {
  if (!admin.canAccess(AdminScopes.adminBugHuntDelete)) return 2;

  const [id] = argv;

  if (!id) return 5;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const deleted = await admin.deleteBugReport(id);

  return deleted ? 0 : 3;
};
