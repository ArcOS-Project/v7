import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminShareChown: AdminCommandType = async (term, admin, [shareId, newUsername]) => {
  if (!admin.canAccess(AdminScopes.adminUsersList, AdminScopes.adminShareChown)) return 2;
  if (!newUsername) return 5;

  const user = await admin.getUserByUsername(newUsername);

  if (!user) return 3;

  const changed = await admin.changeShareOwner(shareId, user._id.toString());

  return changed ? 0 : 3;
};
