import type { IArcTerminal } from "$interfaces/IArcTerminal";
import { ArcTermBasicConfig } from "$ts/basic/config/term";
import { ArcBasicEngine } from "$ts/basic/engine";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";

export class BasicCommand extends TerminalProcess {
  static keyword = "basic";
  static description = "Run ArcBasic code in the terminal";

  //#region LIFECYCLE

  protected async main(term: IArcTerminal, _: Arguments, argv: string[]): Promise<number> {
    const filename = argv.join(" ");
    const engine = await ArcBasicEngine.FromSource(filename, ArcTermBasicConfig(term));

    this.rl?.println("");
    await engine.execute();
    this.rl?.println("");

    return 0;
  }

  //#endregion
}
