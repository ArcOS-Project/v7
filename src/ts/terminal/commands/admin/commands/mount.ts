import type { AdminCommand } from "../../admin";

export const AdminMount: AdminCommand = async (term, admin, argv) => {
  if (
    !admin.canAccess("admin.userfs.folder", "admin.userfs.file", "admin.userfs.direct", "admin.userfs.tree", "admin.userfs.quota")
  )
    return 2;

  const [username, letter] = argv;

  if (!username) return 5;

  await admin.mountUserDrive(username, letter, (progress) => {
    term.rl?.println(`MOUNT ${username}: ${progress.value} / ${progress.max} (${progress.type})`);
  });

  return 0;
};
