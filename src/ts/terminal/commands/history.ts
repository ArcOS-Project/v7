import type { TerminalCommand } from "$types/terminal";
import { BRBLACK, RESET } from "../store";

export const HistoryCommand: TerminalCommand = {
  keyword: "history",
  async exec(term, flags, argv) {
    const pref = term.daemon?.preferences();

    if (!pref) return 1;

    const history: string[] = (pref.appPreferences.ArcTerm?.history || []).reverse();

    for (let i = 0; i < history.length; i++) {
      term.rl?.println(`${BRBLACK}${(i + 1).toString().padStart(4, " ")}${RESET} ${history[i]}`);
    }

    return 0;
  },
  description: "Show your ArcTerm history",
};
