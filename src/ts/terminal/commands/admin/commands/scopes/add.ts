import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminScopesAdd: AdminCommandType = async (term, admin, argv) => {
  if (!admin.canAccess("admin.scopes.put", "admin.scopes.available", "admin.scopes.get")) return 2;

  const [username, newScope] = argv;

  if (!username || !newScope) return 5;

  const available = Object.values((await admin.getAvailableScopes()) || {});
  const scopes = await admin.getScopesOf(username);

  if (!scopes) return 1;
  if (!available.includes(newScope)) return 3;

  scopes.push(newScope);

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const result = await admin.setScopesOf(username, scopes);

  return result ? 0 : 3;
};
