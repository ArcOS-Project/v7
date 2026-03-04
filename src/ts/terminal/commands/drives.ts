import type { IArcTerminal } from "$interfaces/terminal";
import { Fs } from "$ts/env";
import { DriveCapabilityShorts } from "$ts/kernel/mods/fs/store";
import type { DriveCapabilities } from "$types/fs";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";
import { BRBLACK, BRBLUE, BRCYAN, BRGREEN, BRPURPLE, BRWHITE, BRYELLOW, RESET } from "../store";

export class DrivesCommand extends TerminalProcess {
  public static keyword = "drives";
  public static description = "Returns the drive mount table";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const drives = Fs.drives;
    const showHidden = flags.h || flags.hidden;
    const showCapabilities = flags.c || flags.capabilities;
    const identifies = flags.identifies;
    const fs = flags.fs;
    const goTo = argv[0];

    if (goTo) {
      term.changeDirectory(`${goTo}:/`);
      return 0;
    }

    for (const driveId in drives) {
      const drive = drives[driveId];
      if (!showHidden && drive.HIDDEN) continue;
      if (identifies && drive.IDENTIFIES_AS.toLowerCase() !== `${identifies}`.toLowerCase()) continue;
      if (fs && drive.FILESYSTEM_SHORT.toLowerCase() !== `${fs}`.toLowerCase()) continue;

      const fullCap = Object.keys(drive.CAPABILITIES) as DriveCapabilities[];
      const filteredCap = Object.entries(drive.CAPABILITIES)
        .filter(([_, v]) => !!v)
        .map(([k]) => k) as DriveCapabilities[];
      const shortCaps = fullCap.map((k) => (drive.CAPABILITIES[k] ? DriveCapabilityShorts[k] : "-")).join("");
      const hiddenFlag = drive.HIDDEN ? `${BRYELLOW}Hidden${RESET} ` : "";
      const removableFlag = drive.REMOVABLE ? `${BRPURPLE}Removable${RESET} ` : "";
      const fixedFlag = drive.FIXED ? `${BRGREEN}Fixed${RESET} ` : "";
      const identifier = `${BRBLUE}${drive.driveLetter || drive.uuid}:/${RESET}`;
      const label = `${BRBLUE}${drive.label ?? "NO_LABEL"}${RESET}`;
      const identifiesAs = `${BRCYAN}${drive.IDENTIFIES_AS}${RESET}`;
      const id = `${BRCYAN}${driveId}${RESET}`;
      const fullCapabilities = `${BRCYAN}${filteredCap.join(`${BRBLACK}, ${BRCYAN}`)}${RESET}`;
      const abbreviatedCapabilities = `${BRCYAN}${shortCaps} ${BRBLACK}(use --c to expand)${RESET}`;

      this.rl?.println("");
      this.rl?.println(`Drive ${label} on ${identifier}`);
      this.rl?.println(`  ${BRWHITE}Filesystem${RESET}: ${drive.FILESYSTEM_LONG} (${drive.FILESYSTEM_SHORT})`);
      this.rl?.println(`  ${BRWHITE}Identifies as${RESET}: ${identifiesAs} (ID ${id})`);
      this.rl?.println(`  ${BRWHITE}Flags${RESET}: ${hiddenFlag}${removableFlag}${fixedFlag}`);
      this.rl?.println(`  ${BRWHITE}Capabilities${RESET}: ${showCapabilities ? fullCapabilities : abbreviatedCapabilities}`);
    }

    return 0;
  }
}
