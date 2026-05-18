import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminTokensPurgeUser: AdminCommandType = async (term, admin, argv) => {
  if (!admin.canAccess(AdminScopes.adminTokensPurgeUserDelete, AdminScopes.adminUsersList)) return 2;

  const [username] = argv;

  if (!username) return 5;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const users = await admin.getAllUsers();
  const result = await admin.purgeUserTokens(users.filter((u) => u.username === username)[0]?._id);

  return result ? 0 : 3;
};
