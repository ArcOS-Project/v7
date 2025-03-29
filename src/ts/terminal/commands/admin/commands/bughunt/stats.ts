import type { AdminCommand } from "$ts/terminal/commands/admin";

export const AdminBugHuntStats: AdminCommand = async (term, admin) => {
  if (!admin.canAccess("admin.bughunt.stats")) return 2;

  const stats = await admin.getBugHuntStatistics();

  if (!stats) return 1;

  for (const key in stats) {
    term.rl?.println(`${key.padEnd(12, " ")}: ${stats[key]}`);
  }

  return 0;
};
