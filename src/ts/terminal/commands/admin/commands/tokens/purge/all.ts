import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminTokensPurgeAll: AdminCommandType = async (term, admin, argv) => {
  if (!admin.canAccess(AdminScopes.adminTokensPurgeAllDelete)) return 2;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const result = await admin.purgeAllTokens();

  return result ? 0 : 3;
};
