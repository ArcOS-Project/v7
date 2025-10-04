import type { ArcTermConfiguration } from "$types/terminal";
import type { TerminalProcess } from "./process";

export const TerminalCommandStore: (typeof TerminalProcess)[] = [];

export const ESC = `\x1b[`;
export const BLACK = `${ESC}30m`;
export const RED = `${ESC}31m`;
export const GREEN = `${ESC}32m`;
export const YELLOW = `${ESC}33m`;
export const BLUE = `${ESC}34m`;
export const PURPLE = `${ESC}35m`;
export const CYAN = `${ESC}36m`;
export const WHITE = `${ESC}37m`;
export const BRBLACK = `${ESC}90m`;
export const BRRED = `${ESC}91m`;
export const BRGREEN = `${ESC}92m`;
export const BRYELLOW = `${ESC}93m`;
export const BRBLUE = `${ESC}94m`;
export const BRPURPLE = `${ESC}95m`;
export const BRCYAN = `${ESC}96m`;
export const BRWHITE = `${ESC}97m`;
export const RESET = `${ESC}0m`;
export const BOLD = `${ESC}1m`;
export const DIM = `${ESC}2m`;
export const UNDERLINE = `${ESC}4m`;
export const INVERTED = `${ESC}7m`;
export const HIDDEN = `${ESC}8m`;
export const CURUP = `${ESC}1A`;
export const CURDOWN = `${ESC}1B`;
export const CURLEFT = `${ESC}1C`;
export const CURRIGHT = `${ESC}1D`;
export const CLRROW = `${ESC}2K`;

export const DefaultArcTermConfiguration: ArcTermConfiguration = {
  prompt: `$BRGREEN$username$RESET: $BRGREEN$pwd $RESULTCOLOR$ $RESET`,
  greeting:
    "ArcTerm & ArcOS $BRBLUEv$version$RESET\r\n\r\nLicensed under $BRBLUEGPLv3$RESET. Created by Izaak Kuipers.\r\nType $BRBLUEHELP$RESET for a list of commands.\r\n",
  noLogo: false,
};
