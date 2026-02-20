import type { IAppRegistrationUserContext } from "$interfaces/contexts/appreg";
import type { IUserDaemon } from "$interfaces/daemon";
import { Env, Fs, SysDispatch } from "$ts/env";
import { Permissions } from "$ts/permissions";
import type { ApplicationStorage } from "$ts/servicehost/services/AppStorage";
import type { DistributionServiceProcess } from "$ts/servicehost/services/DistribSvc";
import { AppGroups, DefaultAppData, UserPaths } from "$ts/user/store";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { MessageBox } from "$ts/util/dialog";
import { getParentDirectory, join } from "$ts/util/fs";
import { tryJsonParse, validateObject } from "$ts/util/json";
import type { App, AppStorage, InstalledApp } from "$types/app";
import { LogLevel } from "$types/logging";
import { Daemon } from "..";
import { UserContext } from "../context";

export class AppRegistrationUserContext extends UserContext implements IAppRegistrationUserContext {
  constructor(id: string, daemon: IUserDaemon) {
    super(id, daemon);
  }

  async getUserApps(): Promise<AppStorage> {
    try {
      if (!Daemon!.preferences()) return [];

      await this.modeUserAppsToFs();

      const bulk = Object.fromEntries(
        Object.entries((await Fs.bulk(UserPaths.AppRepository, "json")) || {}).map(([k, v]) => [k.replace(".json", ""), v])
      );

      const brokenApps = Object.entries(bulk)
        .filter(([_, v]) => !v || typeof v !== "object" || !validateObject(v, DefaultAppData))
        .map(([k]) => k);

      if (brokenApps.length) {
        this.Log(`AppRepository contains malformed data: ${brokenApps.join(", ")}`, LogLevel.warning);
      }

      return Object.values(bulk).filter((a) => typeof a === "object") as AppStorage;
    } catch {
      return [];
    }
  }

  async registerApp(data: InstalledApp) {
    this.Log(`Registering ${data.id}: writing ${data.id}.json to AppRepository`);
    const appStore = this.appStorage();

    await Fs.writeFile(join(UserPaths.AppRepository, `${data.id}.json`), textToBlob(JSON.stringify(data, null, 2)));
    await appStore?.refresh();
    await this.addToStartMenu(data.id);
  }

  async uninstallPackageWithStatus(id: string, deleteFiles = false) {
    this.Log(`Attempting to uninstall app '${id}'`);
    const distrib = this.serviceHost?.getService<DistributionServiceProcess>("DistribSvc");

    Permissions.removeApplication(id);

    if (!distrib) return false;

    const prog = await Daemon!.helpers!.GlobalLoadIndicator();
    const result = await distrib.uninstallPackage(id, deleteFiles, (s) => prog.caption.set(s));

    await prog.stop();

    return result;
  }

  async registerAppFromPath(path: string) {
    try {
      const contents = await Fs.readFile(path);
      if (!contents) return "failed to read file";

      const text = arrayBufferToText(contents);
      const json = tryJsonParse<InstalledApp>(text);

      if (typeof json !== "object") return "failed to convert to JSON";

      if (!json.metadata || !json.entrypoint) return "missing properties";

      (json as any).thirdParty = true;
      json.tpaPath = path;
      json.workingDirectory = getParentDirectory(path);

      await this.registerApp(json);
    } catch (e) {
      this.Log(`Failed to install app from "${path}": ${e}`, LogLevel.error);
    }
  }

  async uninstallAppWithAck(app: App): Promise<boolean> {
    return new Promise<boolean>((r) => {
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
                r(false);
              },
            },
            {
              caption: "Uninstall",
              action: () => {
                this.uninstallPackageWithStatus(app?.id, true);
                r(true);
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

  async pinApp(appId: string) {
    this.Log(`Pinning ${appId}`);

    const appStore = this.serviceHost?.getService("AppStorage") as ApplicationStorage;
    const app = appStore?.getAppSynchronous(appId);

    if (!app) return;

    Daemon!.preferences.update((v) => {
      if (v.pinnedApps.includes(appId)) return v;

      v.pinnedApps.push(appId);

      return v;
    });
  }

  unpinApp(appId: string) {
    this.Log(`Unpinning ${appId}`);

    Daemon!.preferences.update((v) => {
      if (!v.pinnedApps.includes(appId)) return v;

      v.pinnedApps.splice(v.pinnedApps.indexOf(appId), 1);

      return v;
    });
  }

  determineStartMenuShortcutPath(app: App) {
    if (!app) return undefined;

    return join(UserPaths.StartMenu, app.metadata.appGroup ? `$$${app.metadata.appGroup}` : "", `_${app.id}.arclnk`);
  }

  async addToStartMenu(appId: string) {
    const app = this.appStorage()?.getAppSynchronous(appId);
    if (!app) return;

    const path = this.determineStartMenuShortcutPath(app);
    if (!path) return;

    const existing = await Fs.stat(path);
    if (existing) return;

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
  }

  async removeFromStartMenu(appId: string) {
    const app = this.appStorage()?.getAppSynchronous(appId);
    if (!app) return;

    const path = this.determineStartMenuShortcutPath(app);
    if (!path) return;

    await Fs.deleteItem(path, false);
    SysDispatch.dispatch("startmenu-refresh");
  }

  async updateStartMenuFolder(quiet = false) {
    const installedApps = Daemon?.appStorage()?.buffer();

    if (!installedApps) return;

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
          await Daemon?.appreg?.addToStartMenu(app.id);

          gli?.caption.set(`Updating the start menu...<br>Created shortcut for ${app.metadata.name}`);

          gli?.incrementProgress?.();

          r(void 0);
        })
      );
    }

    await Promise.all(promises);

    SysDispatch.dispatch("startmenu-refresh");
    gli?.stop?.();
  }

  async modeUserAppsToFs() {
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
