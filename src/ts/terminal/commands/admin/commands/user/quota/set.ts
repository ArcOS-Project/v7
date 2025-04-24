import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { tryParseInt } from "$ts/util";

export const AdminUserQuotaSet: AdminCommandType = async (term, admin, argv) => {
  if (!admin.canAccess("admin.userfs.quota")) return 2;

  const [username, newQuota] = argv;
  if (!username || !newQuota) return 5;

  const quota = await admin.getQuotaOf(username);
  if (!quota) return 3;

  const parsed = tryParseInt(newQuota);

  if (!parsed || Number.isNaN(parsed)) return 5;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const result = await admin.setQuotaOf(username, parsed);

  return result ? 0 : 3;
};
