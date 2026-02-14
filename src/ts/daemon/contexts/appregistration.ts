import type { IAppRegistrationUserContext } from "$interfaces/contexts/appreg";
import type { IUserDaemon } from "$interfaces/daemon";
import { BuiltinAppImportPathAbsolutes } from "$ts/apps/store";
import { ArcOSVersion, Env, Fs, SysDispatch } from "$ts/env";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { Permissions } from "$ts/permissions";
import type { ApplicationStorage } from "$ts/servicehost/services/AppStorage";
import type { DistributionServiceProcess } from "$ts/servicehost/services/DistribSvc";
import { AppGroups, UserPaths } from "$ts/user/store";
import { deepCopyWithBlobs } from "$ts/util";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { MessageBox } from "$ts/util/dialog";
import { getParentDirectory, join } from "$ts/util/fs";
import { tryJsonParse } from "$ts/util/json";
import { compareVersion } from "$ts/util/version";
import type { App, AppStorage, InstalledApp } from "$types/app";
import { LogLevel } from "$types/logging";
import { Daemon } from "..";
import { UserContext } from "../context";

export class AppRegistrationUserContext extends UserContext implements IAppRegistrationUserContext {
  constructor(id: string, daemon: IUserDaemon) {
    super(id, daemon);
  }

  async initAppStorage(storage: ApplicationStorage, cb: (app: App) => void) {
    this.Log(`Now trying to load built-in applications...`);

    const blocklist = Daemon!.preferences()._internalImportBlocklist || [];

    const builtins: App[] = await Promise.all(
      Object.keys(BuiltinAppImportPathAbsolutes).map(async (path) => {
        if (!this.safeMode && blocklist.includes(path)) return null;
        const regex = new RegExp(/import\(\"(?<path>.*?)\"\)/gm);

        try {
          const start = performance.now();
          const fn = BuiltinAppImportPathAbsolutes[path];
          const mod = await BuiltinAppImportPathAbsolutes[path]();
          const app = (mod as any).default as App;
          const originalPathRegexp = regex.exec(fn.toString());
          const originalPath = originalPathRegexp?.groups?.path;

          if (app._internalMinVer && compareVersion(ArcOSVersion, app._internalMinVer) === "higher")
            throw `Not loading ${app.metadata.name} because this app requires a newer version of ArcOS`;

          if (app._internalSysVer || app._internalOriginalPath)
            throw `Can't load dubious built-in app '${app.id}' because it contains runtime-level properties set before runtime`;

          const end = performance.now() - start;
          const appCopy = await deepCopyWithBlobs<App>(app);

          appCopy._internalSysVer = `v${ArcOSVersion}-${ArcMode()}_${ArcBuild()}`;
          appCopy._internalOriginalPath = path;
          appCopy._internalLoadTime = end;
          if (originalPath) appCopy._internalResolvedPath = originalPath;

          cb(appCopy);
          this.Log(
            `Loaded app: ${path}: ${appCopy.metadata.name} by ${appCopy.metadata.author}, version ${app.metadata.version} (${end.toFixed(2)}ms)`
          );

          return appCopy;
        } catch (e) {
          await new Promise<void>((r) => {
            MessageBox(
              {
                title: "App load error",
                message: `ArcOS failed to load a built-in app because of an error. ${e}.`,
                buttons: [{ caption: "Okay", action: () => r(), suggested: true }],
                image: "WarningIcon",
              },
              +Env.get("loginapp_pid"),
              true
            );
          });
          this.Log(`Failed to load app ${path}: ${e}`);
          return null;
        }
      })
    ).then((apps) => apps.filter((a): a is App => a !== null));

    storage.loadOrigin("builtin", () => builtins);
    storage.loadOrigin("userApps", async () => await this.getUserApps());
    await storage.refresh();
  }

  async getUserApps(): Promise<AppStorage> {
    try {
      if (!Daemon!.preferences()) return [];

      await this.modeUserAppsToFs();

      const bulk = Object.fromEntries(
        Object.entries((await Fs.bulk(UserPaths.AppRepository, "json")) || {}).map(([k, v]) => [k.replace(".json", ""), v])
      );

      return Object.values(bulk) as AppStorage;
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
          title: "Uninstall app?",
          message: `You're about to uninstall "${app?.metadata?.name || "Unknown"}" by ${
            app?.metadata?.author || "nobody"
          }. Do you want to just uninstall it, or do you want to delete its files also?`,
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
              caption: "Delete",
              action: () => {
                this.uninstallPackageWithStatus(app?.id, true);
                r(true);
              },
            },
            {
              caption: "Just uninstall",
              action: () => {
                this.uninstallPackageWithStatus(app?.id, false);
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
