import { tryJsonParse } from "$ts/json";
import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
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

  protected async main(term: ArcTerminal, _: Arguments, argv: string[]): Promise<number> {
    const id = argv.shift();

    argv = argv.map(tryJsonParse);

    if (!id) {
      term.Error("missing app ID for _spawnApp call");
      return 1;
    }

    return (await term.daemon?.spawnContext!.spawnApp(id, term.daemon?.pid, ...argv)) ? 0 : 1;
  }
}
