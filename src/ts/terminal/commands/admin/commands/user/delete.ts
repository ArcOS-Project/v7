import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminUserDelete: AdminCommandType = async (term, admin, argv) => {
  if (!admin.canAccess("admin.users.delete")) return 2;

  const [username] = argv;
  if (!username) return 5;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const result = await admin.deleteUser(username);

  return result ? 0 : 3;
};
