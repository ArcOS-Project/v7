import { AdminScopes } from "$ts/server/admin/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { BRBLACK, BRPURPLE, RESET } from "$ts/terminal/store";
import { maxLength } from "$ts/util";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(RelativeTime);

export const AdminAccessorsListUser: AdminCommandType = async (term, admin, [username]) => {
  if (!admin.canAccess(AdminScopes.adminAccessorsGetUser)) return 2;
  if (!username) return 5;

  const accessors = await admin.getFsAccessorsOf(username);
  const expiries = accessors.map((a) => dayjs(a.createdAt).add(24, "hours").fromNow());
  const maxExpireLength = maxLength(expiries);

  if (!accessors.length) return 3;

  for (let i = 0; i < accessors.length; i++) {
    const accessor = accessors[i];
    const expires = expiries[i].padEnd(maxExpireLength);

    term.rl?.println(`${BRBLACK}${accessor._id}${RESET} ${BRPURPLE}Expires ${expires}${RESET} - ${accessor.path}`);
  }

  return 0;
};
