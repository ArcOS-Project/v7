import type { IServerManager } from "$interfaces/modules/server";
import type { IArcTerminal } from "$interfaces/terminal";
import { ArcOSVersion, Env, getKMod, State } from "$ts/env";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { authcode } from "$ts/util";
import { formatBytes } from "$ts/util/fs";
import { getDeviceInfo } from "../../kernel/device";
import { TerminalProcess } from "../process";
import { BRBLACK, BRBLUE, BRCYAN, BRGREEN, BRPURPLE, BRRED, BRYELLOW, RESET } from "../store";

export class ArcFetchCommand extends TerminalProcess {
  static keyword: string = "arcfetch";
  static description: string = "View information about your device and ArcOS";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal): Promise<number> {
    term.rl?.println("");

    this.graphic(term);
    this.colorBar(term);

    term.rl?.println("");

    return 0;
  }

  getItems(term: IArcTerminal) {
    const server = getKMod<IServerManager>("server", true);
    const info = getDeviceInfo();
    const state = State?.currentState;

    return Object.entries({
      OS: `ArcOS ${ArcOSVersion}-${ArcMode()} (${ArcBuild()})`,
      Host: `${server?.url} ${BRBLACK}(${authcode() ? "Protected" : "Open"})${RESET}`,
      Username: `${Env.get("currentuser")} ${BRBLACK}(${Env.get("administrator") ? "Administrator" : "Regular User"})${RESET}`,
      Mode: `Browser ${BRBLACK}(on state ${state?.toUpperCase()})${RESET}`,
      Terminal: `PID ${term.pid} (${term.name}) on parent PID ${term.parentPid}`,
      CPU: `${info.cpu.cores} cores`,
      GPU: `${info.gpu.vendor} ${info.gpu.model}`,
      Memory: `~ ${formatBytes(info.mem.kb)}`,
    });
  }

  graphic(term: IArcTerminal) {
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

  colorBar(term: IArcTerminal) {
    term.rl?.println(`\n${" ".repeat(31)}${BRRED}██ ${BRGREEN}██ ${BRYELLOW}██ ${BRCYAN}██ ${BRCYAN}██ ${BRPURPLE}██${RESET} `);
  }
}
