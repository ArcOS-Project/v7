import type { TerminalCommand } from "$types/terminal";

export const CdCommand: TerminalCommand = {
  keyword: "cd",
  async exec(term, flags, argv) {
    const path = argv.join(" ");

    if (!path) return 1;

    return (await term.changeDirectory(term.join(path))) ? 0 : 1;
  },
  description: "Change the current directory",
};
