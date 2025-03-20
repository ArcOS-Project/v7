import type { TerminalCommand } from "$types/terminal";

export const ClearCommand: TerminalCommand = {
  keyword: "clear",
  exec(term, flags, argv) {
    term.term.clear();
    return 0;
  },
  description: "Clear the terminal",
};
