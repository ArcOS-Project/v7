import type { AdminCommand } from "$ts/terminal/commands/admin";
import { BRBLACK, BRGREEN, BRPURPLE, BRYELLOW, RESET } from "$ts/terminal/store";
import { maxLength } from "$ts/util";

export const AdminTotpGet: AdminCommand = async (term, admin, [username]) => {
  if (!admin.canAccess("admin.totp.get.user")) return 2;
  if (!username) return 5;

  const totp = await admin.getTotpOf(username);

  if (!totp) return 3;

  const maxKeyLength = maxLength(Object.keys(totp));

  for (const key in totp) {
    if (key.startsWith("_")) continue;
    const value =
      key === "activated" ? (totp[key] ? `${BRGREEN}Active${RESET}` : `${BRYELLOW}Pending activation${RESET}`) : totp[key];

    term.rl?.println(`${BRPURPLE}${(key === "activated" ? "status" : key).padEnd(maxKeyLength)}${BRBLACK}: ${RESET}${value}`);
  }

  return 0;
};
