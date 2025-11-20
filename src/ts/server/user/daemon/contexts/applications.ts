import { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import { isPopulatable } from "$ts/apps/util";
import { MessageBox } from "$ts/dialog";
import { BETA, Env, KernelDispatchS, KernelStack } from "$ts/env";
import type { ShareManager } from "$ts/shares";
import type { App } from "$types/app";
import { ElevationLevel } from "$types/elevation";
import type { UserDaemon } from "..";
import { UserContext } from "../context";

export class ApplicationsUserContext extends UserContext {
  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  async spawnAutoload() {
    if (this._disposed) return;

    const shares = this.serviceHost?.getService<ShareManager>("ShareMgmt");
    const autoloadApps: string[] = [];

    this.Log(`Spawning autoload applications`);

    let { startup } = this.daemon.preferences();
    startup ||= {};

    for (const payload in startup) {
      const type = startup[payload];

      switch (type.toLowerCase()) {
        case "app":
          autoloadApps.push(payload);
          break;
        case "file":
          if (!this.safeMode) await this.daemon.files?.openFile(payload);
          break;
        case "folder":
          if (!this.safeMode) await this.daemon.spawn?.spawnApp("fileManager", undefined, payload);
          break;
        case "share":
          await shares?.mountShareById(payload);
          break;
        case "disabled":
          break;
        default:
          this.Log(`Unknown startup type: ${type.toUpperCase()} (payload: '${payload}')`);
      }
    }

    await this.daemon.spawn?._spawnApp("shellHost", undefined, this.pid, autoloadApps);

    if (this.safeMode) this.daemon.helpers?.safeModeNotice();

    if (BETA)
      this.daemon.notifications?.sendNotification({
        title: "Have any feedback?",
        message:
          "I'd love to hear it! There's a feedback button in the titlebar of every window. Don't hesitate to tell me how I'm doing stuff wrong, what you want to see or what I forgot. I want to hear all of it.",
        buttons: [
          {
            caption: "Send feedback",
            action: () => {
              this.daemon.helpers!.iHaveFeedback(KernelStack().getProcess(+Env().get("shell_pid"))!);
            },
          },
        ],
        icon: "message-square-heart",
        timeout: 6000,
      });

    if (navigator.userAgent.toLowerCase().includes("firefox")) {
      await MessageBox(
        {
          title: "Firefox support",
          message:
            "Beware! ArcOS doesn't work correctly on Firefox. It's unsure when and if support for Firefox will improve. Please be sure to give feedback to me about anything that doesn't work quite right on Firefox, okay?",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: "FirefoxIcon",
        },
        +Env().get("shell_pid"),
        true
      );
    }

    this.daemon.autoLoadComplete = true;
  }

  checkDisabled(appId: string, noSafeMode?: boolean): boolean {
    if (this._disposed) return false;
    if (this.safeMode && !noSafeMode) {
      return false;
    }

    const { disabledApps } = this.daemon.preferences();

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
    const app = await appStore?.getAppSynchronous(appId);

    if (!app || this.isVital(app)) return;

    const elevated = await this.daemon.elevation!.manuallyElevate({
      what: "ArcOS needs your permission to disable an application",
      image: this.daemon.icons!.getAppIcon(app),
      title: app.metadata.name,
      description: `By ${app.metadata.author}`,
      level: ElevationLevel.medium,
    });
    if (!elevated) return;

    this.daemon.preferences.update((v) => {
      v.disabledApps.push(appId);

      return v;
    });

    const instances = KernelStack().renderer?.getAppInstances(appId);

    if (instances)
      for (const instance of instances) {
        KernelStack().kill(instance.pid, true);
      }

    KernelDispatchS().dispatch("app-store-refresh");
  }

  async enableApp(appId: string) {
    if (this._disposed) return false;
    if (!this.checkDisabled(appId)) return false;

    this.Log(`Enabling application ${appId}`);

    const appStore = this.appStorage();
    const app = await appStore?.getAppSynchronous(appId);

    if (!app) return;

    const elevated = await this.daemon.elevation?.manuallyElevate({
      what: "ArcOS needs your permission to enable an application",
      image: this.daemon.icons!.getAppIcon(app),
      title: app.metadata.name,
      description: `By ${app.metadata.author}`,
      level: ElevationLevel.medium,
    });
    if (!elevated) return;

    this.daemon.preferencesCtx?.preferences.update((v) => {
      if (!v.disabledApps.includes(appId)) return v;

      v.disabledApps.splice(v.disabledApps.indexOf(appId));

      return v;
    });

    KernelDispatchS().dispatch("app-store-refresh");
  }

  async enableThirdParty() {
    const elevated = await this.daemon.elevation?.manuallyElevate({
      what: "ArcOS wants to enable third-party applications",
      title: "Enable Third-party",
      description: "ArcOS System",
      image: "AppsIcon",
      level: ElevationLevel.medium,
    });

    if (!elevated) return;

    this.daemon.preferences.update((v) => {
      v.security.enableThirdParty = true;
      return v;
    });
  }

  async disableThirdParty() {
    const elevated = await this.daemon.elevation?.manuallyElevate({
      what: "ArcOS wants to disable third-party applications and kill any running third-party apps",
      title: "Disable Third-party",
      description: "ArcOS System",
      image: "AppsIcon",
      level: ElevationLevel.medium,
    });

    if (!elevated) return;

    this.daemon.preferences.update((v) => {
      v.security.enableThirdParty = false;
      return v;
    });

    const store = KernelStack().store();

    for (const [pid, proc] of [...store]) {
      if (!proc._disposed && proc instanceof ThirdPartyAppProcess) KernelStack().kill(pid, true);
    }
  }
}
