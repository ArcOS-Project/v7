import type { AdminCommand } from "$ts/terminal/commands/admin";

export const AdminBugHuntReportClose: AdminCommand = async (term, admin, argv) => {
  if (!admin.canAccess("admin.bughunt.close")) return 2;

  const [id] = argv;

  if (!id) return 5;

  const proceed = (await term.rl?.read("Confirm change (y/n)? ")) === "y";
  if (!proceed) return 6;

  const closed = await admin.closeBugReport(id);

  return closed ? 0 : 3;
};
