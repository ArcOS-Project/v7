import type { AdminCommand } from "$ts/terminal/commands/admin";

export const AdminShareDelete: AdminCommand = async (term, admin, [shareId]) => {
  if (!admin.canAccess("admin.share.delete")) return 2;
  if (!shareId) return 5;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const result = await admin.deleteShare(shareId);
  return result ? 0 : 3;
};
