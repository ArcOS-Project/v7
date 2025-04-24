import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { BRBLACK, BRPURPLE, RESET } from "$ts/terminal/store";
import { maxLength } from "$ts/util";

export const AdminIndexingListAll: AdminCommandType = async (term, admin) => {
  if (!admin.canAccess("admin.index.get", "admin.users.list")) return 2;

  const indexings = (await admin.getAllIndexingNodes()).sort((a, b) => (a.type === "directory" ? -1 : 0));
  const users = await admin.getAllUsers();

  if (!indexings.length || !users.length) return 1;

  const types = indexings.map((i) => i.type);
  const maxTypeLength = maxLength(types);
  const maxUsernameLength = maxLength(users.map((u) => u.username));

  for (let i = 0; i < indexings.length; i++) {
    const node = indexings[i];
    const user = users.filter((u) => u._id === node.userId)[0];
    const username = (user?.username || "?").padEnd(maxUsernameLength);
    const type = types[i].padEnd(maxTypeLength);

    term.rl?.println(`${BRBLACK}${node._id} ${BRPURPLE}${username}${RESET} ${type} ${node.path.split(user._id)[1]}`);
  }

  return 0;
};
