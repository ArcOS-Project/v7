import type { IUserContext } from "$interfaces/daemon";
import type { IApplicationStorage } from "$interfaces/service";
import type { App, AppStorage, InstalledApp } from "$types/app";

export interface IAppRegistrationUserContext extends IUserContext {
  initAppStorage(storage: IApplicationStorage, cb: (app: App) => void): Promise<void>;
  getUserApps(): Promise<AppStorage>;
  registerApp(data: InstalledApp): Promise<void>;
  uninstallPackageWithStatus(id: string, deleteFiles?: boolean): Promise<boolean>;
  registerAppFromPath(
    path: string
  ): Promise<"failed to read file" | "failed to convert to JSON" | "missing properties" | undefined>;
  uninstallAppWithAck(app: App): Promise<boolean>;
  pinApp(appId: string): Promise<void>;
  unpinApp(appId: string): void;
  determineStartMenuShortcutPath(app: App): string | undefined;
  addToStartMenu(appId: string): Promise<void>;
  removeFromStartMenu(appId: string): Promise<void>;
  updateStartMenuFolder(quiet?: boolean): Promise<void>;
  modeUserAppsToFs(): Promise<void>;
}
