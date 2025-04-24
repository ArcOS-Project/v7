import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { BRBLACK, BRPURPLE, RESET } from "$ts/terminal/store";

export const AdminScopesGet: AdminCommandType = async (term, admin, argv) => {
  if (!admin.canAccess("admin.scopes.get")) return 2;

  const [username] = argv;

  if (!username) return 5;

  const scopes = await admin.getScopesOf(username);

  if (!scopes.length) return 1;

  for (let i = 0; i < scopes.length; i++) {
    term.rl?.println(`${BRPURPLE}${i}${BRBLACK}:${RESET} ${scopes[i]}`);
  }

  return 0;
};
