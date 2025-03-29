import type { AdminCommand } from "$ts/terminal/commands/admin";

export const AdminTokensPurgeAll: AdminCommand = async (term, admin, argv) => {
  if (!admin.canAccess("admin.tokens.purge.all")) return 2;

  const result = await admin.purgeAllTokens();

  return result ? 0 : 3;
};
