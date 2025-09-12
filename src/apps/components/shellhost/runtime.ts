import { SpinnerIcon } from "$ts/images/general";
import { GoodStatusIcon } from "$ts/images/status";
import { KernelStack } from "$ts/env";
import { Process } from "$ts/process/instance";
import { UserDaemon } from "$ts/server/user/daemon";
import { Sleep } from "$ts/sleep";
import type { AppProcessData } from "$types/app";
import type { UserPreferencesStore } from "$types/user";
import type { ShellRuntime } from "../shell/runtime";
import type { TrayHostRuntime } from "../trayhost/runtime";

export class ShellHostRuntime extends Process {
  private autoloadApps: string[];
  // Processes to spawn in support of the shell
  readonly shellComponents: string[] = ["contextMenu", "SystemShortcutsProc", "TrayHostProc", "ArcFindProc"];
  userDaemon: UserDaemon | undefined;
  userPreferences: UserPreferencesStore;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, _: AppProcessData, autoloadApps: string[]) {
    super(pid, parentPid);

    this.userDaemon = KernelStack().getProcess<UserDaemon>(+this.env.get("userdaemon_pid")); // Get the user daemon
    this.userPreferences = this.userDaemon!.preferences; // Get the preferences
    this.autoloadApps = autoloadApps || []; // Get the autoload (provided by the daemon)
    this.name = "ShellHostRuntime";
  }

  async start() {
    // Autoload completed? Then stop the process immediately
    if (this.userDaemon?.autoLoadComplete) return false;

    const procs: Record<string, Process> = {}; // Object of executed shell components

    const proc = await this.userDaemon?._spawnApp<ShellRuntime>(
      this.userPreferences().globalSettings.shellExec,
      undefined,
      this.pid
    ); // Let's first spawn the shell exec from globalSettings

    for (const id of this.shellComponents) {
      procs[id] = (await this.userDaemon!._spawnApp(id, undefined, this.pid))!; // Then spawn each shell component
    }

    const trayHost = procs.TrayHostProc as TrayHostRuntime; // Get the tray host

    await trayHost?.createTrayIcon(this.pid, "shellHost_loading", {
      icon: SpinnerIcon,
    }); // Create the shellHost loading icon

    await new Promise<void>(async (r) => {
      while (!this.env.get("shell_pid") || !this.env.get("trayhost_pid") || !this.env.get("arcfind_pid")) await Sleep(1);
      r();
    }); // Wait for the shell PID and trayhost PID to be set

    proc?.dispatch?.dispatch("ready"); // Dispatch ready command to the shell

    await this.userDaemon?.checkForNewVersion();

    for (const app of this.autoloadApps) {
      if (app === "shellHost") continue; // Ignore the shellHost in autoload

      await this.userDaemon?._spawnApp(app, undefined, this.pid); // Spawn autoload app
    }

    // Change the tray icon to good status icon
    trayHost?.trayIcons.update((v) => {
      v[`${this.pid}#shellHost_loading`]!.icon = GoodStatusIcon;
      return v;
    });

    await Sleep(1000); // Wait a second...
    await trayHost?.disposeTrayIcon(this.pid, "shellHost_loading"); // ...then dispose the tray icon
  }

  //#endregion
}
