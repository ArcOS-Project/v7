import { getDeviceInfo } from "$ts/device";
import { ArcOSVersion } from "$ts/env";
import { formatBytes } from "$ts/fs/util";
import type { ProcessHandler } from "$ts/process/handler";
import { ServerManager } from "$ts/server";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";
import { BRBLACK, BRBLUE, BRCYAN, BRGREEN, BRPURPLE, BRRED, BRYELLOW, RESET } from "../store";

export class ArcFetchCommand extends TerminalProcess {
  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);
  }

  protected async main(term: ArcTerminal): Promise<number> {
    term.rl?.println("");

    this.graphic(term);
    this.colorBar(term);

    term.rl?.println("");

    return 0;
  }

  getItems(term: ArcTerminal) {
    const kernel = term.kernel;
    const server = kernel.getModule<ServerManager>("server", true);
    const info = getDeviceInfo();
    const state = term.kernel.state?.currentState;

    return Object.entries({
      OS: `ArcOS ${ArcOSVersion}-${term.kernel.ARCOS_MODE} (${term.kernel.ARCOS_BUILD})`,
      Host: `${server?.url} ${BRBLACK}(${import.meta.env.DW_SERVER_AUTHCODE ? "Protected" : "Open"})${RESET}`,
      Username: `${term.env.get("currentuser")} ${BRBLACK}(${
        term.env.get("administrator") ? "Administrator" : "Regular User"
      })${RESET}`,
      Mode: `Browser ${BRBLACK}(on state ${state?.toUpperCase()})${RESET}`,
      Terminal: `PID ${term.pid} (${term.name}) on parent PID ${term.parentPid}`,
      CPU: `${info.cpu.cores} cores`,
      GPU: `${info.gpu.vendor} ${info.gpu.model}`,
      Memory: `~ ${formatBytes(info.mem.kb)}`,
    });
  }

  graphic(term: ArcTerminal) {
    const items = this.getItems(term);

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

  colorBar(term: ArcTerminal) {
    term.rl?.println(`\n${" ".repeat(31)}${BRRED}██ ${BRGREEN}██ ${BRYELLOW}██ ${BRCYAN}██ ${BRCYAN}██ ${BRPURPLE}██${RESET} `);
  }
}
