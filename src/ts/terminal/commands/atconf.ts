import type { TerminalCommand } from "$types/terminal";

export const AtConfCommand: TerminalCommand = {
  keyword: "atconf",
  async exec(term, flags, argv) {
    await term.daemon?.openFile("U:/arcterm.conf");
    return 0;
  },
  description: "Edit the ArcTerm configuration file",
};
