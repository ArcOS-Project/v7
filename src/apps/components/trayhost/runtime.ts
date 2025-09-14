import { KernelStack } from "$ts/env";
import { Process } from "$ts/process/instance";
import type { UserDaemon } from "$ts/server/user/daemon";
import { Sleep } from "$ts/sleep";
import { TrayIconProcess } from "$ts/ui/tray/process";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { UserPreferencesStore } from "$types/user";
import type { TrayIconDiscriminator, TrayIconOptions } from "../shell/types";

export class TrayHostRuntime extends Process {
  userDaemon: UserDaemon | undefined;
  userPreferences?: UserPreferencesStore;
  public trayIcons = Store<Record<TrayIconDiscriminator, TrayIconProcess>>({});

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, _: AppProcessData) {
    super(pid, parentPid);

    this.name = "TrayHostRuntime";

    this.setSource(__SOURCE__);
  }

  async start() {
    if (this.env.get("trayhost_pid") && KernelStack().getProcess(+this.env.get("trayhost_pid"))) return false;

    this.userDaemon = KernelStack().getProcess<UserDaemon>(+this.env.get("userdaemon_pid"));
    this.userPreferences = this.userDaemon!.preferences;

    this.env.set("trayhost_pid", this.pid);
  }

  //#endregion
  //#region ACTIONS

  async createTrayIcon(
    pid: number,
    identifier: string,
    options: TrayIconOptions,
    process: typeof TrayIconProcess = TrayIconProcess
  ) {
    await KernelStack().waitForAvailable();
    const trayIcons = this.trayIcons();

    if (trayIcons[`${pid}#${identifier}`]) return false;

    const proc = await KernelStack().spawn<TrayIconProcess>(process, undefined, this.userDaemon?.userInfo?._id, pid, {
      ...options,
      pid,
      identifier,
    });

    if (!proc) return false;

    trayIcons[`${pid}#${identifier}`] = proc;

    this.trayIcons.set(trayIcons);
    this.systemDispatch.dispatch("tray-icon-create", [pid, identifier]);

    await Sleep(100);

    proc.__render();

    return true;
  }

  async disposeTrayIcon(pid: number, identifier: string) {
    const trayIcons = this.trayIcons();
    const discriminator: TrayIconDiscriminator = `${pid}#${identifier}`;

    if (!trayIcons[discriminator]) return false;

    await KernelStack().kill(trayIcons[discriminator].pid);

    delete trayIcons[discriminator];

    this.trayIcons.set(trayIcons);
    this.systemDispatch.dispatch("tray-icon-dispose", [pid, identifier]);
  }

  disposeProcessTrayIcons(pid: number) {
    const trayIcons = this.trayIcons();

    for (const id of Object.keys(trayIcons) as TrayIconDiscriminator[]) {
      if (id.startsWith(`${pid}#`)) {
        this.disposeTrayIcon(pid, id.split("#")[1]);
      }
    }

    this.trayIcons.set(trayIcons);
    this.systemDispatch.dispatch("tray-icon-dispose", [pid]);
  }

  //#endregion
}
