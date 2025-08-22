import { LogoutIcon, RestartIcon, ShutdownIcon } from "$ts/images/power";
import type { UserDaemon } from "$ts/server/user/daemon";
import type { ExitAction } from "./types";

export const ExitActions: Record<string, ExitAction> = {
  restart: {
    action: (daemon: UserDaemon) => daemon.restart(),
    caption: "Restart",
    icon: RestartIcon,
  },
  shutdown: {
    action: (daemon: UserDaemon) => daemon.shutdown(),
    caption: "Shut down",
    icon: ShutdownIcon,
  },
  logoff: {
    action: (daemon: UserDaemon) => daemon.logoff(),
    alternateAction: (daemon: UserDaemon) => daemon.logoffSafeMode(),
    caption: "Log off",
    icon: LogoutIcon,
  },
};
