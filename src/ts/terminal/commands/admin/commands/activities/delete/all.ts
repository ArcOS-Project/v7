import { AdminScopes } from "$ts/server/admin/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminActivitiesDeleteAll: AdminCommandType = async (term, admin) => {
  if (!admin.canAccess(AdminScopes.adminActivitiesDelete)) return 2;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const result = await admin.deleteAllActivities();

  return result ? 0 : 3;
};
