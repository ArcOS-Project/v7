import { AppProcess } from "$ts/apps/process";
import { AppInfoIcon } from "$ts/images/apps";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { App, AppProcessData, ThirdPartyApp } from "$types/app";

export class AppInfoRuntime extends AppProcess {
  targetApp = Store<App | ThirdPartyApp>();
  targetAppId: string;
  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    appId: string
  ) {
    super(handler, pid, parentPid, app);

    this.targetAppId = appId;
  }

  async start() {
    const targetApp = await this.userDaemon?.appStore?.getAppById(
      this.targetAppId
    );

    if (!targetApp) {
      this.userDaemon?.sendNotification({
        title: "App info failed",
        message: `Failed to find app information for "${this.targetAppId}". Is it loaded?`,
        image: AppInfoIcon,
        timeout: 6000,
      });

      this.killSelf();

      return;
    }

    this.targetApp.set(targetApp);
  }
}
