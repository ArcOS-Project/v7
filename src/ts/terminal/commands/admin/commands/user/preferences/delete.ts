import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { setJsonHierarchy } from "$ts/util/hierarchy";

export const AdminUserPreferencesDelete: AdminCommandType = async (term, admin, [username, path]) => {
  if (!admin.canAccess(AdminScopes.adminPreferencesGet, AdminScopes.adminPreferencesPut)) return 2;
  if (!username || !path) return 5;

  const preferences = await admin.getPreferencesOf(username);

  if (!preferences) return 3;

  setJsonHierarchy(preferences, path, undefined);

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const result = await admin.setPreferencesOf(username, preferences);

  return result ? 0 : 3;
};
