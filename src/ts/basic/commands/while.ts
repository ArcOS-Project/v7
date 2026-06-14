import { Sleep } from "$ts/sleep";
import { BasicCommand } from "../engine/command";
import { REGEXES } from "../engine/regex";

export class WhileCommand extends BasicCommand {
  static keyword = "while";

  async execute(line: string): Promise<string | undefined> {
    const match = line.match(REGEXES.WHILE);
    if (!match) return `Syntax error in WHILE`;

    this.interpreter.captureStackFrame("block", "while");

    const { not, expr, inline } = match.groups ?? {};
    const isInline = !!inline;
    const start = this.interpreter.programCounter + 1;
    const endling = !isInline ? await this.interpreter.findNextEndling("while") : undefined;

    const evaluate = async () => {
      const rawResult = await this.interpreter.expression(expr ?? "");
      if (this.interpreter.HALT) return false;
      return not ? !rawResult : !!rawResult;
    };

    while (await evaluate()) {
      await Sleep(this.interpreter.slowdown);
      if (this.interpreter.HALT) return;

      if (isInline) {
        await this.interpreter.parseLine(inline);
      } else {
        this.interpreter.jump(start);

        while (this.interpreter.programCounter < endling!) {
          this.interpreter.jumped = false;
          await this.interpreter.parseLine(this.interpreter.source[this.interpreter.programCounter]);
          if (this.interpreter.HALT) return;
          if (!this.interpreter.jumped) this.interpreter.programCounter++;
        }
      }
    }

    if (endling) this.interpreter.jump(endling + 1);
    return;
  }
}
