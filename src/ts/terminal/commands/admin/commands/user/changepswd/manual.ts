import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminUserChangepswdManual: AdminCommandType = async (term, admin, argv) => {
  if (!admin.canAccess(AdminScopes.adminUsersList, AdminScopes.adminUsersChangePswd)) return 2;

  const [username] = argv;
  const users = await admin.getAllUsers();
  const user = users.filter((u) => u.username === username)[0];

  if (!user) return 3;

  const newPassword = await term.rl?.read("New password:");
  const confirmPassword = await term.rl?.read("Confirm new password:");
  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";

  if (!proceed) return 6;
  if (!newPassword || !confirmPassword) return 6;
  if (newPassword !== confirmPassword) return 7;

  const changed = await admin.changePasswordOf(username, newPassword);

  return changed ? 0 : 3;
};
