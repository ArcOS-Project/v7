import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminShareChangepswdManual: AdminCommandType = async (term, admin, [shareId]) => {
  if (!admin.canAccess("admin.share.changepswd")) return 2;
  if (!shareId) return 5;

  const newPassword = await term.rl?.read("New password:");
  const confirmPassword = await term.rl?.read("Confirm new password:");
  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";

  if (!proceed) return 6;
  if (!newPassword || !confirmPassword) return 6;
  if (newPassword !== confirmPassword) return 7;

  const changed = await admin.changeSharePassword(shareId, newPassword);

  return changed ? 0 : 3;
};
