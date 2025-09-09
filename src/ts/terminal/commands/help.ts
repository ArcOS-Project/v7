import type { ProcessHandler } from "$ts/process/handler";
import { maxLength } from "$ts/util";
import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";
import { BRPURPLE, BRYELLOW, RESET, TerminalCommandStore } from "../store";

export class HelpCommand extends TerminalProcess {
  public static description: string = "Shows a list of built-in ArcTerm commands";
  public static keyword: string = "help";

  //#region ELCYCEFIL

  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);
  }

  //#endregion

  protected async main(term: ArcTerminal, flags: Arguments): Promise<number> {
    const showHidden = flags.a || flags.all;
    const maxLen = maxLength(
      TerminalCommandStore.map((c) => c.keyword),
      2
    );
    for (const command of TerminalCommandStore) {
      if (command.hidden && !showHidden) continue;
      term.rl?.println(
        `${command.hidden ? BRPURPLE : BRYELLOW}${command.keyword.padEnd(maxLen, " ")}${RESET}${command.description}`
      );
    }
    return 0;
  }
}
