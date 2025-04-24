import { getJsonHierarchy } from "$ts/hierarchy";
import { tryJsonStringify } from "$ts/json";
import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminUserPreferencesGet: AdminCommandType = async (term, admin, argv) => {
  if (!admin.canAccess("admin.preferences.get")) return 2;

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
