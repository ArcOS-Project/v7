import { BasicCommand } from "../engine/command";

export class EndsubCommand extends BasicCommand {
  static keyword = "endsub";

  async execute(_: string): Promise<string | undefined> {
    if (this.interpreter.suborigins.length)
      await this.interpreter.returnFromSubroutine();

    return;
  }
}
