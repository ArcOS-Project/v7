import { formatBytes } from "$ts/kernel/mods/fs/util";
import { AdminScopes } from "$ts/server/admin/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { BRBLACK, BRPURPLE, RESET } from "$ts/terminal/store";
import { maxLength, Plural } from "$ts/util";

export const AdminShareListAll: AdminCommandType = async (term, admin) => {
  if (!admin.canAccess(AdminScopes.adminShareList)) return 2;

  const shares = await admin.getAllShares();
  const users = await admin.getAllUsers();

  const maxUsernameLength = maxLength(users.map((u) => u.username));
  const maxShareNameLength = maxLength(shares.map((s) => s.shareName));
  const maxMaxSizeLength = maxLength(shares.map((s) => formatBytes(s.maxSize)));

  for (const share of shares) {
    const user = users.filter((u) => u._id === share.userId)[0];
    const username = (user?.username || "Stranger").padEnd(maxUsernameLength);
    const shareName = share.shareName.padEnd(maxShareNameLength);
    const maxSize = formatBytes(share.maxSize).padEnd(maxMaxSizeLength);

    term.rl?.println(
      `${BRBLACK}${share._id}${RESET} ${username} ${BRPURPLE}${shareName}${RESET} - ${maxSize} - ${
        share.accessors.length
      } ${Plural("member", share.accessors.length)}`
    );
  }

  return 0;
};
