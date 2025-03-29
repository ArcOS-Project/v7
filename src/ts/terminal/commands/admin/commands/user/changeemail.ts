import type { AdminCommand } from "$ts/terminal/commands/admin";

export const AdminUserChangeemail: AdminCommand = async (term, admin, argv) => {
  if (!admin.canAccess("admin.users.changeemail")) return 2;

  const [username, newEmail] = argv;
  if (!username || !newEmail) return 5;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const result = await admin.changeEmailOf(username, newEmail);

  return result ? 0 : 3;
};
