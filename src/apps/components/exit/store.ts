import type { UserDaemon } from "$ts/server/user/daemon";
import type { ExitAction } from "./types";

export const ExitActions: Record<string, ExitAction> = {
  restart: {
    action: (daemon: UserDaemon) => daemon.power!.restart(),
    caption: "Restart",
    icon: "RestartIcon",
  },
  shutdown: {
    action: (daemon: UserDaemon) => daemon.power!.shutdown(),
    caption: "Shut down",
    icon: "ShutdownIcon",
  },
  logoff: {
    action: (daemon: UserDaemon) => daemon.power!.logoff(),
    alternateAction: (daemon: UserDaemon) => daemon.power!.logoffSafeMode(),
    alternateCaption: "Safe mode",
    caption: "Log off",
    icon: "LogoutIcon",
  },
};
