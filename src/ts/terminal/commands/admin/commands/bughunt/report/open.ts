import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminBugHuntReportOpen: AdminCommandType = async (term, admin, argv) => {
  if (!admin.canAccess(AdminScopes.adminBugHuntOpen)) return 2;

  const [id] = argv;

  if (!id) return 5;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const opened = await admin.reopenBugReport(id);

  return opened ? 0 : 3;
};
