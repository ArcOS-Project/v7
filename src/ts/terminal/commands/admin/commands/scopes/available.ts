import type { AdminCommand } from "$ts/terminal/commands/admin";
import { BRBLACK, BRPURPLE, RESET } from "$ts/terminal/store";

export const AdminScopesAvailable: AdminCommand = async (term, admin) => {
  const available = await admin.getAvailableScopes();
  if (!admin.canAccess("admin.scopes.available")) return 2;

  if (!available) return 1;

  for (const key in available) {
    term.rl?.println(`${BRPURPLE}${key.padEnd(30, " ")}${BRBLACK}:${RESET} ${available[key]}`);
  }

  return 0;
};
