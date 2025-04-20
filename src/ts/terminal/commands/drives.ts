import type { TerminalCommand } from "$types/terminal";
import { arrayToAsciiTable } from "../util";

export const DrivesCommand: TerminalCommand = {
  keyword: "drives",
  async exec(term, flags, argv) {
    const drives = term.fs.drives;
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
  },
  description: "Returns the drive mount table",
};
