import type { AdminCommand } from "$ts/terminal/commands/admin";

export const AdminTokensPurgeOne: AdminCommand = async (term, admin, argv) => {
  if (!admin.canAccess("admin.tokens.purge.one")) return 2;

  const [id] = argv;

  if (!id) return 5;

  const result = await admin.purgeOneToken(id);

  return result ? 0 : 3;
};
