import { BasicCommand } from "../engine/command";

export class ErrorCommand extends BasicCommand {
  static keyword = "error";

  async execute(line: string): Promise<string | undefined> {
    const strings = await this.interpreter.getStrings(line, true);
    await this.interpreter.error(strings[0], true, strings[0]);
    return;
  }
}
