import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { ExitAction } from "./types";

export const ExitActions: Record<string, ExitAction> = {
  restart: {
    action: (daemon: IUserDaemon) => daemon.power!.restart(),
    caption: "%exitActions.restart%",
    icon: "RestartIcon",
  },
  shutdown: {
    action: (daemon: IUserDaemon) => daemon.power!.shutdown(),
    caption: "%exitActions.shutdown%",
    icon: "ShutdownIcon",
  },
  logoff: {
    action: (daemon: IUserDaemon) => daemon.power!.logoff(),
    alternateAction: (daemon: IUserDaemon) => daemon.power!.logoffSafeMode(),
    alternateCaption: "Safe mode",
    caption: "%exitActions.logoff%",
    icon: "LogoutIcon",
  },
};
