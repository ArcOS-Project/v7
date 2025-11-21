import { TerminalWindowRuntime } from "$apps/components/terminalwindow/runtime";
import { Env, Stack } from "$ts/env";
import { Process } from "$ts/process/instance";
import { UserDaemon } from "$ts/server/user/daemon";
import { ArcTerminal } from "$ts/terminal";
import type { AppProcessData } from "$types/app";

export class ArcTermRuntime extends Process {
  term: ArcTerminal | undefined;
  path: string | undefined;
  app: AppProcessData;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, path?: string) {
    super(pid, parentPid);

    this.path = path;
    this.app = app;

    this.name = "ArcTermRuntime";

    this.setSource(__SOURCE__);
  }

  protected async start(): Promise<any> {
    const daemonPid = +Env.get("userdaemon_pid");
    const daemon = Stack.getProcess<UserDaemon>(daemonPid);

    if (!daemon) return false;

    const proc = await daemon.spawn?.spawnApp<TerminalWindowRuntime>("TerminalWindow", this.pid);

    if (!proc) return false;

    proc.app = this.app;
    proc.windowTitle.set("ArcTerm");
    proc.windowIcon.set(this.app.data.metadata.icon);

    this.term = await Stack.spawn<ArcTerminal>(
      ArcTerminal,
      daemon.workspaces?.getCurrentDesktop(),
      daemon.userInfo?._id,
      proc.pid,
      proc.term,
      this.path
    );
  }

  //#endregion
}
