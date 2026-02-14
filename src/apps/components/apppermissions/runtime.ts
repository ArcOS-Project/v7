import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/daemon";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/app";

export class AppPermissionsRuntime extends AppProcess {
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

    const targetApp = this.appStore()?.getAppSynchronous(this.targetAppId);

    if (!targetApp) {
      Daemon?.notifications?.sendNotification({
        title: "App not found",
        message: `AppPermissions couldn't find the app "${this.targetAppId}". Is it installed?`,
        image: "DefaultIcon",
        timeout: 6000,
      });

      this.killSelf();

      return;
    }

    this.targetApp.set(targetApp);
  }
}