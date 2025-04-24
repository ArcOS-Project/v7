import { tryJsonParse } from "$ts/json";
import type { ProcessHandler } from "$ts/process/handler";
import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class SpawnCommand extends TerminalProcess {
  public static keyword = "spawn";
  public static description = "Spawn an app with specified arguments";

  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);
  }

  protected async main(term: ArcTerminal, _: Arguments, argv: string[]): Promise<number> {
    const id = argv.shift();

    argv = argv.map(tryJsonParse);

    if (!id) {
      term.Error("missing app ID for _spawnApp call");
      return 1;
    }

    return (await term.daemon?.spawnApp(id, term.daemon?.pid, ...argv)) ? 0 : 1;
  }
}
