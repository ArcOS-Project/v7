import { BasicCommand } from "../engine/command";
import { REGEXES } from "../engine/regex";

export class IfCommand extends BasicCommand {
  static keyword = "if";

  async execute(line: string): Promise<string | undefined> {
    const match = line.match(REGEXES.IF);
    if (!match) return line;

    const { not, expr, inline } = match.groups ?? {};
    const rawResult = await this.interpreter.expression(expr ?? "");
    const expressionMet = !!not ? !rawResult : !!rawResult;
    const isInline = !!inline;

    if (!expressionMet) {
      if (isInline) {
        return;
      } else {
        const endling = await this.interpreter.findNextEndling("if");
        if (!endling) return;

        this.interpreter.jump(endling + 1); // AFTER endling
      }
    }

    if (!!inline) {
      await this.interpreter.parseLine(inline);
    }

    return;
  }
}
