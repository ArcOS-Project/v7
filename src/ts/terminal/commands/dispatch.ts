import { KnownGlobalDispatchers, SystemOnlyDispatches } from "$ts/dispatch/store";
import { tryJsonParse } from "$ts/json";
import { tryParseInt } from "$ts/util";
import type { TerminalCommand } from "$types/terminal";
import { BRBLUE, RESET } from "../store";

export const DispatchCommand: TerminalCommand = {
  keyword: "dispatch",
  async exec(term, flags, argv) {
    const command = flags.cmd;
    const data = tryJsonParse(flags.data);
    const pid = tryParseInt(flags.pid, true);
    const list = flags.list;

    if (list) {
      term.rl?.println("Global dispatches known to ArcOS:");

      for (const key of KnownGlobalDispatchers) {
        const keyStr = key.padEnd(25, " ");

        term.rl?.println(`${SystemOnlyDispatches.includes(key) ? "#" : " "} ${BRBLUE}${keyStr}${RESET}`);
      }

      return 0;
    }

    if (!command || command === true) {
      term.Error("Nothing to dispatch!");
      return 1;
    }

    if (!pid) {
      const result = term.globalDispatch.dispatch(command, data, false);

      if (result !== "success") {
        term.Error(`failed: ${command}: ${result}`);

        return 1;
      }

      term.Info(`Dispatched ${BRBLUE}${command}${RESET} over GlobalDispatch.`);

      return 0;
    } else {
      const dispatch = term.handler.ConnectDispatch(+pid);

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
  },
  description: "Dispatch events to ArcOS or a specific process",
};
