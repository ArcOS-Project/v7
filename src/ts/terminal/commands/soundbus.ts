import type { IArcTerminal } from "$interfaces/terminal";
import { SoundBus } from "$ts/env";
import { maxLength } from "$ts/util";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";
import { BRBLUE, BRRED, RESET } from "../store";

export class SoundbusCommand extends TerminalProcess {
  static keyword = "soundbus";
  static description = "SoundBus CLI";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);
  }

  protected async main(term: IArcTerminal, _: Arguments, argv: string[]): Promise<number> {
    switch (argv[0]) {
      case "play":
        return this.playCommand();

      case "stop":
        return this.stopCommand();

      case "list":
        return this.listCommand();

      default:
        term.Error("Missing or invalid subcommand.");
        return 1;
    }
  }

  //#endregion
  //#region SUBCOMMANDS

  playCommand() {
    const sound = this.argv?.[1];
    if (!sound) {
      this.term?.Error("Missing arguments");
      return 1;
    }

    const valid = SoundBus.playSound(sound);

    if (!valid) {
      this.term?.Error(`Can't play sound ${BRRED}${sound}${RESET}: the sound could not be found.`);
      return 1;
    }

    this.term?.rl?.println(`Playing sound ${BRBLUE}${sound}${RESET}`);
    return 0;
  }

  stopCommand() {
    const sound = this.argv?.[1];
    if (!sound) {
      this.term?.Error("Missing arguments");
      return 1;
    }

    const valid = SoundBus.stopSound(sound);

    if (!valid) {
      this.term?.Error(`Can't stop sound ${BRRED}${sound}${RESET}: the sound could not be found.`);
      return 1;
    }

    this.term?.rl?.println(`Stopping sound ${BRBLUE}${sound}${RESET}`);
    return 0;
  }

  listCommand() {
    const sounds = SoundBus.getStore();

    const longest = maxLength(
      sounds.map((s) => s[0]),
      2
    );

    for (const sound of sounds) {
      const id = sound[0].padEnd(longest);
      const source = sound[1];

      this.term?.rl?.println(`${BRBLUE}${id}${RESET}${source}`);
    }

    return 0;
  }

  //#endregion
}
