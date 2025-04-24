import { setJsonHierarchy } from "$ts/hierarchy";
import { tryJsonParse } from "$ts/json";
import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminUserPreferencesSet: AdminCommandType = async (term, admin, argv) => {
  if (!admin.canAccess("admin.preferences.get", "admin.preferences.put")) return 2;

  const [username, path, ...rest] = argv;

  if (!username || !path) return 5;

  const value = tryJsonParse(rest.join(" "));
  const preferences = await admin.getPreferencesOf(username);

  if (!preferences) return 3;

  setJsonHierarchy(preferences, path, value);

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const result = await admin.setPreferencesOf(username, preferences);

  return result ? 0 : 3;
};
