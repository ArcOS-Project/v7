import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import { UserDaemon } from "$ts/server/user/daemon";
import type { AppProcessData } from "$types/app";
import type { UserPreferencesStore } from "$types/user";

export class ShellHostRuntime extends Process {
  public _criticalProcess: boolean = true;
  readonly shellComponents: string[] = ["contextMenu", "SystemShortcutsProc"];
  userDaemon: UserDaemon | undefined;
  userPreferences: UserPreferencesStore;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, _: AppProcessData) {
    super(handler, pid, parentPid);

    this.userDaemon = this.handler.getProcess<UserDaemon>(+this.env.get("userdaemon_pid"));
    this.userPreferences = this.userDaemon!.preferences;
  }

  async start() {
    const proc = await this.userDaemon?._spawnApp<AppProcess>(
      this.userPreferences().globalSettings.shellExec,
      undefined,
      this.pid
    );

    for (const id of this.shellComponents) {
      await this.userDaemon?._spawnApp(id, undefined, this.pid);
    }

    this.env.set("shell_pid", proc?.pid);
    proc?.dispatch?.dispatch("ready");
  }
}
