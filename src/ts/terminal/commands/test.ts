import type { TerminalCommand } from "$types/terminal";

export const TestCommand: TerminalCommand = {
  keyword: "test",
  async exec(term, flags, argv) {
    const result = await term.rl?.read("[sudo] Password for izkuipers: ", true);

    term.Info(`${result}`);

    return 0;
  },
  description: "test",
};
