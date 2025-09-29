import type { UserDaemon } from "$ts/server/user/daemon";
import type { ExitAction } from "./types";

export const ExitActions: Record<string, ExitAction> = {
  restart: {
    action: (daemon: UserDaemon) => daemon.restart(),
    caption: "%exitActions.restart%",
    icon: "RestartIcon",
  },
  shutdown: {
    action: (daemon: UserDaemon) => daemon.shutdown(),
    caption: "%exitActions.shutdown%",
    icon: "ShutdownIcon",
  },
  logoff: {
    action: (daemon: UserDaemon) => daemon.logoff(),
    alternateAction: (daemon: UserDaemon) => daemon.logoffSafeMode(),
    caption: "%exitActions.logoff%",
    icon: "LogoutIcon",
  },
};
