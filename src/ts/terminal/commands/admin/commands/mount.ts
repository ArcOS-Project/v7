import type { AdminCommandType } from "../../admin";

export const AdminMount: AdminCommandType = async (term, admin, argv) => {
  if (
    !admin.canAccess(
      "admin.users.list",
      "admin.userfs.folder",
      "admin.userfs.file",
      "admin.userfs.direct",
      "admin.userfs.tree",
      "admin.userfs.quota"
    )
  )
    return 2;

  const [username, letter] = argv;

  if (!username) return 5;

  const users = (await admin.getAllUsers()).map((u) => u.username);

  if (!users.includes(username)) return 3;

  await admin.mountUserDrive(username, letter ? letter.toUpperCase() : undefined, (progress) => {
    term.rl?.println(`MOUNT ${username}: ${progress.value} / ${progress.max} (${progress.type})`);
  });

  return 0;
};
