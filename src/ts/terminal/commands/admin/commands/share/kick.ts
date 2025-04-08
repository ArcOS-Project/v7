import type { AdminCommand } from "$ts/terminal/commands/admin";

export const AdminShareKick: AdminCommand = async (term, admin, [shareId, username]) => {
  if (!admin.canAccess("admin.users.list", "admin.share.kick")) return 2;
  if (!shareId || !username) return 5;

  const user = await admin.getUserByUsername(username);
  if (!user) return 3;

  const result = await admin.kickUserFromShare(shareId, user._id.toString());
  return result ? 0 : 3;
};
