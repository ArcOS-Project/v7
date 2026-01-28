import type { AppProcess } from "$ts/apps/process";
import { Env, Stack, State } from "$ts/env";
import { Store } from "$ts/writable";
import type { BatteryType } from "$types/navigator";
import { Daemon, type UserDaemon } from "..";
import { UserContext } from "../context";

export class PowerUserContext extends UserContext {
  public battery = Store<BatteryType | undefined>();

  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  async logoff() {
    if (this._disposed) return;

    this.Log(`Logging off NOW`);

    await this.toLogin("logoff");
  }

  async shutdown() {
    if (this._disposed) return;

    this.Log(`Shutting down NOW`);

    await this.toLogin("shutdown");
  }

  async restart() {
    if (this._disposed) return;

    this.Log(`Restarting NOW`);

    await this.toLogin("restart");
  }

  async logoffSafeMode() {
    this.Log(`Logging off NOW (safe mode)`);

    Env.set("safemode", true);

    await this.toLogin("logoff", { safeMode: true });
  }

  async toLogin(type: string, props: Record<string, any> = {}, force = false) {
    this.Log(`toLogin: ${type}`);
    await Daemon?.helpers?.waitForLeaveInvocationAllow();
    const canLeave = await this.closeOpenedApps(type, props, force);
    if (this._disposed || !canLeave) return;
    if (this.serviceHost) this.serviceHost._holdRestart = true;

    await Stack._killSubProceses(this.pid, true);
    await State?.loadState("login", {
      type,
      userDaemon: Daemon,
      ...props,
    });
    await this.serviceHost?.killSelf?.();
    await Daemon?.files?.unmountMountedDrives();
  }

  async closeOpenedApps(type: string, props: Record<string, any> = {}, force = false): Promise<boolean> {
    if (force) return true;

    const windows = Stack.renderer?.currentState
      .map((pid) => Stack.getProcess<AppProcess>(pid))
      .filter((proc) => !proc?.app?.data?.core);

    if (!windows) return true;

    for (const window of windows) {
      const closeResult = await window?.closeWindow();

      if (!closeResult && !window?.app.data.overlay) {
        Daemon?.notifications?.sendNotification({
          title: "Leave interrupted",
          message: `An application is preventing you from leaving the desktop: <b>${window?.app?.data?.metadata?.name || "Unknown app"}</b>.`,
          buttons: [{ caption: "Leave anyway", action: () => this.toLogin(type, props, true) }],
          image: "WarningIcon",
          timeout: 6000,
        });
        return false;
      }
    }

    return true;
  }

  async batteryInfo(): Promise<BatteryType | undefined> {
    if (this._disposed) return;

    const navigator = window.navigator as any;

    if (!navigator.getBattery) return undefined;

    const info = (await navigator.getBattery()) as BatteryType;
    if (info.charging && info.level === 1) return undefined;

    return info;
  }
}
