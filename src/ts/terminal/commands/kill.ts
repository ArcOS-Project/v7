import { AppProcess } from "$ts/apps/process";
import { tryJsonParse } from "$ts/json";
import { ElevationLevel } from "$types/elevation";
import type { TerminalCommand } from "$types/terminal";
import { SelectionList } from "../select";

export const KillCommand: TerminalCommand = {
  keyword: "kill",
  async exec(term, flags, argv) {
    const force = flags.force || flags.f;
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

    const elevated = await term.elevate({
      what: "ArcOS needs your permission to kill a process",
      image: "",
      title: process.name,
      description: process instanceof AppProcess ? "Application" : "Process",
      level: ElevationLevel.high,
    });

    if (!elevated) return 1;

    if (force) {
      const select = new SelectionList(term.term, ["Yes", "No"], "Force flag specified. Are you sure?");

      await select.show();

      if (select.selectedIndex !== 0) return 1;
    }

    const result = await term.handler.kill(process.pid, !!force);

    if (result !== "success") {
      term.Error(result);
      return 1;
    }

    return 0;
  },
  description: "Kill a process using its PID",
};
