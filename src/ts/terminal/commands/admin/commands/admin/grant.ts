import type { AdminCommand } from "$ts/terminal/commands/admin";

export const AdminGrant: AdminCommand = async (term, admin, argv) => {
  const [username] = argv;

  if (!username) return 5;
  if (!admin.canAccess("admin.grant")) return 2;

  const granted = await admin.grantAdmin(username);

  return granted ? 0 : 3;
};
