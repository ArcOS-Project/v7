import type { IArcTerminal } from "$interfaces/IArcTerminal";
import type { IProcess } from "$interfaces/IProcess";
import { Stack } from "$ts/env";
import { ProcessesHelper } from "$ts/helpers/processes";
import type { Arguments } from "$types/terminal";
import { BRBLACK, BRBLUE, BRYELLOW, RESET } from "../colors";
import { TerminalProcess } from "../process";

export class TasksCommand extends TerminalProcess {
  public static keyword = "tasks";
  public static description = "Display the running processes as a list or tree";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const tree = flags.tree || flags.t;
    const store = Stack.store();

    if (!tree) {
      this.rl?.println("");

      for (const [pid, proc] of [...store]) {
        const name = ProcessesHelper.IsAnyAppProcess(proc) ? proc.app.data.metadata.name : proc.name;
        const color = ProcessesHelper.IsAnyAppProcess(proc) ? BRBLUE : RESET;
        term.rl?.println(`${BRYELLOW}${pid.toString().padStart(3, " ")}  ${color}${name}${RESET}`);
      }

      return 0;
    }

    this.rl?.println("\r\nKernelModule::stack");

    const entries = [...store].filter(([_, proc]) => !proc.parentPid);

    for (let i = 0; i < entries.length; i++) {
      const [_, proc] = entries[i];

      this.branch(proc, "", entries.length - 1 === i);
    }

    return 0;
  }

  branch(proc: IProcess, indent = "", isLast = true) {
    const subProcesses = Stack.getSubProcesses(proc.pid);
    const prefix = indent + (isLast ? "└── " : "├── ");

    this.rl?.println(
      `${prefix}${ProcessesHelper.IsAnyAppProcess(proc) ? proc.app.data.metadata.name : proc.name} ${BRBLACK}(${proc.pid})${RESET}`
    );

    if (subProcesses) {
      const subList = [...subProcesses.values()];
      const newIndent = indent + (isLast ? "    " : "│   ");

      subList.forEach((subProcess, index) => {
        this.branch(subProcess, newIndent, index === subList.length - 1);
      });
    }
  }
}
