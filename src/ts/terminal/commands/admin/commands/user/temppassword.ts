import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import { BRBLUE, RESET, YELLOW } from "$ts/terminal/colors";
import type { AdminCommandType } from "$types/terminal";

export const AdminUserTemppassword: AdminCommandType = async (term, admin, argv) => {
  if (!admin.canAccess(AdminScopes.adminTemporaryLogin)) return 2;

  const [username] = argv;
  if (!username) return 5;

  const proceed = (await term.rl?.read("Confirm action (y/n)? ")) === "y";
  if (!proceed) return 6;

  const user = await admin.getUserByUsername(username);
  if (!user) return 3;

  const result = await admin.createTemporaryLogin(user._id.toString());
  if (!result.success) return 3;

  term.rl?.println(
    `Password created.\n\n [ ${YELLOW}${result.result!.passwordValue}${RESET} ].\n\nPassword expires in ${BRBLUE}15 minutes${RESET}.`
  );
  return 0;
};
