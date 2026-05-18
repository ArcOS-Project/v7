import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminShareDelete: AdminCommandType = async (term, admin, [shareId]) => {
  if (!admin.canAccess(AdminScopes.adminShareDelete)) return 2;
  if (!shareId) return 5;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const result = await admin.deleteShare(shareId);
  return result ? 0 : 3;
};
