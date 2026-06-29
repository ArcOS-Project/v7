import { BasicCommand } from "../engine/command";
import { REGEXES } from "../engine/regex";

export class VarCommand extends BasicCommand {
  static keyword = "var";

  async execute(line: string): Promise<string | undefined> {
    const match = line.match(REGEXES.VARSET);

    if (!match?.groups) return line;

    const { key, value, idx, hierarchy } = match.groups ?? {};

    if (!key) {
      return "Key?";
    }

    if (idx) await this.interpreter.assignToArray(key, idx, value);
    else if (hierarchy) await this.interpreter.assignToObject(key, hierarchy, value);
    else await this.interpreter.setVariable(key, value);

    return;
  }
}
