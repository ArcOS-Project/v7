import type { IProcess } from "$interfaces/process";
import type { IArcTerminal } from "$interfaces/terminal";
import { tryJsonParse } from "$ts/util/json";
import { Permissions } from "$ts/permissions";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";

export class SpawnCommand extends TerminalProcess {
  public static keyword = "spawn";
  public static description = "Spawn an app with specified arguments";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal, _: Arguments, argv: string[]): Promise<number> {
    const id = argv.shift();

    argv = argv.map(tryJsonParse);

    if (!id) {
      term.Error("missing app ID for _spawnApp call");
      return 1;
    }

    const proc = await term.daemon?.spawn?.spawnApp<IProcess>(id, term.daemon?.pid, ...argv);

    if (!proc) return 1;

    if (this.HAS_SUDO) Permissions.grantSudo(proc);

    return 0;
  }
}
