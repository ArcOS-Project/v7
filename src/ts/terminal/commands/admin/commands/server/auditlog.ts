import { AdminScopes } from "$ts/server/admin/store";
import type { AdminCommandType } from "$ts/terminal/commands/admin";
import { AuditSeverity } from "$types/admin";
import dayjs from "dayjs";

export const AdminServerAuditlog: AdminCommandType = async (term, admin) => {
  if (!admin.canAccess(AdminScopes.adminLogs, AdminScopes.adminUsersList)) return 2;

  const logs = await admin.getAuditLog();
  const users = await admin.getAllUsers();

  if (!users || !logs?.length) return 1;

  for (const audit of logs) {
    const author =
      audit.authorId === "SERVER" ? "The server -" : users.filter((u) => u._id === audit.authorId)[0]?.username || "Unknown";
    const target = audit.targetUserId ? users.filter((u) => u._id === audit.targetUserId)[0]?.username || "" : "";

    term.rl?.println(
      `[${dayjs(audit.createdAt).format("DD-MM-YYYY HH:mm:ss")}] ${AuditSeverity[audit.severity]}: ${author} ${
        audit.message
      } ${target}`
    );
  }

  return 0;
};
