import type { IArcTerminal } from "$interfaces/terminal";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";
import { BRBLUE, RESET } from "../store";

export class Base64Command extends TerminalProcess {
  static keyword = "base64";
  static description: string = "Encode or decode a base64 string of text";

  //#region LIFECYCLE

  protected async main(term: IArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const keyword = argv.shift();
    const target = argv.join(" ");

    switch (keyword) {
      case "decode":
        term.rl?.println(`${target} -> ${BRBLUE}${atob(target)}${RESET}`);
        return 0;
      case "encode":
        term.rl?.println(`${target} -> ${BRBLUE}${btoa(target)}${RESET}`);
        return 0;
      default:
        term.Error("Invalid subcommand. Expected 'encode' or 'decode'.");
        return 1;
    }
  }

  //#endregion
}
