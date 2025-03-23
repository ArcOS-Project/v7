import { tryJsonParse } from "$ts/json";
import type { TerminalCommand } from "$types/terminal";

export const KillCommand: TerminalCommand = {
  keyword: "kill",
  async exec(term, flags, argv) {
    const pid = tryJsonParse<number>(argv[0]) as number;
    const process = term.handler.getProcess(pid);

    if (!pid) {
      term.Error("Missing process ID.");
      return 1;
    }

    if (!process) {
      term.Error("Process not found");
      return 1;
    }

    return 0;
  },
  description: "Kill a process using its PID",
};
