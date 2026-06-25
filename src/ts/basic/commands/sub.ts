import { BasicCommand } from "../engine/command";

export class SubCommand extends BasicCommand {
  static keyword = "sub";

  async execute(line: string): Promise<string | undefined> {
    var endIdx = await this.interpreter.createSubRoutine(line);
    if (!endIdx) return;

    this.interpreter.jump(endIdx);
    return;
  }
}
