import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminActivitiesDeleteUser: AdminCommandType = async (term, admin, [username]) => {
  if (!admin.canAccess("admin.activities.delete.user")) return 2;
  if (!username) return 5;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const result = await admin.deleteActivitiesOf(username);

  return result ? 0 : 3;
};
