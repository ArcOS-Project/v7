import type { AdminCommand } from "$ts/terminal/commands/admin";

export const AdminBugHuntReportOpen: AdminCommand = async (term, admin, argv) => {
  if (!admin.canAccess("admin.bughunt.open")) return 2;

  const [id] = argv;

  if (!id) return 5;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const opened = await admin.reopenBugReport(id);

  return opened ? 0 : 3;
};
