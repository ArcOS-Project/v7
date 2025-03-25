import type { TerminalCommand } from "$types/terminal";
import { BRBLACK, BRBLUE, RESET } from "../store";

export const ConfigCommand: TerminalCommand = {
  keyword: "config",
  async exec(term, flags, argv) {
    for (const [key, value] of Object.entries(term.config)) {
      term.rl?.println(`# ${BRBLUE}${key}${BRBLACK}:${RESET} ${value}`);
    }
    return 0;
  },
  description: "List the ArcTerm configuration",
};
