import { AppProcess } from "$ts/apps/process";
import type { TerminalCommand } from "$types/terminal";

export const ExitCommand: TerminalCommand = {
  keyword: "exit",
  async exec(term, flags, argv) {
    const proc = term.handler.getProcess<AppProcess>(term.parentPid);

    if (!(proc instanceof AppProcess)) {
      return 1;
    }
    await proc.closeWindow();

    return -256;
  },
  description: "Exit the terminal process",
};
