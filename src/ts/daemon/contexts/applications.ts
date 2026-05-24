import type { IApplicationsUserContext } from "$interfaces/contexts/IApplicationsUserContext";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { IShareManager } from "$interfaces/services/IShareManager";
import type { ITrayHostService } from "$interfaces/services/ITrayHostService";
import { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import { Daemon, Env, Stack, SysDispatch } from "$ts/env";
import { Sleep } from "$ts/sleep";
import { isPopulatable } from "$ts/util/apps";
import { MessageBox } from "$ts/util/dialog";
import type { App } from "$types/app";
import { ElevationLevel } from "$types/elevation";
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

    if (app && this.isVital(app) && !noSafeMode) return false;

    return (disabledApps || []).includes(appId) || !!(this.safeMode && noSafeMode);
  }

  isVital(app: App) {
    return app.vital && !app.entrypoint && !app.workingDirectory && !app.thirdParty;
  }

  isPopulatableByAppIdSync(appId: string): boolean {
    const storage = this.appStorage();
    const app = storage?.getAppSynchronous(appId);

    if (!app) return false;

    return isPopulatable(app);
  }

  async disableApp(appId: string) {
    if (this._disposed) return false;
    if (this.checkDisabled(appId)) return false;

    this.Log(`Disabling application ${appId}`);

    const appStore = this.appStorage();
    const app = appStore?.getAppSynchronous(appId);

    if (!app || this.isVital(app)) return;

    const elevated = await Daemon!.elevation!.manuallyElevate({
      what: "ArcOS needs your permission to disable an application",
      image: `@app::${app.id}`,
      title: app.metadata.name,
      description: `By ${app.metadata.author}`,
      level: ElevationLevel.medium,
    });
    if (!elevated) return;

    Daemon!.preferences.update((v) => {
      v.disabledApps.push(appId);

      return v;
    });

    const instances = Stack.renderer?.getAppInstances(appId);

    if (instances)
      for (const instance of instances) {
        Stack.kill(instance.pid, true);
      }

    SysDispatch.dispatch("app-store-refresh");
  }

  async enableApp(appId: string) {
    if (this._disposed) return false;
    if (!this.checkDisabled(appId)) return false;

    this.Log(`Enabling application ${appId}`);

    const appStore = this.appStorage();
    const app = await appStore?.getAppSynchronous(appId);

    if (!app) return;

    const elevated = await Daemon!.elevation?.manuallyElevate({
      what: "ArcOS needs your permission to enable an application",
      image: `@app::${app.id}`,
      title: app.metadata.name,
      description: `By ${app.metadata.author}`,
      level: ElevationLevel.medium,
    });
    if (!elevated) return;

    Daemon!.preferencesCtx?.preferences.update((v) => {
      if (!v.disabledApps.includes(appId)) return v;

      v.disabledApps.splice(v.disabledApps.indexOf(appId));

      return v;
    });

    SysDispatch.dispatch("app-store-refresh");
  }

  async enableThirdParty() {
    const elevated = await Daemon!.elevation?.manuallyElevate({
      what: "ArcOS wants to enable third-party applications",
      title: "Enable Third-party",
      description: "ArcOS System",
      image: "AppsIcon",
      level: ElevationLevel.medium,
    });

    if (!elevated) return;

    Daemon!.preferences.update((v) => {
      v.security.enableThirdParty = true;
      return v;
    });
  }

  async disableThirdParty() {
    const elevated = await Daemon!.elevation?.manuallyElevate({
      what: "ArcOS wants to disable third-party applications and kill any running third-party apps",
      title: "Disable Third-party",
      description: "ArcOS System",
      image: "AppsIcon",
      level: ElevationLevel.medium,
    });

    if (!elevated) return;

    Daemon!.preferences.update((v) => {
      v.security.enableThirdParty = false;
      return v;
    });

    const store = Stack.store();

    for (const [pid, proc] of [...store]) {
      if (!proc._disposed && proc instanceof ThirdPartyAppProcess) Stack.kill(pid, true);
    }
  }
}
