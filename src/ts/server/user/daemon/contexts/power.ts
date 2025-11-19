import type { AppProcess } from "$ts/apps/process";
import { KernelStack } from "$ts/env";
import { KernelStateHandler } from "$ts/getters";
import type { UserDaemon } from "..";
import { UserContext } from "../context";

export class PowerUserContext extends UserContext {
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

    this.env.set("safemode", true);

    await this.toLogin("logoff", { safeMode: true });
  }

  async toLogin(type: string, props: Record<string, any> = {}, force = false) {
    this.Log(`toLogin: ${type}`);
    await this.userDaemon.checksContext?.waitForLeaveInvocationAllow(); 
    const canLeave = await this.closeOpenedApps(type, props, force);
    if (this._disposed || !canLeave) return;
    if (this.serviceHost) this.serviceHost._holdRestart = true;

    await KernelStack()._killSubProceses(this.pid, true);
    await KernelStateHandler()?.loadState("login", {
      type,
      userDaemon: this,
      ...props,
    });
    await this.serviceHost?.killSelf?.();
    await this.userDaemon.filesystemContext?.unmountMountedDrives(); 
  }

  async closeOpenedApps(type: string, props: Record<string, any> = {}, force = false): Promise<boolean> {
    if (force) return true;

    const windows = KernelStack().renderer?.currentState
      .map((pid) => KernelStack().getProcess<AppProcess>(pid))
      .filter((proc) => !proc?.app?.data?.core);

    if (!windows) return true;

    for (const window of windows) {
      const closeResult = await window?.closeWindow();

      if (!closeResult && !window?.app.data.overlay) {
        
        this.userDaemon.notificationsContext?.sendNotification({
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
}
