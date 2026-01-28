import { SysDispatch } from "$ts/env";
import { logItemToStr, noop } from "$ts/util";
import type { LogItem } from "$types/logging";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class KlogCommand extends TerminalProcess {
  static override keyword: string = "klog";
  static override description: string = "Continuously reads the ArcOS kernel log";
  static override allowInterrupt: boolean = true;
  private eventId: number = -1;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);
  }

  async main(term: ArcTerminal): Promise<number> {
    this.eventId = SysDispatch.subscribe<[LogItem]>("kernel-log", ([data]) => {
      term.rl?.println(logItemToStr(data));
    });

    // Keep going until interrupted by Ctrl+C
    return await new Promise<number>((r) => {
      if (this._disposed) r(0);
    });
  }

  async stop() {
    if (this.eventId > 0) SysDispatch.unsubscribeId("kernel-log", this.eventId);
  }

  //#endregion
}
