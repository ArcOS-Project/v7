import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class OpenCommand extends TerminalProcess {
  public static description = "Opens the specified file";
  public static keyword = "open";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);
  }

  //#endregion

  protected async main(term: ArcTerminal, _: Arguments, argv: string[]): Promise<number> {
    const filename = argv.join(" ");
    const shortcuts = Object.entries(term.contents?.shortcuts || {});
    const translated = shortcuts.filter(([_, v]) => v.name === filename).map(([k, v]) => ({ ...v, filename: k }))[0];

    if (translated) {
      await term.daemon?.openFile(term.join(translated.filename), translated);
      return 0;
    } else if (term.contents?.files?.map((f) => f.name)?.includes(filename)) {
      await term.daemon?.openFile(term.join(filename), term.contents?.shortcuts[filename]);
      return 0;
    } else {
      return 1;
    }
  }
}
