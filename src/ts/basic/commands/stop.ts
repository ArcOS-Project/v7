import { BasicCommand } from "../engine/command";

export class StopCommand extends BasicCommand {
  static keyword = "stop";

  async execute(_: string): Promise<string | undefined> {
    this.interpreter.jumpEnd();
    return;
  }
}
