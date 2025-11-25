import { Fs } from "$ts/env";
import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";
import { arrayToAsciiTable } from "../util";

export class DrivesCommand extends TerminalProcess {
  public static keyword = "drives";
  public static description = "Returns the drive mount table";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: ArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const drives = Fs.drives;
    const showHidden = flags.h || flags.hidden;
    const goTo = argv[0];

    if (goTo) {
      term.changeDirectory(`${goTo}:/`);
      return 0;
    }

    const table = [["Mount", "Flags", "FS", "Type", "Label"]];

    for (const driveId in drives) {
      const drive = drives[driveId];

      const hidden = drive.HIDDEN ? "H" : "";
      const removable = drive.REMOVABLE ? "R" : "";
      const fixed = drive.FIXED ? "F" : "";
      const filesystem = drive.FILESYSTEM_SHORT || drive.FILESYSTEM_LONG;
      const identifier = `${drive.driveLetter || drive.uuid}:`;

      if (drive.HIDDEN && !showHidden) continue;

      table.push([identifier, `${hidden}${removable}${fixed}`, filesystem, drive.IDENTIFIES_AS, drive.label]);
    }

    term.rl?.println(arrayToAsciiTable(table));

    return 0;
  }
}
