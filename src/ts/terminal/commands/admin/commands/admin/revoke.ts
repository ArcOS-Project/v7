import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminRevoke: AdminCommandType = async (term, admin, argv) => {
  const [username] = argv;

  if (!username) return 5;
  if (!admin.canAccess("admin.revoke")) return 2;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const revoked = await admin.revokeAdmin(username);

  return revoked ? 0 : 3;
};
