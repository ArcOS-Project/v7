import type { IApplicationStorage } from "$interfaces/services/AppStorage";
import { BuiltinAppImportPathAbsolutes } from "$ts/apps/store";
import { Daemon } from "$ts/daemon";
import { ArcOSVersion, Env, Fs, SysDispatch } from "$ts/env";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { CommandResult } from "$ts/result";
import type { ServiceHost } from "$ts/servicehost";
import { BaseService } from "$ts/servicehost/base";
import { deepCopyWithBlobs, sortByHierarchy } from "$ts/util";
import { arrayBufferToText } from "$ts/util/convert";
import { MessageBox } from "$ts/util/dialog";
import { getParentDirectory, join } from "$ts/util/fs";
import { tryJsonParse } from "$ts/util/json";
import { compareVersion } from "$ts/util/version";
import { Store } from "$ts/writable";
import type { App, AppStorage, AppStoreCb, InstalledApp } from "$types/app";
import type { Service } from "$types/service";

export class ApplicationStorage extends BaseService implements IApplicationStorage {
  private origins = new Map<string, AppStoreCb>([]);
  private injectedStore = new Map<string, App>([]);
  public buffer = Store<AppStorage>([]);
  public appIconCache: Record<string, string> = {};

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost, initBroadcast?: (msg: string) => void) {
    super(pid, parentPid, name, host, initBroadcast);

    this.loadOrigin("injected", () => this.injected());

    SysDispatch.subscribe("app-store-refresh", async () => {
      await this.refresh();
    });

    this.setSource(__SOURCE__);
  }

  protected async start(): Promise<any> {
    this.initBroadcast?.("Loading applications...");
    
    const blocklist = Daemon!.preferences()._internalImportBlocklist || [];
    const builtins: App[] = await Promise.all(
      Object.keys(BuiltinAppImportPathAbsolutes).map(async (path) => {
        if (!Daemon.safeMode && blocklist.includes(path)) return null;
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

          this.initBroadcast?.(`Loaded ${app.metadata.name}`);
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

    this.loadOrigin("builtin", () => builtins);
    this.loadOrigin("userApps", async () => await Daemon.appreg!.getUserApps());
    await this.refresh();
  }

  //#endregion

  loadOrigin(id: string, store: AppStoreCb) {
    if (this._disposed) return false;

    this.Log(`Loading app origin '${id}'`);

    if (this.origins.get(id)) return false;

    this.origins.set(id, store);

    return true;
  }

  unloadOrigin(id: string) {
    if (this._disposed) return false;

    this.Log(`Unloading app origin '${id}'`);

    if (!this.origins.get(id)) return false;

    this.origins.delete(id);
    SysDispatch.dispatch("app-store-refresh");

    return true;
  }

  loadApp(app: App) {
    if (this._disposed) return false;

    this.Log(`Loading injected app '${app.id}'`);

    if (this.injectedStore.get(app.id)) return false;

    this.injectedStore.set(app.id, app);

    return app;
  }

  async loadAppModuleFile(path: string) {
    try {
      const module = await import(/* @vite-ignore */ path);
      const app = module?.default as App;

      if (!app) return false;
      if (this.getAppSynchronous(app.id)) return false;

      this.loadApp(app);

      await this.refresh();

      return true;
    } catch {
      return false;
    }
  }

  injected() {
    if (this._disposed) return [];

    return [...this.injectedStore].map(([_, app]) => ({ ...app }));
  }

  async refresh() {
    if (this._disposed) return;

    this.Log(`Refreshing store`);

    const newBuffer = await this.get();
    const tasks: Promise<void>[] = [];

    for (const app of newBuffer) {
      const icon = app.metadata.icon;

      if (icon.startsWith("@local:")) {
        tasks.push(
          (async () => {
            try {
              const path = join(app.workingDirectory || "", icon.replace("@local:", ""));
              const direct = await Fs.direct(path);
              if (direct) this.appIconCache[path] = direct;
            } catch {
              // ignore quietly
            }
          })()
        );
      }
    }

    // Run in parallel
    await Promise.all(tasks);

    this.buffer.set(newBuffer);
  }

  async get() {
    let result: AppStorage = [];

    if (this._disposed) return result;

    for (const [originId, origin] of [...this.origins]) {
      const apps = (await origin()).map((a) => {
        a.originId = originId;

        return a;
      });

      result.push(...apps);
    }

    return sortByHierarchy(
      result.sort((a) => (a.hidden ? 0 : -1)),
      "metadata.name"
    ) as AppStorage;
  }

  getAppSynchronous(id: string): App | undefined {
    return this.buffer().filter((a) => a.id === id)[0];
  }

  /**
   * @deprecated This method is ancient and should not be used. Use `ApplicationStorage.getAppSynchronous` instead.
   */
  async getAppById(id: string, fromBuffer = false): Promise<CommandResult<App>> {
    if (this._disposed) return CommandResult.Error("The process is disposed");

    const apps = fromBuffer ? this.buffer() : await this.get();

    for (const app of apps) {
      if (app.id === id) {
        const tpaPath = (app as InstalledApp).tpaPath;

        if (tpaPath) {
          try {
            const json = tryJsonParse(arrayBufferToText((await Fs.readFile(tpaPath))!));

            if (!json || typeof json !== "object") return CommandResult.Error("Failed to parse the TPA JSON contents");

            return {
              ...Object.freeze({ ...json, workingDirectory: getParentDirectory(tpaPath), tpaPath, originId: "userApps" }),
            };
          } catch {
            continue;
          }
        }

        return CommandResult.Ok({ ...Object.freeze({ ...app }) });
      }
    }

    return CommandResult.Error("Application not found.");
  }
}

export const appStoreService: Service = {
  name: "Application Storage",
  description: "Host process for application storage",
  process: ApplicationStorage,
  initialState: "started",
};
