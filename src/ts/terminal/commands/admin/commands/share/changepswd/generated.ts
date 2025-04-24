import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { generate } from "generate-password-ts";

export const AdminShareChangepswdGenerated: AdminCommandType = async (term, admin, [shareId]) => {
  if (!admin.canAccess("admin.share.changepswd")) return 2;
  if (!shareId) return 5;

  const generated = generate({
    length: 16,
    numbers: true,
    symbols: true,
  });

  term.rl?.println(`Generated password: ${generated}`);
  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";

  if (!proceed) return 6;

  const changed = await admin.changeSharePassword(shareId, generated);

  return changed ? 0 : 3;
};
