import { ArcOSVersion } from "$ts/env";
import { getAllJsonPaths, getJsonHierarchy } from "$ts/hierarchy";
import { tryJsonParse } from "$ts/json";
import { ServerManager } from "$ts/server";
import type { AdminBootstrapper } from "$ts/server/admin";
import type { TerminalCommand } from "$types/terminal";
import type { ArcTerminal } from "..";
import { BRBLACK, BRRED, BRYELLOW, RESET } from "../store";
import { AdminCommandStore, RESULT_CAPTIONS } from "./admin/store";

export const AdminCommand: TerminalCommand = {
  keyword: "admin",
  async exec(term, flags, argv) {
    const paths = getAllJsonPaths(AdminCommandStore).map((a) => a.replaceAll(".", " "));
    const admin = term.daemon?.admin;
    const server = term.kernel.getModule<ServerManager>("server");

    term.term.clear();

    term.rl?.println(`ArcOS Administrator CLI version 1.0.0\r\n\r\n© 2025 Izaak Z. Kuipers\r\nOn server: ${server.url}\r\n`);

    if (!admin) {
      term.Error("Access is denied.");

      return 1;
    }

    return new Promise<number>(async (r) => {
      async function prompt() {
        if (!admin) return r(1);

        const response = await term.rl?.read(`${BRYELLOW}ADMIN${BRBLACK}>${RESET} `);

        if (response === "q") return r(0);
        if (response === ".clear") {
          term.term.clear();

          return await prompt();
        }

        for (const path of paths) {
          if (response?.startsWith(path)) {
            const command = getJsonHierarchy<AdminCommand>(AdminCommandStore, path.replaceAll(" ", "."));
            const result = await command?.(term, admin, response.replace(path, "").trim().split(" ").map(tryJsonParse));

            term.rl?.println(`${BRBLACK}?${RESULT_CAPTIONS[result ?? 4]}${RESET}`);

            return await prompt();
          }
        }

        term.rl?.println(`${BRRED}?COMMAND NOT FOUND${RESET}`);

        return await prompt();
      }

      await prompt();
    });
  },
  description: "",
};

export type AdminCommand = (term: ArcTerminal, admin: AdminBootstrapper, argv: string[]) => Promise<number>;
