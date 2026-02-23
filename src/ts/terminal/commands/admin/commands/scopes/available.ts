import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { BRBLACK, BRPURPLE, RESET } from "$ts/terminal/store";

export const AdminScopesAvailable: AdminCommandType = async (term, admin) => {
  const available = await admin.getAvailableScopes();
  if (!admin.canAccess(AdminScopes.adminScopesAvailable)) return 2;

  if (!available) return 1;

  for (const key in available) {
    term.rl?.println(`${BRPURPLE}${key.padEnd(30, " ")}${BRBLACK}:${RESET} ${available[key]}`);
  }

  return 0;
};
