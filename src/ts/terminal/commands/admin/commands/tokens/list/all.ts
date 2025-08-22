import { AdminScopes } from "$ts/server/admin/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";

export const AdminTokensListAll: AdminCommandType = async (term, admin, argv) => {
  if (!admin.canAccess(AdminScopes.adminTokensGet, AdminScopes.adminTokensGet)) return 2;

  const [reveal] = argv;

  const tokens = await admin.getAllTokens();
  const users = await admin.getAllUsers();

  if (!tokens.length) return 1;

  for (const token of tokens) {
    const user = users.filter((u) => u._id === token.userId)[0];
    const username = (user?.username || "Stranger").padEnd(32, " ");

    term.rl?.println(`[${token._id}] ${username} | ${reveal ? token.value : `used ${token.timesUsed}x`}`);
  }

  return 0;
};
