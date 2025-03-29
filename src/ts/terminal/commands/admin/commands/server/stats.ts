import { formatBytes } from "$ts/fs/util";
import type { AdminCommand } from "$ts/terminal/commands/admin";

export const AdminServerStats: AdminCommand = async (term, admin) => {
  if (!admin.canAccess("admin.stats")) return 2;

  const stats = await admin.getStatistics();

  if (!stats) return 1;

  for (const key in stats.counts) {
    term.rl?.println(`${key.padEnd(12, " ")}: ${stats.counts[key]} (${formatBytes(stats.sizes[key])})`);
  }

  return 0;
};
