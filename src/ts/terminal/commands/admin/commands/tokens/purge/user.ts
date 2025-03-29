import type { AdminCommand } from "$ts/terminal/commands/admin";

export const AdminTokensPurgeUser: AdminCommand = async (term, admin, argv) => {
  if (!admin.canAccess("admin.tokens.purge.user", "admin.users.list")) return 2;

  const [username] = argv;

  if (!username) return 5;

  const users = await admin.getAllUsers();
  const result = await admin.purgeUserTokens(users.filter((u) => u.username === username)[0]?._id);

  return result ? 0 : 3;
};
