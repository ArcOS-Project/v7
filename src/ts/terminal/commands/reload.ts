import type { TerminalCommand } from "$types/terminal";

export const ReloadCommand: TerminalCommand = {
  keyword: "reload",
  async exec(term) {
    await term.reload();
    return 0;
  },
  description: "Reload the terminal",
};
