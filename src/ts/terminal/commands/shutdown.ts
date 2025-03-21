import type { TerminalCommand } from "$types/terminal";

export const ShutdownCommand: TerminalCommand = {
  keyword: "shutdown",
  async exec(term, flags, argv) {
    term.daemon?.shutdown();
    return -256;
  },
  description: "Shut down ArcOS",
};
