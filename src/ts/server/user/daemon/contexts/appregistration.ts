import type { AppProcess } from "$ts/apps/process";
import type { ApplicationStorage } from "$ts/apps/storage";
import { BuiltinAppImportPathAbsolutes } from "$ts/apps/store";
import { MessageBox } from "$ts/dialog";
import type { DistributionServiceProcess } from "$ts/distrib";
import { ArcOSVersion } from "$ts/env";
import type { IconService } from "$ts/icon";
import { maybeIconId } from "$ts/images";
import { tryJsonParse } from "$ts/json";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { deepCopyWithBlobs } from "$ts/util";
import { arrayToText, textToBlob } from "$ts/util/convert";
import { getParentDirectory, join } from "$ts/util/fs";
import { compareVersion } from "$ts/version";
import { Store, type ReadableStore } from "$ts/writable";
import type { App, AppStorage, InstalledApp } from "$types/app";
import { LogLevel } from "$types/logging";
import type { UserDaemon } from "..";
import { UserPaths } from "../../store";
import { UserContext } from "../context";

export class AppRegistrationUserContext extends UserContext {
  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }
  
  async initAppStorage(storage: ApplicationStorage, cb: (app: App) => void) {
    this.Log(`Now trying to load built-in applications...`);

    const blocklist = this.userDaemon.preferences()._internalImportBlocklist || [];

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
              +this.env.get("loginapp_pid"),
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
    if (!this.userDaemon.preferences()) return [];

    
    await this.userDaemon.migrationsContext!.migrateUserAppsToFs();

    const bulk = Object.fromEntries(
      Object.entries(await this.fs.bulk(UserPaths.AppRepository, "json")).map(([k, v]) => [k.replace(".json", ""), v])
    );

    return Object.values(bulk) as AppStorage;
  }

  async registerApp(data: InstalledApp) {
    this.Log(`Registering ${data.id}: writing ${data.id}.json to AppRepository`);
    const appStore = this.appStorage();

    await this.fs.writeFile(join(UserPaths.AppRepository, `${data.id}.json`), textToBlob(JSON.stringify(data, null, 2)));
    await appStore?.refresh();
  }

  async uninstallPackageWithStatus(id: string, deleteFiles = false) {
    this.Log(`Attempting to uninstall app '${id}'`);
    const distrib = this.serviceHost?.getService<DistributionServiceProcess>("DistribSvc");

    if (!distrib) return false;

    const prog = await this.GlobalLoadIndicator();
    const result = await distrib.uninstallPackage(id, deleteFiles, (s) => prog.caption.set(s));

    await prog.stop();

    return result;
  }

  async registerAppFromPath(path: string) {
    try {
      const contents = await this.fs.readFile(path);
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
        +this.env.get("shell_pid"),
        true
      );
    });
  }

  getAppIcon(app: App) {
    return this.getIconCached(`@app::${app.id}`) || this?.getIconCached("ComponentIcon");
  }

  getAppIconByProcess(process: AppProcess) {
    return this.getAppIcon(process.app?.data) || this?.getIconCached("ComponentIcon");
  }

  async getIcon(id: string): Promise<string> {
    const iconService = this.serviceHost?.getService<IconService>("IconService");

    return (await iconService?.getIcon(id)) || this?.getIconCached("ComponentIcon");
  }

  getIconCached(id: string): string {
    const iconService = this.serviceHost?.getService<IconService>("IconService");

    return iconService?.getIconCached(id) || "";
  }

  getIconStore(id: string): ReadableStore<string> {
    const store = Store<string>();
    const iconService = this.serviceHost?.getService<IconService>("IconService");

    if (!iconService) store.set(maybeIconId(id) || "");

    iconService?.getIcon(id)?.then((i) => store.set(i));

    return store;
  }

  async pinApp(appId: string) {
    this.Log(`Pinning ${appId}`);

    const appStore = this.serviceHost?.getService("AppStorage") as ApplicationStorage;
    const app = appStore?.getAppSynchronous(appId);

    if (!app) return;

    this.userDaemon.preferences.update((v) => {
      if (v.pinnedApps.includes(appId)) return v;

      v.pinnedApps.push(appId);

      return v;
    });
  }

  unpinApp(appId: string) {
    this.Log(`Unpinning ${appId}`);

    this.userDaemon.preferences.update((v) => {
      if (!v.pinnedApps.includes(appId)) return v;

      v.pinnedApps.splice(v.pinnedApps.indexOf(appId), 1);

      return v;
    });
  }

}