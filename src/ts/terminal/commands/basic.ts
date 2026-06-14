import type { IArcTerminal } from "$interfaces/IArcTerminal";
import { ArcTermBasicConfig } from "$ts/basic/config/term";
import { ArcBasicEngine } from "$ts/basic/engine";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";

export class BasicCommand extends TerminalProcess {
  static keyword = "basic";
  static description = "Run ArcBasic code in the terminal";
  static allowInterrupt = true;
  private engine?: ArcBasicEngine;

  //#region LIFECYCLE

  protected async main(term: IArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const filename = argv.join(" ");

    this.engine = await ArcBasicEngine.FromSource(filename, {
      ...ArcTermBasicConfig(term),
      debug: !!flags.debug,
      slowdown: +flags.slowdown || 10,
    });

    this.rl?.println("");
    await this.engine.execute();
    this.rl?.println("");

    if (!this._disposed) return 0;

    // Keep going until interrupted by Ctrl+C
    return await new Promise<number>((r) => {
      if (this._disposed) r(0);
    });
  }

  async stop() {
    this.engine?.jumpEnd();
  }

  //#endregion
}
