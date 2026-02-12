import type { IArcTerminal } from "$interfaces/terminal";
import { Stack } from "$ts/env";
import { tryJsonParse } from "$ts/json";
import { ProcessKillResultCaptions } from "$ts/process/store";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";

export class KillCommand extends TerminalProcess {
  public static keyword = "kill";
  public static description = "Kill a process using its PID";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const pid = tryJsonParse<number>(argv[0]) as number;
    const process = Stack.getProcess(pid);

    if (!pid) {
      term.Error("Missing process ID.");
      return 1;
    }

    if (!process) {
      term.Error("Process not found");
      return 1;
    }

    if (!this.HAS_SUDO && process._criticalProcess) {
      term.Error("Can't kill a critical process without sudo");
      return 1;
    }

    const result = await Stack.kill(process.pid, !!this.HAS_SUDO);

    if (result !== "success") {
      term.Error(ProcessKillResultCaptions[result]);
      return 1;
    }

    return 0;
  }
}
