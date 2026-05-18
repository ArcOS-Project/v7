import type { IArcTerminal } from "$interfaces/terminal";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";

export class TostrCommand extends TerminalProcess {
  static keyword = "tostr";
  static description: string = "Convert something to a string";

  //#region LIFECYCLE

  protected async main(term: IArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const radix = Number.isInteger(+flags.radix) ? (+flags.radix as number) : 16;
    const join = flags.join;

    if (radix && (radix < 2 || radix > 36)) {
      term.Error("Radix has to be between 2 and 36");
      return 1;
    }

    const input = argv
      .join(" ")
      .split("")
      .map((s) => s.charCodeAt(0).toString(radix));

    const result = input.join(typeof join === "string" && join ? join : "");
    term.rl?.println(result);
    return 0;
  }

  //#endregion
}
