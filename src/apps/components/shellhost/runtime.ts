import { AppProcess } from "$ts/apps/process";
import { SpinnerIcon } from "$ts/images/general";
import { GoodStatusIcon } from "$ts/images/status";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import { UserDaemon } from "$ts/server/user/daemon";
import { Sleep } from "$ts/sleep";
import type { AppProcessData } from "$types/app";
import type { UserPreferencesStore } from "$types/user";
import type { ShellRuntime } from "../shell/runtime";

export class ShellHostRuntime extends Process {
  public _criticalProcess: boolean = true;
  private autoloadApps: string[];
  readonly shellComponents: string[] = ["contextMenu", "SystemShortcutsProc"];
  userDaemon: UserDaemon | undefined;
  userPreferences: UserPreferencesStore;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, _: AppProcessData, autoloadApps: string[]) {
    super(handler, pid, parentPid);

    this.userDaemon = this.handler.getProcess<UserDaemon>(+this.env.get("userdaemon_pid"));
    this.userPreferences = this.userDaemon!.preferences;
    this.autoloadApps = autoloadApps;
  }

  async start() {
    if (this.userDaemon?.autoLoadComplete) return false;

    // TODO: abstract the tray icon handling from the shell
    const proc = await this.userDaemon?._spawnApp<ShellRuntime>(
      this.userPreferences().globalSettings.shellExec,
      undefined,
      this.pid
    );

    await proc?.createTrayIcon?.(this.pid, "shellHost_loading", {
      icon: SpinnerIcon,
    });

    for (const id of this.shellComponents) {
      await this.userDaemon?._spawnApp(id, undefined, this.pid);
    }

    await new Promise<void>(async (r) => {
      while (!this.env.get("shell_pid")) await Sleep(1);
      r();
    });

    proc?.dispatch?.dispatch("ready");

    for (const app of this.autoloadApps) {
      if (app === "shellHost") continue;

      await this.userDaemon?._spawnApp(app, undefined, this.pid);
    }

    proc?.trayIcons.update((v) => {
      v[`${this.pid}#shellHost_loading`]!.icon = GoodStatusIcon;
      return v;
    });

    await Sleep(1000);
    await proc?.disposeTrayIcon?.(this.pid, "shellHost_loading");
  }
}
