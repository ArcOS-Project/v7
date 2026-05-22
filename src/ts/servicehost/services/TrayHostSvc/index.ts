import type { TrayIconDiscriminator, TrayIconOptions } from "$apps/components/shell/types";
import type { IServiceHost } from "$interfaces/IServiceHost";
import type { ITrayHostService, ITrayIconProcess } from "$interfaces/services/ITrayHostService";
import { Daemon, Env, Stack, SysDispatch } from "$ts/env";
import { BaseService } from "$ts/servicehost/base";
import { Sleep } from "$ts/sleep";
import { TrayIconProcess } from "$ts/ui/tray/process";
import { Store } from "$ts/writable";
import type { Service } from "$types/service";

export class TrayHostService extends BaseService implements ITrayHostService {
  public trayIcons = Store<Record<TrayIconDiscriminator, ITrayIconProcess>>({});

  constructor(pid: number, parentPid: number, name: string, host: IServiceHost, initBroadcast?: (message: string) => void) {
    super(pid, parentPid, name, host, initBroadcast);

    this.setSource(__SOURCE__);

    Env.set("TRAYHOST_PID", this.pid);
  }

  async createTrayIcon(
    pid: number,
    identifier: string,
    options: TrayIconOptions,
    process: typeof TrayIconProcess = TrayIconProcess
  ) {
    this.Log(`createTrayIcon: for PID ${pid}, identifier=${identifier}`);

    await Stack.waitForAvailable();
    const trayIcons = this.trayIcons();

    if (trayIcons[`${pid}#${identifier}`]) return false;

    const proc = await Stack.spawn<ITrayIconProcess>(process, undefined, Daemon?.userInfo?._id, pid, {
      ...options,
      pid,
      identifier,
    });

    if (!proc) return false;

    trayIcons[`${pid}#${identifier}`] = proc;

    this.trayIcons.set(trayIcons);
    SysDispatch.dispatch("tray-icon-create", [pid, identifier]);

    await Sleep(100);

    proc.__render();

    return true;
  }

  async disposeTrayIcon(pid: number, identifier: string) {
    this.Log(`disposeTrayIcon: for PID ${pid}, identifier=${identifier}`);

    const trayIcons = this.trayIcons();
    const discriminator: TrayIconDiscriminator = `${pid}#${identifier}`;

    if (!trayIcons[discriminator]) return false;

    await Stack.kill(trayIcons[discriminator].pid, true);

    delete trayIcons[discriminator];

    this.trayIcons.set(trayIcons);
    SysDispatch.dispatch("tray-icon-dispose", [pid, identifier]);
  }

  async disposeAllTrayIcons() {
    const trayIcons = this.trayIcons();

    for (const discriminator of Object.keys(trayIcons) as TrayIconDiscriminator[]) {
      const [pid, identifier] = discriminator.split("#");

      await this.disposeTrayIcon(+pid, identifier);
      SysDispatch.dispatch("tray-icon-dispose", [+pid]);
    }

    this.trayIcons.set(trayIcons);
  }

  disposeProcessTrayIcons(pid: number) {
    this.Log(`disposeProcessTrayIcons: for PID ${pid}`);

    const trayIcons = this.trayIcons();

    for (const id of Object.keys(trayIcons) as TrayIconDiscriminator[]) {
      if (id.startsWith(`${pid}#`)) {
        this.disposeTrayIcon(pid, id.split("#")[1]);
      }
    }

    this.trayIcons.set(trayIcons);
    SysDispatch.dispatch("tray-icon-dispose", [pid]);
  }

  changeIcon(pid: number, identifier: string, newIcon: string): void {
    this.Log(`changeIcon: for PID ${pid}, identifier=${identifier}, newIcon=${newIcon}`);

    const discriminator: TrayIconDiscriminator = `${pid}#${identifier}`;
    if (!this.trayIcons()[discriminator]) return;

    this.trayIcons.update((v) => {
      v[discriminator]!.icon = newIcon;
      return v;
    });
  }
}

export const trayHostService: Service = {
  name: "TrayHostSvc",
  initialState: "started",
  process: TrayHostService,
  description: "Manages the taskbar's tray icons",
};
