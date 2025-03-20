import { isPopulatable } from "$ts/apps/util";
import type { App, InstalledApp } from "$types/app";
import type { TerminalCommand } from "$types/terminal";
import { BRBLUE, BRYELLOW, RESET } from "../store";

export const AppListCommand: TerminalCommand = {
  keyword: "applist",
  async exec(term, flags, argv) {
    const all = flags.a || flags.all;
    const store = await term.daemon?.appStore?.get();

    if (!store) {
      term.Error("ERR_NO_DAEMON");
      return 1;
    }

    header();

    for (const app of store) {
      if (!isPopulatable(app) && !all) continue;

      output(app);
    }

    function output(app: App | InstalledApp) {
      const aid = app.id.padEnd(30, " ");
      const name = app.metadata.name.padEnd(30, " ");
      const version = app.metadata.version;
      term.rl?.println(`${BRBLUE}${name}${RESET}${aid}${version}`);
    }

    function header() {
      const hName = `Name`.padEnd(30, " ");
      const hId = `ID`.padEnd(30, " ");
      const hVer = `Version`;

      const head = `${hName}${hId}${hVer}`;

      term.rl?.println(`${BRYELLOW}${head}${RESET}`);
      term.rl?.println("-".repeat(head.length));
    }

    return 0;
  },
  description: "Display a list of installed applications",
};
