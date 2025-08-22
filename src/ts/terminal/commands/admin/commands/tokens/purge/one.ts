import { AdminScopes } from "$ts/server/admin/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminTokensPurgeOne: AdminCommandType = async (term, admin, argv) => {
  if (!admin.canAccess(AdminScopes.adminTokensPurgeOneDelete)) return 2;

  const [id] = argv;

  if (!id) return 5;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const result = await admin.purgeOneToken(id);

  return result ? 0 : 3;
};
