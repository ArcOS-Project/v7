import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { BRBLACK, RESET } from "$ts/terminal/store";

export const AdminShareAccessorsList: AdminCommandType = async (term, admin, [shareId]) => {
  if (!admin.canAccess("admin.share.accessors.get")) return 2;
  if (!shareId) return 5;

  const accessors = await admin.getShareAccessors(shareId);

  if (!accessors.length) return 1;

  for (const accessor of accessors) {
    term.rl?.println(`${BRBLACK}${accessor._id}${RESET} ${accessor.path}`);
  }

  return 0;
};
