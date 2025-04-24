import { formatBytes } from "$ts/fs/util";
import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { BOLD, BRGREEN, BRPURPLE, BRYELLOW, RESET } from "$ts/terminal/store";

export const AdminServerStats: AdminCommandType = async (term, admin) => {
  if (!admin.canAccess("admin.stats")) return 2;

  const stats = await admin.getStatistics();

  if (!stats) return 1;

  for (const key in stats.counts) {
    term.rl?.println(`${BRPURPLE}${key.padEnd(12, " ")}${RESET}: ${stats.counts[key]} (${formatBytes(stats.sizes[key])})`);
  }

  term.rl?.println(
    `\r\n${BRYELLOW}***${RESET} Server reports ${BRGREEN}${BOLD}${stats.endpoints}${RESET} loaded API endpoints. ${BRYELLOW}***${RESET}\r\n`
  );

  return 0;
};
