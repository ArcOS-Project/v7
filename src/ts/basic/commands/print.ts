import { BasicCommand } from "../engine/command";

export class PrintCommand extends BasicCommand {
  static keyword: string = "print";

  async execute(line: string): Promise<string | undefined> {
    const strings = await this.interpreter.getStrings(line, true);

    await this.interpreter.output(strings.join(" "));

    return undefined;
  }
}
