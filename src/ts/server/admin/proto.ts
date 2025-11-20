import { Env } from "$ts/env";
import type { ProtocolHandler } from "$types/proto";

export const AdminProtocolHandlers: Record<string, ProtocolHandler> = {
  admin_bugrep: {
    name: "Open bug report",
    info: (params) => {
      return {
        title: params.id,
        caption: "Open bug report",
        icon: "ElevationIcon",
      };
    },
    action: async (payload, daemon) => {
      return !!(await daemon.spawn!.spawnApp("AdminPortal", +Env().get("shell_pid"), "viewBugReport", { id: payload.id }));
    },
  },
};
