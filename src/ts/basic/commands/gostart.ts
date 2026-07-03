import { BasicCommand } from "../engine/command";

export class GostartCommand extends BasicCommand {
  static keyword = "gostart";

  async execute(line: string): Promise<string | undefined> {
    this.interpreter.jump(0);

    return;
  }
}
