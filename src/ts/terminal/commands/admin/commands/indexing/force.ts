import type { AdminCommand } from "$ts/terminal/commands/admin";
import { BRPURPLE, RESET } from "$ts/terminal/store";

export const AdminIndexingForce: AdminCommand = async (term, admin, [username]) => {
  if (!admin.canAccess("admin.index.user")) return 2;
  if (!username) return 5;

  const result = await admin.forceIndexFor(username);

  if (!result.length) return 3;

  for (let i = 0; i < result.length; i++) {
    const index = `${BRPURPLE}${(i + 1).toString().padStart(4)}${RESET}`;

    term.rl?.println(`${index} ${result[i]}`);
  }

  return 0;
};
