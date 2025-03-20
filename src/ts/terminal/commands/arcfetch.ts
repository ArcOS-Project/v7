import { getDeviceInfo } from "$ts/device";
import { ArcOSVersion } from "$ts/env";
import { formatBytes } from "$ts/fs/util";
import { ServerManager } from "$ts/server";
import type { TerminalCommand } from "$types/terminal";
import { BRBLUE, BRCYAN, BRGREEN, BRPURPLE, BRRED, BRYELLOW, RESET } from "../store";

export const ArcFetchCommand: TerminalCommand = {
  keyword: "arcfetch",
  async exec(term, flags, argv) {
    function getItems() {
      const kernel = term.kernel;
      const server = kernel.getModule<ServerManager>("server", true);
      const info = getDeviceInfo();
      const state = term.kernel.state?.currentState;

      return Object.entries({
        OS: `ArcOS ${ArcOSVersion}-${term.kernel.ARCOS_MODE} (${term.kernel.ARCOS_BUILD})`,
        Host: `${server?.url} (${import.meta.env.DW_SERVER_AUTHCODE ? "Protected" : "Open"})`,
        Username: term.env.get("currentuser"),
        Mode: `Browser (on state ${state?.toUpperCase()})`,
        Terminal: `PID ${term.pid} (${term.name}) on parent PID ${term.parentPid}`,
        CPU: `${info.cpu.cores} cores`,
        GPU: `${info.gpu.vendor} ${info.gpu.model}`,
        Memory: `~ ${formatBytes(info.mem.kb)}`,
      });
    }

    function colorBar() {
      term.rl?.println(`\n${" ".repeat(31)}${BRRED}██ ${BRGREEN}██ ${BRYELLOW}██ ${BRCYAN}██ ${BRCYAN}██ ${BRPURPLE}██${RESET} `);
    }

    function graphic() {
      const items = getItems();

      const graphicParts = [
        "           ",
        "     /\\    ",
        "    /  \\   ",
        "   / /\\ \\  ",
        "  / ____ \\ ",
        " /_/    \\_\\",
        "           ",
        "           ",
      ];

      for (let i = 0; i < graphicParts.length; i++) {
        term.rl?.print(`  ${BRBLUE}${graphicParts[i]}${RESET}    `);

        if (items[i]) {
          term.rl?.print(`${BRPURPLE}${items[i][0].padEnd(12, " ")}${RESET}: ${items[i][1]}`);
        }

        term.rl?.println("");
      }
    }

    term.rl?.println("");

    graphic();
    colorBar();

    term.rl?.println("");

    return 0;
  },
  description: "",
};
