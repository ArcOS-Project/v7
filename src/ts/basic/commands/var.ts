import { BasicCommand } from "../engine/command";
import { REGEXES } from "../engine/regex";

export class VarCommand extends BasicCommand {
  static keyword = "var";

  async execute(line: string): Promise<string | undefined> {
    const match = line.match(REGEXES.VARSET);

    if (!match?.groups) return line;

    const { key, value } = match.groups ?? {};

    if (!key) {
      return "KEY?";
    }

    await this.interpreter.setVariable(key, value);
    return;
  }
}
