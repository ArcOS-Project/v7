import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminTotpDeactivate: AdminCommandType = async (term, admin, [username]) => {
  if (!admin.canAccess(AdminScopes.adminTotpDeactivateUser)) return 2;
  if (!username) return 5;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const result = await admin.deActivateTotpOf(username);

  return result ? 0 : 3;
};
