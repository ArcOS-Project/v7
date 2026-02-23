import type { IUserDaemon } from "$interfaces/daemon";

export interface ExitAction {
  caption: string;
  action: (daemon: IUserDaemon) => void;
  alternateAction?: (daemon: IUserDaemon) => void; // Action upon submit w/ shift key
  alternateCaption?: string;
  icon: string;
}
