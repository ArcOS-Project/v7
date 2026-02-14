import { getJsonHierarchy } from "$ts/util/hierarchy";
import { tryJsonStringify } from "$ts/util/json";
import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminUserPreferencesGet: AdminCommandType = async (term, admin, argv) => {
  if (!admin.canAccess(AdminScopes.adminPreferencesGet)) return 2;

  const [username, path] = argv;

  if (!username) return 5;

  const preferences = await admin.getPreferencesOf(username);

  if (!preferences) return 1;

  if (path) {
    const value = getJsonHierarchy(preferences, path);

    term.rl?.println(tryJsonStringify(value, 2));
  } else {
    term.rl?.println(tryJsonStringify(preferences, 2));
  }

  return 0;
};
