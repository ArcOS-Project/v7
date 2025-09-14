import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";
import { BRBLACK, RESET } from "../store";

export class HistoryCommand extends TerminalProcess {
  public static keyword = "history";
  public static description = "Show your ArcTerm history";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: ArcTerminal): Promise<number> {
    const pref = term.daemon?.preferences();

    if (!pref) return 1;

    const history: string[] = (pref.appPreferences.ArcTerm?.history || []).reverse();

    for (let i = 0; i < history.length; i++) {
      term.rl?.println(`${BRBLACK}${(i + 1).toString().padStart(4, " ")}${RESET} ${history[i]}`);
    }

    return 0;
  }
}
