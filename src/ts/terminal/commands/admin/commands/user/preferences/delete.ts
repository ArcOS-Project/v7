import { setJsonHierarchy } from "$ts/hierarchy";
import type { AdminCommand } from "$ts/terminal/commands/admin";

export const AdminUserPreferencesDelete: AdminCommand = async (term, admin, [username, path]) => {
  if (!admin.canAccess("admin.preferences.get", "admin.preferences.put")) return 2;
  if (!username || !path) return 5;

  const preferences = await admin.getPreferencesOf(username);

  if (!preferences) return 3;

  setJsonHierarchy(preferences, path, undefined);

  console.log(preferences);

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const result = await admin.setPreferencesOf(username, preferences);

  return result ? 0 : 3;
};
