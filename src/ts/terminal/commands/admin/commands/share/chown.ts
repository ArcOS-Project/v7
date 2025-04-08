import type { AdminCommand } from "$ts/terminal/commands/admin";

export const AdminShareChown: AdminCommand = async (term, admin, [shareId, newUsername]) => {
  if (!admin.canAccess("admin.users.list", "admin.share.chown")) return 2;
  if (!newUsername) return 5;

  const user = await admin.getUserByUsername(newUsername);

  if (!user) return 3;

  const changed = await admin.changeShareOwner(shareId, user._id.toString());

  return changed ? 0 : 3;
};
