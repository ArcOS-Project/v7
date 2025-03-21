import { ArcOSVersion } from "$ts/env";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import type { TerminalCommand } from "$types/terminal";
import { BRBLUE, RESET } from "../store";

export const VerCommand: TerminalCommand = {
  keyword: "ver",
  async exec(term, flags, argv) {
    term.rl?.println(`ArcTerm & ArcOS ${BRBLUE}v${ArcOSVersion}${RESET}-${ArcMode()} (${ArcBuild()})\n`);

    return 0;
  },
  description: "Reports the ArcOS version number",
};
