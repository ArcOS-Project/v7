import type { IUserDaemon } from "$interfaces/daemon";
import type { ExitAction } from "./types";

export const ExitActions: Record<string, ExitAction> = {
  restart: {
    action: (daemon: IUserDaemon) => daemon.power!.restart(),
    caption: "Restart",
    icon: "RestartIcon",
  },
  shutdown: {
    action: (daemon: IUserDaemon) => daemon.power!.shutdown(),
    caption: "Shut down",
    icon: "ShutdownIcon",
  },
  logoff: {
    action: (daemon: IUserDaemon) => daemon.power!.logoff(),
    alternateAction: (daemon: IUserDaemon) => daemon.power!.logoffSafeMode(),
    alternateCaption: "Safe mode",
    caption: "Log off",
    icon: "LogoutIcon",
  },
};
