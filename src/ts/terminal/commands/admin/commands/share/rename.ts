import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminShareRename: AdminCommandType = async (term, admin, [shareId]) => {
  if (!admin.canAccess(AdminScopes.adminShareRename)) return 2;
  if (!shareId) return 5;

  const shareName = await term.rl?.read("New share name:");
  const confirmShareName = await term.rl?.read("Confirm new share name:");
  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";

  if (!proceed) return 6;
  if (!shareName || !confirmShareName) return 6;
  if (shareName !== confirmShareName) return 7;

  const changed = await admin.renameShare(shareId, shareName);

  return changed ? 0 : 3;
};
