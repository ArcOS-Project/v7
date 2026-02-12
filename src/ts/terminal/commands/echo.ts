import type { IArcTerminal } from "$interfaces/terminal";
import { tryJsonParse } from "$ts/json";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";
import { BRBLUE, BRCYAN, BRPURPLE, BRYELLOW, RESET } from "../store";

export class EchoCommand extends TerminalProcess {
  public static keyword: string = "echo";
  public static description: string = "Echoes back the input";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal, _: Arguments, argv: string[]): Promise<number> {
    const thing = tryJsonParse(argv.join(" "));

    let result = "";
    let color = "";

    switch (typeof thing) {
      case "number":
        color = BRBLUE;
        result = `${thing}`;
        break;
      case "object":
        if (Array.isArray(thing)) {
          color = BRPURPLE;
          result = `[ ${thing.join(", ")} ]`;
        } else {
          color = BRCYAN;
          result = `${JSON.stringify(thing, null, 2)}`;
        }
        break;
      case "boolean":
        color = BRYELLOW;
        result = `${thing}`;
        break;
      default:
        color = RESET;
        result = `${thing}`;
        break;
    }

    term.rl?.println(`${color}${result}${RESET}`);

    return 0;
  }
}
