import type { TerminalCommand } from "$types/terminal";

export const RestartCommand: TerminalCommand = {
  keyword: "restart",
  async exec(term, flags, argv) {
    term.daemon?.restart();
    return -256;
  },
  description: "Restart ArcOS",
};
