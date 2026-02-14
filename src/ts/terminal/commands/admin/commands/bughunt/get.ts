import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { BOLD, BRGREEN, BRPURPLE, BRRED, RESET } from "$ts/terminal/store";
import { arrayToAsciiTable } from "$ts/util/terminal";
import dayjs from "dayjs";

export const AdminBugHuntReportGet: AdminCommandType = async (term, admin, [id]) => {
  if (!admin.canAccess(AdminScopes.adminBugHuntGet, AdminScopes.adminUsersList)) return 2;
  if (!id) return 5;

  const report = await admin.getBugReport(id);

  if (!report) return 3;

  const opened = report.closed ? `${BRRED}Closed${RESET}` : `${BRGREEN}Open${RESET}`;
  const api = `${report.api || "No server"}`;
  const frontend = `${report.frontend}`;
  const date = `${dayjs(report.createdAt).format("D MMM YYYY, HH:mm:ss")}${RESET}`;
  const user = `${report.userData?.username || "Stranger"}`;

  const table = arrayToAsciiTable([
    [`${BOLD}Who${RESET}`, user, report.authorId || "No ID"],
    [`${BOLD}Where${RESET}`, api, frontend],
    [`${BOLD}When${RESET}`, date, ""],
    [`${BOLD}Build${RESET}`, `${report.build} (${report.version})`, report.mode],
    [`${BOLD}Status${RESET}`, opened, ""],
  ]);

  term.rl?.println(`\r\nShowing report: ${BRGREEN}${report.title}${RESET}`);
  term.rl?.println(`${table}${BRPURPLE}Report Body:${RESET}\r\n${report.body}`);

  return 0;
};
