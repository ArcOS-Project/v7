// import { KnownSystemDispatchers, SystemOnlyDispatches } from "$ts/kernel/mods/dispatch/store";
import { KernelStack } from "$ts/env";
import { tryJsonParse } from "$ts/json";
import { tryParseInt } from "$ts/util";
import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";
import { BRBLUE, RESET } from "../store";

export class DispatchCommand extends TerminalProcess {
  public static keyword: string = "dispatch";
  public static description: string = "Dispatch events to ArcOS or a specific process";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: ArcTerminal, flags: Arguments): Promise<number> {
    const command = flags.cmd;
    const data = tryJsonParse(flags.data);
    const pid = tryParseInt(flags.pid, true);
    const list = flags.list;

    if (list) {
      term.rl?.println("Global dispatches known to ArcOS:");

      // for (const key of KnownSystemDispatchers) {
      //   const keyStr = key.padEnd(25, " ");

      //   term.rl?.println(`${SystemOnlyDispatches.includes(key) ? "#" : " "} ${BRBLUE}${keyStr}${RESET}`);
      // }

      return 0;
    }

    if (!command || command === true) {
      term.Error("Nothing to dispatch!");
      return 1;
    }

    if (!pid) {
      const result = term.systemDispatch.dispatch(command, data, false);

      if (result !== "success") {
        term.Error(`failed: ${command}: ${result}`);

        return 1;
      }

      term.Info(`Dispatched ${BRBLUE}${command}${RESET} over SystemDispatch.`);

      return 0;
    } else {
      const dispatch = KernelStack().ConnectDispatch(+pid);

      if (!dispatch) {
        term.Error(`Failed to connect to dispatch of PID ${pid}`);

        return 1;
      }

      const result = await dispatch.dispatch(command, ...(data || []));

      if (!result) {
        term.Error(`Failed to dispatch "${command}": not found.`);

        return 1;
      }

      term.Info(`Dispatched ${BRBLUE}${command}${RESET} to process ${BRBLUE}${pid}${RESET} over ProcessDispatch`);

      return 0;
    }
  }
}
