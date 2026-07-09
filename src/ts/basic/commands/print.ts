import { BasicCommand } from "../engine/command";

export class PrintCommand extends BasicCommand {
  static keyword: string = "print";

  async execute(line: string): Promise<string | undefined> {
    const strings = await this.interpreter.getStrings(line, false);

    await this.interpreter.sendToStdout(
      (await Promise.all(strings.map(async (s) => await this.interpreter.replaceVariables(s)))).join(" ")
    );

    return undefined;
  }
}
