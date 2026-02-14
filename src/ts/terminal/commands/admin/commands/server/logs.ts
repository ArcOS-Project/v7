import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";
import dayjs from "dayjs";

export const AdminServerLogs: AdminCommandType = async (term, admin) => {
  if (!admin.canAccess(AdminScopes.adminLogs)) return 2;

  const logs = await admin.getServerLogs();

  if (!logs.length) return 1;

  for (const log of logs) {
    term.rl?.println(`[${dayjs(log.timestamp).format("DD-MM-YYYY HH:mm:ss")}] ${log.subs.join(":")}: ${log.message}`);
  }

  return 0;
};
