import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminTokensPurgeAll: AdminCommandType = async (term, admin, argv) => {
  if (!admin.canAccess("admin.tokens.purge.all")) return 2;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const result = await admin.purgeAllTokens();

  return result ? 0 : 3;
};
