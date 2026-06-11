import { BasicCommand } from "../engine/command";

export class StopCommand extends BasicCommand {
  static keyword = "stop";

  async execute(line: string): Promise<string | undefined> {
        this.interpreter.jumpEnd();
    return;
  }
}
