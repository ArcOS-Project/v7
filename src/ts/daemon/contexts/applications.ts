import type { IApplicationsUserContext } from "$interfaces/contexts/IApplicationsUserContext";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import { ThirdPartyProcess } from "$ts/apps/tpa/process";
import { Daemon, Stack, SysDispatch } from "$ts/env";
import { ProcessesHelper } from "$ts/helpers/processes";
import { CommandResult } from "$ts/result";
import { isPopulatable } from "$ts/util/apps";
import type { App } from "$types/apps/app";
import { ElevationLevel } from "$types/system/elevation";
import { UserContext } from "../context";

export class ApplicationsUserContext extends UserContext implements IApplicationsUserContext {
  constructor(id: string, daemon: IUserDaemon) {
    super(id, daemon);
  }

  checkDisabled(appId: string, noSafeMode?: boolean): boolean {
    if (this._disposed) return false;
    if (this.safeMode && !noSafeMode) {
      return false;
    }

    const { disabledApps } = Daemon!.preferences();

    const appStore = this.appStorage();
    const app = appStore?.buffer().filter((a) => a.id === appId)[0];

    if (app && this.checkIsVital(app) && !noSafeMode) return false;

    return (disabledApps || []).includes(appId) || !!(this.safeMode && noSafeMode);
  }

  checkIsVital(app: App) {
    return app.vital && !app.entrypoint && !app.workingDirectory && !app.thirdParty;
  }

  checkIsPopulatableByAppIdSync(appId: string): boolean {
    const storage = this.appStorage();
    const app = storage?.getAppSynchronous(appId);

    if (!app) return false;

    return isPopulatable(app);
  }

  async disableApp(appId: string): Promise<ICommandResult> {
    if (this._disposed) return CommandResult.Error("Disposed.");
    if (this.checkDisabled(appId)) return CommandResult.Error("Application is already disabled");

    this.Log(`Disabling application ${appId}`);

    const appStore = this.appStorage();
    const app = appStore?.getAppSynchronous(appId);

    if (!app || this.checkIsVital(app)) return CommandResult.Error("Application not found or vital");

    const elevationResult = await Daemon!.elevation!.manuallyElevate({
      what: "ArcOS needs your permission to disable an application",
      image: `@app::${app.id}`,
      title: app.metadata.name,
      description: `By ${app.metadata.author}`,
      level: ElevationLevel.medium,
    });
    if (!elevationResult.success) return elevationResult!;

    Daemon!.preferences.update((v) => {
      v.disabledApps.push(appId);

      return v;
    });

    const instances: IAppProcess[] = [...Stack.store()]
      .map(([_, v]) => v as IAppProcess)
      .filter((proc) => ProcessesHelper.IsAnyAppProcess(proc) && proc.app.id === appId);

    if (instances)
      for (const instance of instances) {
        Stack.kill(instance.pid, true);
      }

    SysDispatch.dispatch("app-store-refresh");
    return CommandResult.Ok();
  }

  async enableApp(appId: string): Promise<ICommandResult> {
    if (this._disposed) return CommandResult.Error("Disposed.");
    if (!this.checkDisabled(appId)) return CommandResult.Error("Application is already enabled.");

    this.Log(`Enabling application ${appId}`);

    const appStore = this.appStorage();
    const app = await appStore?.getAppSynchronous(appId);

    if (!app) return CommandResult.Error("Application not found");

    const elevationResult = await Daemon!.elevation?.manuallyElevate({
      what: "ArcOS needs your permission to enable an application",
      image: `@app::${app.id}`,
      title: app.metadata.name,
      description: `By ${app.metadata.author}`,
      level: ElevationLevel.medium,
    });
    if (!elevationResult?.success) return elevationResult!;

    Daemon!.preferencesCtx?.preferences.update((v) => {
      if (!v.disabledApps.includes(appId)) return v;

      v.disabledApps.splice(v.disabledApps.indexOf(appId));

      return v;
    });

    SysDispatch.dispatch("app-store-refresh");

    return CommandResult.Ok();
  }

  async enableThirdParty(): Promise<ICommandResult> {
    const elevationResult = await Daemon!.elevation?.manuallyElevate({
      what: "ArcOS wants to enable third-party applications",
      title: "Enable Third-party",
      description: "ArcOS System",
      image: "AppsIcon",
      level: ElevationLevel.medium,
    });

    if (!elevationResult?.success) return elevationResult!;

    Daemon!.preferences.update((v) => {
      v.security.enableThirdParty = true;
      return v;
    });

    return CommandResult.Ok();
  }

  async disableThirdParty(): Promise<ICommandResult> {
    const elevationResult = await Daemon!.elevation?.manuallyElevate({
      what: "ArcOS wants to disable third-party applications and kill any running third-party apps",
      title: "Disable Third-party",
      description: "ArcOS System",
      image: "AppsIcon",
      level: ElevationLevel.medium,
    });

    if (!elevationResult?.success) return elevationResult!;

    Daemon!.preferences.update((v) => {
      v.security.enableThirdParty = false;
      return v;
    });

    const store = Stack.store();

    for (const [pid, proc] of [...store]) {
      if (!proc._disposed && (proc instanceof ThirdPartyAppProcess || proc instanceof ThirdPartyProcess)) Stack.kill(pid, true);
    }

    return CommandResult.Ok();
  }
}
