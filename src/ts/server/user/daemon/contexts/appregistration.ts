import type { ApplicationStorage } from "$ts/apps/storage";
import { BuiltinAppImportPathAbsolutes } from "$ts/apps/store";
import { MessageBox } from "$ts/dialog";
import type { DistributionServiceProcess } from "$ts/distrib";
import { ArcOSVersion, Env, Fs, KernelDispatchS } from "$ts/env";
import { tryJsonParse } from "$ts/json";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { deepCopyWithBlobs } from "$ts/util";
import { arrayToText, textToBlob } from "$ts/util/convert";
import { getParentDirectory, join } from "$ts/util/fs";
import { compareVersion } from "$ts/version";
import type { App, AppStorage, InstalledApp } from "$types/app";
import { LogLevel } from "$types/logging";
import { Daemon, UserDaemon } from "..";
import { AppGroups, UserPaths } from "../../store";
import { UserContext } from "../context";

export class AppRegistrationUserContext extends UserContext {
  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  async initAppStorage(storage: ApplicationStorage, cb: (app: App) => void) {
    this.Log(`Now trying to load built-in applications...`);

    const blocklist = Daemon()!.preferences()._internalImportBlocklist || [];

    const builtins: App[] = await Promise.all(
      Object.keys(BuiltinAppImportPathAbsolutes).map(async (path) => {
        if (!this.safeMode && blocklist.includes(path)) return null;
        try {
          const start = performance.now();
          const mod = await BuiltinAppImportPathAbsolutes[path]();
          const app = (mod as any).default as App;

          if (app._internalMinVer && compareVersion(ArcOSVersion, app._internalMinVer) === "higher")
            throw `Not loading ${app.metadata.name} because this app requires a newer version of ArcOS`;

          if (app._internalSysVer || app._internalOriginalPath)
            throw `Can't load dubious built-in app '${app.id}' because it contains runtime-level properties set before runtime`;

          const end = performance.now() - start;
          const appCopy = await deepCopyWithBlobs<App>(app);

          appCopy._internalSysVer = `v${ArcOSVersion}-${ArcMode()}_${ArcBuild()}`;
          appCopy._internalOriginalPath = path;
          appCopy._internalLoadTime = end;

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
              +Env().get("loginapp_pid"),
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
    if (!Daemon()!.preferences()) return [];

    await Daemon()!.migrations!.migrateUserAppsToFs();

    const bulk = Object.fromEntries(
      Object.entries(await Fs().bulk(UserPaths.AppRepository, "json")).map(([k, v]) => [k.replace(".json", ""), v])
    );

    return Object.values(bulk) as AppStorage;
  }

  async registerApp(data: InstalledApp) {
    this.Log(`Registering ${data.id}: writing ${data.id}.json to AppRepository`);
    const appStore = this.appStorage();

    await Fs().writeFile(join(UserPaths.AppRepository, `${data.id}.json`), textToBlob(JSON.stringify(data, null, 2)));
    await appStore?.refresh();
    await this.addToStartMenu(data.id);
  }

  async uninstallPackageWithStatus(id: string, deleteFiles = false) {
    this.Log(`Attempting to uninstall app '${id}'`);
    const distrib = this.serviceHost?.getService<DistributionServiceProcess>("DistribSvc");

    if (!distrib) return false;

    const prog = await Daemon()!.helpers!.GlobalLoadIndicator();
    const result = await distrib.uninstallPackage(id, deleteFiles, (s) => prog.caption.set(s));

    await prog.stop();

    return result;
  }

  async registerAppFromPath(path: string) {
    try {
      const contents = await Fs().readFile(path);
      if (!contents) return "failed to read file";

      const text = arrayToText(contents);
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
        +Env().get("shell_pid"),
        true
      );
    });
  }

  async pinApp(appId: string) {
    this.Log(`Pinning ${appId}`);

    const appStore = this.serviceHost?.getService("AppStorage") as ApplicationStorage;
    const app = appStore?.getAppSynchronous(appId);

    if (!app) return;

    Daemon()!.preferences.update((v) => {
      if (v.pinnedApps.includes(appId)) return v;

      v.pinnedApps.push(appId);

      return v;
    });
  }

  unpinApp(appId: string) {
    this.Log(`Unpinning ${appId}`);

    Daemon()!.preferences.update((v) => {
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

    const existing = await Fs().stat(path);
    if (existing) return;

    await Daemon()!.shortcuts?.createShortcut(
      {
        type: "app",
        target: app.id,
        name: app.metadata.name,
        icon: `@app::${app.id}`,
      },
      path,
      false
    );

    KernelDispatchS().dispatch("startmenu-refresh");
  }

  async removeFromStartMenu(appId: string) {
    const app = this.appStorage()?.getAppSynchronous(appId);
    if (!app) return;

    const path = this.determineStartMenuShortcutPath(app);
    if (!path) return;

    await Fs().deleteItem(path, false);
    KernelDispatchS().dispatch("startmenu-refresh");
  }

  async updateStartMenuFolder() {
    const installedApps = Daemon()?.appStorage()?.buffer();

    if (!installedApps) return;

    const { stop, incrementProgress, caption } = await Daemon()!.helpers!.GlobalLoadIndicator(
      "Updating the start menu...",
      +Env().get("shell_pid"),
      {
        max: Object.keys(AppGroups).length + installedApps.length,
        value: 0,
        useHtml: true,
      }
    );

    for (const appGroup in AppGroups) {
      incrementProgress?.();
      caption.set(`Updating the start menu...<br>Creating folder for ${AppGroups[appGroup]}`);

      await Fs().createDirectory(join(UserPaths.StartMenu, `$$${appGroup}`), false);
    }

    const promises = [];

    for (const app of installedApps) {
      promises.push(
        new Promise(async (r) => {
          await Daemon()?.appreg?.addToStartMenu(app.id);

          caption.set(`Updating the start menu...<br>Created shortcut for ${app.metadata.name}`);

          incrementProgress?.();

          r(void 0);
        })
      );
    }

    await Promise.all(promises);

    KernelDispatchS().dispatch("startmenu-refresh");
    stop?.();
  }
}
