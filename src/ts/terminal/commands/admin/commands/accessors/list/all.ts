import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { BRBLACK, BRPURPLE, RESET } from "$ts/terminal/store";
import { maxLength } from "$ts/util";

export const AdminAccessorsListAll: AdminCommandType = async (term, admin) => {
  if (!admin.canAccess("admin.accessors.get", "admin.users.list")) return 2;

  const accessors = await admin.getAllFsAccessors();
  const users = await admin.getAllUsers();

  if (!accessors.length || !users.length) return 1;

  const maxUsernameLength = maxLength(users.map((u) => u.username));

  for (const accessor of accessors) {
    const user = users.filter((u) => u._id === accessor.userId)[0];
    const username = (user.username || "Stranger").padEnd(maxUsernameLength);

    term.rl?.println(`${BRBLACK}${accessor._id}${RESET} ${BRPURPLE}${username}${RESET}: ${accessor.path}`);
  }

  return 0;
};
