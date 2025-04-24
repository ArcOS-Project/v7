import { formatBytes } from "$ts/fs/util";
import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { BRBLACK, BRPURPLE, RESET } from "$ts/terminal/store";
import { maxLength } from "$ts/util";

export const AdminIndexingListUser: AdminCommandType = async (term, admin, [username]) => {
  if (!admin.canAccess("admin.index.get.user")) return 2;
  if (!username) return 5;

  const indexings = (await admin.getIndexingNodesOf(username)).sort((a, b) => (a.type === "directory" ? -1 : 0));
  const user = await admin.getUserByUsername(username);

  if (!user || !indexings.length) return 1;

  const sizes = indexings.map((i) => (i.size ? formatBytes(i.size) : "-"));
  const types = indexings.map((i) => i.type);
  const maxSizeLength = maxLength(sizes);
  const maxTypeLength = maxLength(types);

  for (let i = 0; i < indexings.length; i++) {
    const node = indexings[i];
    const path = node.path.split(user._id)[1];
    const type = types[i].padEnd(maxTypeLength);
    const size = sizes[i].padEnd(maxSizeLength);

    term.rl?.println(`${BRBLACK}${node._id}${RESET} ${BRPURPLE}${type}${RESET} ${size} ${path}`);
  }

  return 0;
};
