import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import { tryJsonParse } from "$ts/util/json";
import type { AdminCommandType } from "$types/terminal";

export const AdminUserSystemSet: AdminCommandType = async (term, admin, argv) => {
  if (!admin.canAccess(AdminScopes.adminGod)) return 2;

  const [username, value] = argv;
  if (!username || argv.length < 2) return 5;

  const user = await admin.getUserByUsername(username);
  if (!user) return 3;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const result = await admin.setSystemFor(user._id, Boolean(tryJsonParse(value)));
  return result ? 0 : 3;
};
