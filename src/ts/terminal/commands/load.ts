import type { IProcess } from "$interfaces/process";
import type { IApplicationStorage } from "$interfaces/services/AppStorage";
import type { IArcTerminal } from "$interfaces/terminal";
import { Permissions } from "$ts/permissions";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";
import { BRBLACK, BRBLUE, RESET } from "../store";

export class LoadCommand extends TerminalProcess {
  static keyword = "load";
  static description = "Load an application module";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const path = argv.join(" ");
    const bypassVerification = !!flags["no-verify"];
    const open = !!flags.open;
    const noWorkspace = !!flags.nows;
    const asOverlay = !!flags.overlay;

    if (!path) {
      term.Error("Missing arguments");
      return 1;
    }

    const loadResult = await this.serviceHost
      ?.getService<IApplicationStorage>("AppStorage")
      ?.loadAppModuleFile(path, bypassVerification);

    if (!loadResult?.success) {
      term.Error(loadResult?.errorMessage ?? "Unknown error");
      return 1;
    }

    const app = loadResult.result!;

    this.rl?.println(
      `Loaded ${BRBLUE}${app.metadata.name}${RESET} (v${app.metadata.version}) by ${BRBLUE}${app.metadata.author}${RESET}`
    );

    if (!open) {
      this.rl?.println(`Use the following command to spawn this application:\n\n ${BRBLACK}$${RESET} spawn ${app.id}\n`);
    } else {
      const pid = this.daemon?.getShell()?.pid ?? this.daemon?.pid;
      const proc = await this.daemon?.spawn?.spawnApp<IProcess>(app.id, pid, {
        noWorkspace,
        asOverlay,
      });

      if (!proc) return 1;
      if (this.HAS_SUDO) Permissions.grantSudo(proc);

      return 0;
    }

    return 0;
  }
}
