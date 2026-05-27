import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { MaybePromise } from "../shared/common";
import type { UserInfo } from "../user";

// !tpa
export type UserDaemonInitCallback = (daemon: IUserDaemon, broadcast: (m: string) => void) => MaybePromise<void>;
export type UserDaemonInitStage =
  | "filesystem"
  | "preferencesSync"
  | "notifyLogin"
  | "serviceHost"
  | "firstRun"
  | "driveNotifierWatcher"
  | "indexing"
  | "statusRefresh"
  | "letsGo"
  | "workspaces"
  | "autorun";
export type UserDaemonInitStagesSelection = Partial<UserDaemonInitStage[]>;
export type UserDaemonInitCallbacks = Partial<Record<UserDaemonInitStage, UserDaemonInitCallback>>;

export interface UserDaemonStartOptions {
  startStages: UserDaemonInitStagesSelection;
  stageCallbacks: UserDaemonInitCallbacks;
  onUserInfo: (info: UserInfo) => MaybePromise<ICommandResult>;
}
// !endtpa
