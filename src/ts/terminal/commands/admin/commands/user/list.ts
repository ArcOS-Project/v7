import type { AdminCommand } from "$ts/terminal/commands/admin";
import { BRBLACK, BRPURPLE, BRRED, RESET } from "$ts/terminal/store";
import { maxLength } from "$ts/util";

export const AdminUserList: AdminCommand = async (term, admin) => {
  if (!admin.canAccess("admin.users.list")) return 2;

  const users = await admin.getAllUsers();

  const maxUsernameLength = maxLength(users.map((u) => u.username));
  const maxEmailLength = maxLength(users.map((u) => u.email));

  for (const user of users) {
    const username = user.username.padEnd(maxUsernameLength);
    const email = user.email.padEnd(maxEmailLength);

    term.rl?.println(
      `${BRBLACK}${user._id} ${BRPURPLE}${username}${BRBLACK} | ${RESET}${email}${BRBLACK} | ${RESET}${
        user.admin ? "Administrator" : "Regular user"
      }, ${user.approved ? "approved" : `${BRRED}pending${RESET}`}`
    );
  }

  return 0;
};
