import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { BRBLACK, BRPURPLE, RESET } from "$ts/terminal/store";
import { maxLength, Plural } from "$ts/util";
import { formatBytes } from "$ts/util/fs";

export const AdminShareListUser: AdminCommandType = async (term, admin, [username]) => {
  if (!admin.canAccess(AdminScopes.adminUsersList, AdminScopes.adminShareListUser)) return 2;
  if (!username) return 5;

  const user = await admin.getUserByUsername(username);

  if (!user) return 3;

  const shares = await admin.getSharesOf(user._id.toString());

  if (!shares.length) return 1;

  const maxShareNameLength = maxLength(shares.map((s) => s.shareName));
  const maxMaxSizeLength = maxLength(shares.map((s) => formatBytes(s.maxSize)));

  for (const share of shares) {
    const shareName = share.shareName.padEnd(maxShareNameLength);
    const maxSize = formatBytes(share.maxSize).padEnd(maxMaxSizeLength);

    term.rl?.println(
      `${BRBLACK}${share._id} ${BRPURPLE}${shareName}${RESET} - ${maxSize} - ${share.accessors.length} ${Plural(
        "member",
        share.accessors.length
      )}`
    );
  }

  return 0;
};
