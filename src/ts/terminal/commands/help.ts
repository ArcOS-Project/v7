import { maxLength } from "$ts/util";
import type { TerminalCommand } from "$types/terminal";
import { BRPURPLE, BRYELLOW, RESET, TerminalCommandStore } from "../store";

export const HelpCommand: TerminalCommand = {
  keyword: "help",
  async exec(term, flags, argv) {
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
  },
  description: "Shows a list of built-in ArcTerm commands",
};
