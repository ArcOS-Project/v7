import { BasicCommand } from "../engine/command";

export class GosubCommand extends BasicCommand {
  static keyword = "gosub";

  async execute(line: string): Promise<string | undefined> {
    await this.interpreter.goSubroutine(line.trim());
    return;
  }
}
