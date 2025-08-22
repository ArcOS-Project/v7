import type { UserDaemon } from "$ts/server/user/daemon";

export interface ExitAction {
  caption: string;
  action: (daemon: UserDaemon) => void;
  alternateAction?: (daemon: UserDaemon) => void; // Action upon submit w/ shift key
  icon: string;
}
