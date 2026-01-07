import { MessageBox } from "$ts/dialog";
import { Env } from "$ts/env";
import { ErrorIcon } from "$ts/images/dialog";
import { Process } from "$ts/process/instance";
import { Daemon } from "$ts/server/user/daemon";
import { Sleep } from "$ts/sleep";
import type { AppProcessData } from "$types/app";
import type { UserPreferencesStore } from "$types/user";
import type { ShellRuntime } from "../shell/runtime";
import type { TrayHostRuntime } from "../trayhost/runtime";

export class ShellHostRuntime extends Process {
  private autoloadApps: string[];
  // Processes to spawn in support of the shell
  readonly shellComponents: string[] = ["contextMenu", "SystemShortcutsProc", "TrayHostProc", "ArcFindProc"];
  userPreferences: UserPreferencesStore;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, _: AppProcessData, autoloadApps: string[]) {
    super(pid, parentPid);

    this.userPreferences = Daemon!.preferences; // Get the preferences
    this.autoloadApps = autoloadApps || []; // Get the autoload (provided by the daemon)
    this.name = "ShellHostRuntime";

    this.setSource(__SOURCE__);
  }

  async start() {
    // Autoload completed? Then stop the process immediately
    if (Daemon?.autoLoadComplete) return false;

    const procs: Record<string, Process> = {}; // Object of executed shell components

    const proc = await Daemon?.spawn?._spawnApp<ShellRuntime>(
      this.userPreferences().globalSettings.shellExec,
      undefined,
      this.pid
    ); // Let's first spawn the shell exec from globalSettings

    // BUG 695905e6e49c74867e992655
    if (!proc) {
      MessageBox(
        {
          title: "Shell failed",
          message: "An error occurred while trying to spawn the shell. Please try again by restarting.",
          buttons: [{ caption: "Restart", action: () => Daemon.power?.restart(), suggested: true }],
          sound: "arcos.dialog.error",
          image: ErrorIcon,
        },
        Daemon.pid
      );
      return;
    }

    for (const id of this.shellComponents) {
      procs[id] = (await Daemon!.spawn?._spawnApp(id, undefined, this.pid))!; // Then spawn each shell component
    }

    const trayHost = procs.TrayHostProc as TrayHostRuntime; // Get the tray host

    await trayHost?.createTrayIcon(this.pid, "shellHost_loading", {
      icon: proc!.getIconCached("SpinnerIcon"),
    }); // Create the shellHost loading icon

    await new Promise<void>(async (r) => {
      while (!Env.get("shell_pid") || !Env.get("trayhost_pid") || !Env.get("arcfind_pid")) await Sleep(1);
      r();
    }); // Wait for the shell PID and trayhost PID to be set

    proc?.dispatch?.dispatch("ready"); // Dispatch ready command to the shell

    await Daemon?.version?.checkForNewVersion();

    for (const app of this.autoloadApps) {
      if (app === "shellHost") continue; // Ignore the shellHost in autoload

      await Daemon?.spawn?._spawnApp(app, undefined, this.pid); // Spawn autoload app
    }

    // Change the tray icon to good status icon
    trayHost?.trayIcons.update((v) => {
      v[`${this.pid}#shellHost_loading`]!.icon = proc!.getIconCached("GoodStatusIcon");
      return v;
    });

    await Sleep(1000); // Wait a second...
    await trayHost?.disposeTrayIcon(this.pid, "shellHost_loading"); // ...then dispose the tray icon
  }

  //#endregion
}
