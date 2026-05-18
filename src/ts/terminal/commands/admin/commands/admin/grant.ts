import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminGrant: AdminCommandType = async (term, admin, argv) => {
  const [username] = argv;

  if (!username) return 5;
  if (!admin.canAccess(AdminScopes.adminGrant)) return 2;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const granted = await admin.grantAdmin(username);

  return granted ? 0 : 3;
};
