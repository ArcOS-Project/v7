import { SoundBus } from "$ts/env";
import { BasicCommand } from "../engine/command";

export class SoundbusCommand extends BasicCommand {
  static keyword = "soundbus";

  async execute(line: string): Promise<string | undefined> {
    const sound = (await this.interpreter.getStrings(line))?.[0] ?? line;
    SoundBus.playSound(sound);
    return;
  }
}
