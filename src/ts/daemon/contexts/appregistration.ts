import type { IAppRegistrationUserContext } from "$interfaces/contexts/IAppRegistrationUserContext";
import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { IApplicationStorage } from "$interfaces/services/IApplicationStorage";
import type { IDistributionServiceProcess } from "$interfaces/services/IDistributionServiceProcess";
import { Daemon, Env, Fs, SysDispatch } from "$ts/env";
import { CommandResult } from "$ts/result";
import { AppGroups, DefaultAppData, UserPaths } from "$ts/user/store";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { MessageBox } from "$ts/util/dialog";
import { getParentDirectory, join } from "$ts/util/fs";
import { tryJsonParse, validateObject } from "$ts/util/json";
import type { App, AppStorage, InstalledApp } from "$types/apps/app";
import { LogLevel } from "$types/shared/logging";
import { UserContext } from "../context";

export class AppRegistrationUserContext extends UserContext implements IAppRegistrationUserContext {
  constructor(id: string, daemon: IUserDaemon) {
    super(id, daemon);
  }

  // Essential entrypoint: ApplicationStorage calls this method to obtain the list of installed user applications.
  async getUserApps(): Promise<ICommandResult<AppStorage>> {
    try {
      if (!Daemon!.preferences()) return CommandResult.Error("Can't get user applications without preferences");

      await this.moveUserAppsToFs();
      const bulk = Object.fromEntries(
        Object.entries((await Fs.bulk(UserPaths.AppRepository, "json")) || {}).map(([k, v]) => [k.replace(".json", ""), v])
      );

      const brokenApps = Object.entries(bulk)
        .filter(([_, v]) => !v || typeof v !== "object" || !validateObject(v, DefaultAppData))
        .map(([k]) => k);

      if (brokenApps.length) {
        this.Log(`AppRepository contains malformed data: ${brokenApps.join(", ")}`, LogLevel.warning);
      }

      return CommandResult.Ok(Object.values(bulk).filter((a) => typeof a === "object") as AppStorage);
    } catch (e) {
      return CommandResult.Error(`Failed to obtain user applications: ${e}`);
    }
  }

  async registerApp(data: InstalledApp): Promise<ICommandResult> {
    this.Log(`Registering ${data.id}: writing ${data.id}.json to AppRepository`);

    try {
      const appStore = this.appStorage();

      await Fs.writeFile(join(UserPaths.AppRepository, `${data.id}.json`), textToBlob(JSON.stringify(data, null, 2)));
      await appStore?.refresh();
      return await this.addToStartMenu(data.id);
    } catch (e) {
      return CommandResult.Error(`${e}`);
    }
  }

  async uninstallPackageWithStatus(id: string, deleteFiles = false): Promise<ICommandResult> {
    this.Log(`Attempting to uninstall app '${id}'`);

    try {
      const distrib = this.serviceHost?.getService<IDistributionServiceProcess>("DistribSvc");
      if (!distrib) return CommandResult.Error("The distribution service isn't running.");

      const prog = await Daemon!.helpers!.GlobalLoadIndicator();
      const uninstalled = await distrib.uninstallPackage(id, deleteFiles, (s) => prog.caption.set(s));
      if (!uninstalled) {
        return CommandResult.Error("Failed to uninstall the package. The package may not have been installed correctly.");
      }

      await prog.stop();

      return CommandResult.Ok();
    } catch (e) {
      return CommandResult.Error(`${e}`);
    }
  }

  async registerAppFromPath(path: string): Promise<ICommandResult> {
    try {
      const contents = await Fs.readFile(path);
      if (!contents) return CommandResult.Error("Failed to read file");

      const text = arrayBufferToText(contents);
      const json = tryJsonParse<InstalledApp>(text);

      if (typeof json !== "object") return CommandResult.Error("Failed to convert to JSON");
      if (!json.metadata || !json.entrypoint) return CommandResult.Error("Missing properties");

      (json as any).thirdParty = true;
      json.tpaPath = path;
      json.workingDirectory = getParentDirectory(path);

      return await this.registerApp(json);
    } catch (e) {
      this.Log(`Failed to install app from "${path}": ${e}`, LogLevel.error);
      return CommandResult.Error(`${e}`);
    }
  }

  async uninstallAppWithAck(app: App): Promise<ICommandResult> {
    return new Promise<ICommandResult>((resolve) => {
      MessageBox(
        {
          title: `${app.metadata.name}`,
          message: `Are you sure you want to uninstall this application? The application's files will also be deleted.`,
          image: "WarningIcon",
          sound: "arcos.dialog.warning",
          buttons: [
            {
              caption: "Cancel",
              action: () => {
                resolve(CommandResult.Ok());
              },
            },
            {
              caption: "Uninstall",
              action: () => {
                resolve(this.uninstallPackageWithStatus(app?.id, true));
              },
              suggested: true,
            },
          ],
        },
        +Env.get("shell_pid"),
        true
      );
    });
  }

  pinApp(appId: string): ICommandResult {
    this.Log(`Pinning ${appId}`);

    const appStore = this.serviceHost?.getService("AppStorage") as IApplicationStorage;
    const app = appStore?.getAppSynchronous(appId);

    if (!app) return CommandResult.Error("The application could not be found");

    Daemon!.preferences.update((v) => {
      if (v.pinnedApps.includes(appId)) return v;

      v.pinnedApps.push(appId);

      return v;
    });

    return CommandResult.Ok();
  }

  unpinApp(appId: string) {
    this.Log(`Unpinning ${appId}`);

    Daemon!.preferences.update((v) => {
      if (!v.pinnedApps.includes(appId)) return v;

      v.pinnedApps.splice(v.pinnedApps.indexOf(appId), 1);

      return v;
    });

    return CommandResult.Ok();
  }

  determineStartMenuShortcutPath(app: App) {
    if (!app) return undefined;

    return join(UserPaths.StartMenu, app.metadata.appGroup ? `$$${app.metadata.appGroup}` : "", `_${app.id}.arclnk`);
  }

  async addToStartMenu(appId: string): Promise<ICommandResult> {
    const app = this.appStorage()?.getAppSynchronous(appId);
    if (!app) return CommandResult.Error("The application could not be found");

    const path = this.determineStartMenuShortcutPath(app);
    if (!path) return CommandResult.Error("The shortcut path for the application could not be found");

    const existing = await Fs.stat(path);
    if (existing) return CommandResult.Error("The shortcut already exists");

    await Daemon!.shortcuts?.createShortcut(
      {
        type: "app",
        target: app.id,
        name: app.metadata.name,
        icon: `@app::${app.id}`,
      },
      path,
      false
    );

    SysDispatch.dispatch("startmenu-refresh");
    return CommandResult.Ok();
  }

  async removeFromStartMenu(appId: string): Promise<ICommandResult> {
    const app = this.appStorage()?.getAppSynchronous(appId);
    if (!app) return CommandResult.Error("The application could not be found");

    const path = this.determineStartMenuShortcutPath(app);
    if (!path) return CommandResult.Error("The shortcut path for the application could not be found");

    await Fs.deleteItem(path, false);
    SysDispatch.dispatch("startmenu-refresh");

    return CommandResult.Ok();
  }

  async updateStartMenuFolder(quiet = false): Promise<ICommandResult> {
    const installedApps = Daemon?.appStorage()?.buffer();
    if (!installedApps) return CommandResult.Error("The list of installed applications could not be obtained");

    try {
      const gli = quiet
        ? undefined
        : await Daemon!.helpers!.GlobalLoadIndicator("Updating the start menu...", +Env.get("shell_pid"), {
            max: Object.keys(AppGroups).length + installedApps.length,
            value: 0,
            useHtml: true,
          });

      for (const appGroup in AppGroups) {
        gli?.incrementProgress?.();
        gli?.caption.set(`Updating the start menu...<br>Creating folder for ${AppGroups[appGroup]}`);

        await Fs.createDirectory(join(UserPaths.StartMenu, `$$${appGroup}`), false);
      }

      const promises = [];

      for (const app of installedApps) {
        promises.push(
          new Promise(async (r) => {
            const registrationResult = await Daemon?.appreg?.addToStartMenu(app.id);

            if (registrationResult?.success) {
              gli?.caption.set(`Updating the start menu...<br>Created shortcut for ${app.metadata.name}`);
            } else {
              gli?.caption.set(
                `Updating the start menu...<br>${app.metadata.name} - Error: ${registrationResult?.errorMessage ?? "Unknown fault"}`
              );
            }

            gli?.incrementProgress?.();

            r(void 0);
          })
        );
      }

      await Promise.all(promises);

      SysDispatch.dispatch("startmenu-refresh");
      gli?.stop?.();

      return CommandResult.Ok();
    } catch (e) {
      return CommandResult.Error(`${e}`);
    }
  }

  /**
   * @deprecated Migration for ArcOS version 7.0.5, no longer in effect
   */
  async moveUserAppsToFs() {
    const apps = Daemon!.preferences().userApps;

    if (!Object.entries(apps).length) return;

    this.Log(`Migrating user apps to filesystem...`);

    for (const id in apps) {
      await Fs.writeFile(join(UserPaths.AppRepository, `${id}.json`), textToBlob(JSON.stringify(apps[id], null, 2)));
    }

    Daemon!.preferences.update((v) => {
      v.userApps = {};
      return v;
    });
  }
}
