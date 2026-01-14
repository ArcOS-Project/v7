import { Kernel, State, SysDispatch } from "$ts/env";
import { Sleep } from "$ts/sleep";
import { ShortLogLevelCaptions, type LogItem } from "$types/logging";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";
import { BRBLUE, RESET } from "../store";

export class ShutdownCommand extends TerminalProcess {
  public static keyword = "shutdown";
  public static description = "Shut down ArcOS";

  //#region LIFECYCLE

  protected async main(term: ArcTerminal) {
    if (this.term?.IS_ARCTERM_MODE) {
      term.rl?.println(`${BRBLUE}Goodbye.${RESET}`);

      SysDispatch.subscribe<[LogItem]>("kernel-log", ([data]) => {
        const timestamp = (data.timestamp - Kernel.startMs).toString().padStart(10, "0");
        const level = ShortLogLevelCaptions[data.level];
        const line = `[${timestamp}] ${level} ${data.source}: ${data.message}`;

        term.rl?.println(line);
      });

      await term.daemon?.serviceHost?.stop();
      await term.daemon?.killSelf();
      await Sleep(1000);

      State.loadState("turnedOff");
    } else {
      await term.daemon?.power?.shutdown();
    }

    return -256;
  }

  //#endregion
}
