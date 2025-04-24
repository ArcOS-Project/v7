import { formatBytes } from "$ts/fs/util";
import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminUserQuotaGet: AdminCommandType = async (term, admin, argv) => {
  if (!admin.canAccess("admin.userfs.quota")) return 2;

  const [username] = argv;
  if (!username) return 5;

  const quota = await admin.getQuotaOf(username);
  if (!quota) return 3;

  for (const key in quota) {
    const value = quota[key];
    const formatted =
      key !== "percentage" && typeof value === "number"
        ? formatBytes(value as number)
        : key === "percentage"
        ? parseInt(value as any).toFixed(2) + "%"
        : value;

    term.rl?.println(`${key}: ${formatted}`);
  }

  return 0;
};
