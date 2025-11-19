import type { UserDaemon } from "$ts/server/user/daemon";
import type { ExitAction } from "./types";

export const ExitActions: Record<string, ExitAction> = {
  restart: {
    action: (daemon: UserDaemon) => daemon.powerContext!.restart(),
    caption: "Restart",
    icon: "RestartIcon",
  },
  shutdown: {
    action: (daemon: UserDaemon) => daemon.powerContext!.shutdown(),
    caption: "Shut down",
    icon: "ShutdownIcon",
  },
  logoff: {
    action: (daemon: UserDaemon) => daemon.powerContext!.logoff(),
    alternateAction: (daemon: UserDaemon) => daemon.powerContext!.logoffSafeMode(),
    caption: "Log off",
    icon: "LogoutIcon",
  },
};
