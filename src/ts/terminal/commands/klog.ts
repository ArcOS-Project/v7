import { SysDispatch } from "$ts/env";
import { logItemToStr } from "$ts/util";
import type { LogItem } from "$types/logging";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class KlogCommand extends TerminalProcess {
  static override keyword: string = "klog";
  static override description: string = "Continuously reads the ArcOS kernel log";

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);
  }

  async main(term: ArcTerminal): Promise<number> {
    SysDispatch.subscribe<[LogItem]>("kernel-log", ([data]) => {
      term.rl?.println(logItemToStr(data));
    });

    return -256;
  }
}
