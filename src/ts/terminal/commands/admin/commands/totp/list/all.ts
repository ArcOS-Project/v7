import { AdminScopes } from "$ts/server/admin/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { BRBLACK, BRGREEN, BRPURPLE, BRYELLOW, RESET } from "$ts/terminal/store";
import { maxLength } from "$ts/util";

export const AdminTotpListAll: AdminCommandType = async (term, admin) => {
  if (!admin.canAccess(AdminScopes.adminTotpGet, AdminScopes.adminUsersList)) return 2;

  const totps = await admin.getAllTotp();
  const users = await admin.getAllUsers();
  const maxUsernameLength = maxLength(users.map((u) => u.username));

  if (!users.length || !totps.length) return 1;

  for (const totp of totps) {
    const user = users.filter((u) => u._id === totp.userId)[0];
    const username = (user?.username || "Stranger").padEnd(maxUsernameLength);
    const status = totp.activated ? `${BRGREEN}Active${RESET}` : `${BRYELLOW}Pending activation${RESET}`;

    term.rl?.println(`${BRBLACK}${totp._id} ${BRPURPLE}${username}${status}`);
  }

  return 0;
};
