import { ApplicationStorage } from "$ts/apps/storage";
import { isPopulatable } from "$ts/apps/util";
import type { App, InstalledApp } from "$types/app";
import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";
import { BRBLUE, BRYELLOW, RESET } from "../store";

export class AppListCommand extends TerminalProcess {
  public static keyword = "applist";
  public static description = "Display a list of installed applications";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);
  }

  //#endregion

  async main(term: ArcTerminal, flags: Arguments) {
    const all = flags.a || flags.all;
    const countInstead = flags.c || flags.count;
    const store = term.daemon?.serviceHost?.getService<ApplicationStorage>("AppStorage")?.buffer();

    if (!store) {
      term.Error("ERR_NO_DAEMON");
      return 1;
    }

    if (countInstead) {
      term.Info(`Counting ${BRBLUE}${store.length}${RESET} applications`);
      return 0;
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
  }
}
