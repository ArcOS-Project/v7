import { getKMod } from "$ts/env";
import { getAllJsonPaths, getJsonHierarchy } from "$ts/hierarchy";
import { ElevationIcon } from "$ts/images/general";
import { tryJsonParse } from "$ts/json";
import { AdminBootstrapper } from "$ts/server/admin";
import { ElevationLevel } from "$types/elevation";
import type { ServerManagerType } from "$types/kernel";
import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";
import { BOLD, BRBLACK, BRRED, BRYELLOW, RESET, UNDERLINE } from "../store";
import { AdminCommandStore, RESULT_CAPTIONS } from "./admin/store";

export class AdminCommand extends TerminalProcess {
  public static keyword = "admin";
  public static description = "";
  public static hidden = true;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: ArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const elevated = await term.elevate({
      what: "ArcTerm wants to open the Administrator Console",
      title: "Administrator Console",
      description: "Izaak Kuipers",
      image: ElevationIcon,
      level: ElevationLevel.medium,
    });

    if (!elevated) return 1;

    const paths = getAllJsonPaths(AdminCommandStore).map((a) => a.replaceAll(".", " "));
    const admin = term.daemon?.serviceHost?.getService<AdminBootstrapper>("AdminBootstrapper");
    const server = getKMod<ServerManagerType>("server");

    term.term.clear();
    term.rl?.println(`ArcOS Administrator Console version 1.0.0\r\n\r\n© 2025 Izaak Z. Kuipers\r\nOn server: ${server.url}\r\n`);

    if (!admin) {
      term.Error("Access is denied.");

      return 1;
    }

    term.rl?.println(
      `${BRRED}${BOLD}WARNING!${RESET} Sensitive information may be displayed in query results.\r\n         ${BOLD}Do not share screenshots of this utility.${RESET}\r\n`
    );

    if (!term.daemon?.userInfo?.hasTotp && term.daemon?.userInfo?.admin) {
      term.Warning(
        `\r\nYou're an administrator ${BOLD}without two-factor authentication enabled${RESET}.\r\nThis is grounds for revoking of administrative privileges.\r\nPlease go to Settings and enable 2FA ${UNDERLINE}${BOLD}as soon as possible${RESET}.\r\n`,
        "Security Vulnerability"
      );
    }

    return new Promise<number>(async (r) => {
      const prompt = async () => {
        if (this._disposed) return r(255);
        if (!admin) return r(1);

        const response = await term.rl?.read(`${BRYELLOW}ADMIN${BRBLACK}>${RESET} `);

        if (response === "q") return r(0);
        if (response === ".clear") {
          term.term.clear();

          return await prompt();
        }

        for (const path of paths) {
          const text = `${response} `;
          if (text?.startsWith(`${path} `)) {
            const command = getJsonHierarchy<AdminCommandType>(AdminCommandStore, path.replaceAll(" ", "."));
            const result = await command?.(term, admin, text.replace(path, "").trim().split(" ").map(tryJsonParse));

            term.rl?.println(`${BRBLACK}?${RESULT_CAPTIONS[result ?? 4]}${RESET}`);

            return await prompt();
          }
        }

        term.rl?.println(`${BRRED}?COMMAND NOT FOUND${RESET}`);

        return await prompt();
      };

      await prompt();
    });
  }
}

export type AdminCommandType = (term: ArcTerminal, admin: AdminBootstrapper, argv: string[]) => Promise<number>;
