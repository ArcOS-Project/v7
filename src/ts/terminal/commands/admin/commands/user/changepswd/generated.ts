import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { generate } from "generate-password-ts";

export const AdminUserChangepswdGenerated: AdminCommandType = async (term, admin, argv) => {
  if (!admin.canAccess("admin.users.list", "admin.users.changepswd")) return 2;

  const [username] = argv;
  const users = await admin.getAllUsers();
  const user = users.filter((u) => u.username === username)[0];

  if (!user) return 3;

  const generated = generate({
    length: 16,
    numbers: true,
    symbols: true,
  });

  term.rl?.println(`Generated password: ${generated}`);
  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";

  if (!proceed) return 6;

  const changed = await admin.changePasswordOf(username, generated);

  return changed ? 0 : 3;
};
