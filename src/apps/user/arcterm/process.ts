import { TerminalWindowRuntime } from "$apps/components/terminalwindow/runtime";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import { UserDaemon } from "$ts/server/user/daemon";
import { ArcTerminal } from "$ts/terminal";
import type { AppProcessData } from "$types/app";

export class ArcTermRuntime extends Process {
  term: ArcTerminal | undefined;
  path: string | undefined;
  app: AppProcessData;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, path?: string) {
    super(handler, pid, parentPid);

    this.path = path;
    this.app = app;

    this.name = "ArcTermRuntime";
  }

  protected async start(): Promise<any> {
    const daemonPid = +this.env.get("userdaemon_pid");
    const daemon = this.handler.getProcess<UserDaemon>(daemonPid);

    if (!daemon) return false;

    const proc = await daemon.spawnApp<TerminalWindowRuntime>("TerminalWindow", this.pid);

    if (!proc) return false;

    proc.app = this.app;
    proc.windowTitle.set("ArcTerm");
    proc.windowIcon.set(this.app.data.metadata.icon);

    this.term = await this.handler.spawn<ArcTerminal>(ArcTerminal, daemon.getCurrentDesktop(), proc.pid, proc.term, this.path);
  }
}
