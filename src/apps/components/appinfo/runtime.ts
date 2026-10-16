import type { IAppInfoRuntime } from "$interfaces/runtimes/IAppInfoRuntime";
import { AppProcess } from "$ts/apps/process";
import { Daemon, Env, Stack } from "$ts/env";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/apps/app";
import { ElevationLevel } from "$types/system/elevation";

export class AppInfoRuntime extends AppProcess implements IAppInfoRuntime {
  targetApp = Store<App>();
  targetAppId: string;

  //#region LIFECYCLE
  constructor(pid: number, parentPid: number, app: AppProcessData, appId: string) {
    super(pid, parentPid, app);

    this.targetAppId = appId;

    this.setSource(__SOURCE__);
  }

  async start() {
    if (!this.targetAppId) return false;
  }

  async render() {
    this.getBody().setAttribute("data-prefix", "apps.AppInfo");
    const targetApp = this.appStore()?.getAppSynchronous(this.targetAppId);

    if (!targetApp) {
      Daemon?.notifications?.sendNotification({
        title: "%apps.AppInfo.noTargetApp.title%",
        message: `%apps.AppInfo.noTargetApp.message(${this.targetAppId})%`,
        image: "AppInfoIcon",
        timeout: 6000,
      });

      this.killSelf();

      return;
    }

    this.targetApp.set(targetApp);
  }

  //#endregion

  async killAll() {
    this.Log(`killAll`);

    const elevated = await this.userDaemon?.manuallyElevate({
      what: `%apps.AppInfo.killAll.what%`,
      image: `@app::${this.targetAppId}`,
      title: this.targetApp().metadata.name,
      description: this.targetAppId,
      level: ElevationLevel.high,
    });

    if (!elevated) return;

    const instances = Stack.renderer?.getAppInstances(this.targetAppId);

    for (const instance of instances || []) {
      instance.killSelf();
    }
  }

  async processManager() {
    this.Log(`processManager`);

    await this.spawnApp("processManager", +Env.get("shell_pid"));
    this.closeWindow();
  }
}
