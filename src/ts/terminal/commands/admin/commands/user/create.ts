import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { BRBLUE, RESET } from "$ts/terminal/store";
import { RegisterUser } from "$ts/user/auth";

export const AdminUserCreate: AdminCommandType = async (term, admin, argv) => {
  const generated = generate({
    length: 16,
    numbers: true,
    symbols: true,
  });
  const username = await term.rl?.read("Username: ");
  const email = await term.rl?.read("Email: ");
  const password = await term.rl?.println("Password: ");

  if (!username || !email || !password) return 6;

  term.rl?.println(`Creating ${BRBLUE}${username}${RESET} (${BRBLUE}${email}${RESET})`);
  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";

  if (!proceed) return 6;

  const registration = await RegisterUser(username, email, password);
  if (!registration) {
    term.Error("Failed to create the user.");
    return 3;
  }

  const approval = await admin.approveUser(username.toLowerCase().trim());
  if (!approval) {
    term.Error(`Failed to approve the user.`);
    return 3;
  }

  return 0;
};
