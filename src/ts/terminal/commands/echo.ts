import { tryJsonParse } from "$ts/json";
import type { TerminalCommand } from "$types/terminal";
import { BRBLUE, BRCYAN, BRPURPLE, BRYELLOW, RESET } from "../store";

export const EchoCommand: TerminalCommand = {
  keyword: "echo",
  async exec(term, flags, argv) {
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
  },
  description: "Echoes back the input",
};
