import { AppProcess } from "$ts/apps/process";
import { AppInfoIcon } from "$ts/images/apps";
import { ComponentIcon } from "$ts/images/general";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/app";
import { ElevationLevel } from "$types/elevation";

export class AppInfoRuntime extends AppProcess {
  targetApp = Store<App>();
  targetAppId: string;
  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, appId: string) {
    super(handler, pid, parentPid, app);

    this.targetAppId = appId;
  }

  async render() {
    const targetApp = await this.userDaemon?.appStore?.getAppById(this.targetAppId);

    if (!targetApp) {
      this.userDaemon?.sendNotification({
        title: "App not found",
        message: `AppInfo couldn't find any information about "${this.targetAppId}". Is it installed?`,
        image: AppInfoIcon,
        timeout: 6000,
      });

      this.killSelf();

      return;
    }

    this.targetApp.set(targetApp);
  }

  async killAll() {
    const elevated = await this.userDaemon?.manuallyElevate({
      what: `ArcOS needs your permission to kill all instances of an app`,
      image: this.targetApp().metadata.icon || ComponentIcon,
      title: this.targetApp().metadata.name,
      description: this.targetAppId,
      level: ElevationLevel.high,
    });

    if (!elevated) return;

    const instances = this.handler.renderer?.getAppInstances(this.targetAppId);

    for (const instance of instances || []) {
      instance.killSelf();
    }
  }
}
