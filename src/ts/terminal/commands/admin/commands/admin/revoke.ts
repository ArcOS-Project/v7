import type { AdminCommand } from "$ts/terminal/commands/admin";

export const AdminRevoke: AdminCommand = async (term, admin, argv) => {
  const [username] = argv;

  if (!username) return 5;
  if (!admin.canAccess("admin.revoke")) return 2;

  const revoked = await admin.revokeAdmin(username);

  return revoked ? 0 : 3;
};
