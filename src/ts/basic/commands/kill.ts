import { BasicCommand } from "../engine/command";

export class KillCommand extends BasicCommand {
  static keyword = "kill";

  async execute(_: string): Promise<string | undefined> {
    await this.interpreter.error("This command isn't implemented");
    return;
  }
}
