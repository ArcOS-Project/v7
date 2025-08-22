import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import type { Process } from "$ts/process/instance";
import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";
import { BRBLACK, BRBLUE, BRYELLOW, RESET } from "../store";

export class TasksCommand extends TerminalProcess {
  public static keyword = "tasks";
  public static description = "Display the running processes as a list or tree";

  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);
  }

  protected async main(term: ArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const tree = flags.tree || flags.t;
    const store = term.handler.store();

    if (!tree) {
      term.rl?.println("");

      for (const [pid, proc] of [...store]) {
        const name = proc instanceof AppProcess ? proc.app.data.metadata.name : proc.name;
        const color = proc instanceof AppProcess ? BRBLUE : RESET;
        term.rl?.println(`${BRYELLOW}${pid.toString().padStart(3, " ")}  ${color}${name}${RESET}`);
      }

      return 0;
    }

    function branch(proc: Process, indent = "", isLast = true) {
      const subProcesses = term.handler.getSubProcesses(proc.pid);
      const prefix = indent + (isLast ? "└── " : "├── ");

      term.rl?.println(
        `${prefix}${proc instanceof AppProcess ? proc.app.data.metadata.name : proc.name} ${BRBLACK}(${proc.pid})${RESET}`
      );

      if (subProcesses) {
        const subList = [...subProcesses.values()];
        const newIndent = indent + (isLast ? "    " : "│   ");

        subList.forEach((subProcess, index) => {
          branch(subProcess, newIndent, index === subList.length - 1);
        });
      }
    }

    term.rl?.println("\r\nKernelModule::stack");

    const entries = [...store].filter(([_, proc]) => !proc.parentPid);

    for (let i = 0; i < entries.length; i++) {
      const [_, proc] = entries[i];

      branch(proc, "", entries.length - 1 === i);
    }

    return 0;
  }
}
