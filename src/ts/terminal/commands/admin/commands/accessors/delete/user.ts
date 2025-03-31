import type { AdminCommand } from "$ts/terminal/commands/admin";

export const AdminAccessorsDeleteUser: AdminCommand = async (term, admin, [username]) => {
  if (!admin.canAccess("aadmin.accessors.delete.user")) return 2;
  if (!username) return 5;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const result = await admin.deleteFsAccessorsOf(username);

  return result ? 0 : 3;
};
