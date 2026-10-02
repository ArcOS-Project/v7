import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IUserContext } from "$interfaces/IUserDaemon";
import type { App, AppStorage, InstalledApp } from "$types/apps/app";

// !tpa
export interface IAppRegistrationUserContext extends IUserContext {
  getUserApps(): Promise<ICommandResult<AppStorage>>;
  registerApp(data: InstalledApp): Promise<ICommandResult>;
  uninstallPackageWithStatus(id: string, deleteFiles?: boolean): Promise<ICommandResult>;
  registerAppFromPath(path: string): Promise<ICommandResult>;
  uninstallAppWithAck(app: App): Promise<ICommandResult>;
  pinApp(appId: string): ICommandResult;
  unpinApp(appId: string): void;
  determineStartMenuShortcutPath(app: App): string | undefined;
  addToStartMenu(appId: string): Promise<ICommandResult>;
  removeFromStartMenu(appId: string): Promise<ICommandResult>;
  updateStartMenuFolder(quiet?: boolean): Promise<ICommandResult>;
  /**
   * @deprecated
   */
  moveUserAppsToFs(): Promise<void>;
}
// !endtpa
