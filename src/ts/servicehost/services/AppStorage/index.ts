import type { Constructs } from "$interfaces/common";
import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IServiceHost } from "$interfaces/IServiceHost";
import type { IThirdPartyAppProcess } from "$interfaces/IThirdPartyAppProcess";
import type { IApplicationStorage } from "$interfaces/services/IApplicationStorage";
import { BuiltinAppImportPathAbsolutes } from "$ts/apps/store";
import { ArcOSVersion, Daemon, Env, Fs, State, SysDispatch } from "$ts/env";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { CommandResult } from "$ts/result";
import { BaseService } from "$ts/servicehost/base";
import { DefaultAppData } from "$ts/user/store";
import { sortByHierarchy } from "$ts/util";
import { cloneAppMeta } from "$ts/util/apps";
import { MessageBox } from "$ts/util/dialog";
import { join } from "$ts/util/fs";
import { validateObject } from "$ts/util/json";
import { compareVersion } from "$ts/util/version";
import { Store } from "$ts/writable";
import type { App, AppStorage, AppStoreCb, InstalledApp } from "$types/apps/app";
import type { Service } from "$types/services/service";

export class ApplicationStorage extends BaseService implements IApplicationStorage {
  private origins = new Map<string, AppStoreCb>([]);
  private injectedStore = new Map<string, InstalledApp>([]);
  public buffer = Store<AppStorage>([]);
  public appIconCache: Record<string, string> = {};
  public tpaModuleCache: Record<string, Constructs<IThirdPartyAppProcess>> = {};

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: IServiceHost, initBroadcast?: (msg: string) => void) {
    super(pid, parentPid, name, host, initBroadcast);

    this.loadOrigin("injected", () => this.injected());

    SysDispatch.subscribe("app-store-refresh", async () => {
      await this.refresh();
    });

    this.setSource(__SOURCE__);
  }

  protected async start(): Promise<any> {
    this.initBroadcast?.("Loading applications...");

    if (State.currentState !== "arcterm") {
      const builtins = await this.loadAppsFromViteModules(BuiltinAppImportPathAbsolutes);

      this.loadOrigin("builtin", () => builtins);
      this.loadOrigin("userApps", async () => await Daemon.appreg!.getUserApps());
      await this.refresh();
    }
  }

  //#endregion

  error_appLoadError(result: ICommandResult<App>) {
    return new Promise<void>((r) => {
      this.Log(result.errorMessage!);
      MessageBox(
        {
          title: "App load error",
          message: `ArcOS failed to load a first-party application because of an error. ${result.errorMessage ?? "Unknown error"}.`,
          buttons: [{ caption: "Okay", action: () => r(), suggested: true }],
          image: "WarningIcon",
        },
        +Env.get("loginapp_pid"),
        true
      );
    });
  }

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

  loadApp(app: InstalledApp) {
    if (this._disposed) return false;

    this.Log(`Loading injected app '${app.id}'`);

    if (this.injectedStore.get(app.id)) return false;

    this.injectedStore.set(app.id, app);

    return app;
  }

  async loadAppsFromViteModules(modules: Record<string, () => Promise<unknown>>) {
    const apps: AppStorage = await Promise.all(
      Object.keys(modules).map(async (path) => {
        const result = await this.loadAppFromViteModule(modules[path], path);
        const app = result.result!;

        if (!result.success) {
          await this.error_appLoadError(result);
          return null;
        }

        this.initBroadcast?.(`Loaded ${app.metadata.name}`);
        this.Log(result.successMessage!);

        return app;
      })
    ).then((apps) => apps.filter((a): a is InstalledApp => a !== null));

    return apps;
  }

  async loadAppFromViteModule(fn: () => Promise<unknown>, path?: string): Promise<ICommandResult<App>> {
    const blocklist = Daemon!.preferences()._internalImportBlocklist || [];

    if (path && !Daemon.safeMode && blocklist.includes(path)) return CommandResult.Error(`Vite module '${path}' is blocked.`);

    const regex = new RegExp(/import\(\"(?<path>.*?)\"\)/gm);

    try {
      const start = performance.now();
      const mod = (await fn()) as any;
      const app = mod.default as App;
      const originalPath = regex.exec(fn.toString())?.groups?.path;

      if (app._internalMinVer && compareVersion(ArcOSVersion, app._internalMinVer) === "higher") {
        return CommandResult.Error(`This application expects a newer version of ArcOS`);
      }

      if (app._internalSysVer || app._internalOriginalPath) {
        return CommandResult.Error(`Application '${app.id}' contains runtime-level properties, set before runtime.`);
      }

      const end = performance.now() - start;
      const appCopy = cloneAppMeta(app);

      appCopy._internalSysVer = `v${ArcOSVersion}-${ArcMode()}_${ArcBuild()}`;
      appCopy._internalOriginalPath = path;
      appCopy._internalLoadTime = end;
      if (originalPath) appCopy._internalResolvedPath = originalPath;

      return CommandResult.Ok(
        appCopy,
        `Loaded app: ${path}: ${app.metadata.name} by ${app.metadata.author}, version ${app.metadata.version} (${end.toFixed(2)}ms)`
      );
    } catch (e: any) {
      return CommandResult.Error(`Failed to load app ${path}: ${e?.message ?? e ?? "<idk>"}`);
    }
  }

  async loadAppModuleFile(path: string, noVerify?: boolean): Promise<ICommandResult<App>> {
    try {
      const module = await import(/* @vite-ignore */ path);
      const app = module?.default as InstalledApp;

      if (!app) return CommandResult.Error("Missing default export");
      if (!validateObject(app, DefaultAppData) && !noVerify) return CommandResult.Error("Validation for the module failed");
      if (this.getAppSynchronous(app.id)) return CommandResult.Error("An application with this ID is already loaded");

      this.loadApp(app);

      await this.refresh();

      return CommandResult.Ok(app);
    } catch (e) {
      return CommandResult.Error(`Failed to load app module: ${e || "unknown error"}`);
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

  getAppSynchronous(id: string): InstalledApp | undefined {
    return cloneAppMeta(this.buffer().filter((a) => a.id === id)[0]);
  }

  /**
   * @deprecated This method is ancient and should not be used. Use `ApplicationStorage.getAppSynchronous` instead.
   */
  async getAppById(id: string, fromBuffer = false): Promise<ICommandResult<App>> {
    if (this._disposed) return CommandResult.Error("The process is disposed");

    const apps = fromBuffer ? this.buffer() : await this.get();

    for (const app of apps) {
      if (app.id === id) {
        return CommandResult.Ok(cloneAppMeta(app));
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
  // startCondition: () => State.currentState !== "arcterm",
};
