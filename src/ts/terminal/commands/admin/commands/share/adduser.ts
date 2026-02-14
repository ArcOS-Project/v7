import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminShareAdduser: AdminCommandType = async (term, admin, [shareId, username]) => {
  if (!admin.canAccess(AdminScopes.adminUsersList, AdminScopes.adminShareAddUser)) return 2;
  if (!shareId || !username) return 5;

  const user = await admin.getUserByUsername(username);
  if (!user) return 3;

  const result = await admin.addUserToShare(shareId, user._id.toString());
  return result ? 0 : 3;
};
