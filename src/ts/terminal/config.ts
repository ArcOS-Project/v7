import type { ArcTermConfiguration } from "$types/terminal";
import { DefaultColors } from "./colors";

export const DefaultArcTermConfiguration: ArcTermConfiguration = {
  prompt: `$BRGREEN$username$RESET: $BRGREEN$pwd $RESULTCOLOR$ $RESET`,
  greeting:
    "ArcTerm & ArcOS $BRBLUEv$version$RESET\r\n\r\nLicensed under $BRBLUEGPLv3$RESET. Created by Izaak Kuipers.\r\nType $BRBLUEHELP$RESET for a list of commands.\r\n",
  noLogo: false,
  red: DefaultColors.red,
  green: DefaultColors.green,
  yellow: DefaultColors.yellow,
  blue: DefaultColors.blue,
  cyan: DefaultColors.cyan,
  magenta: DefaultColors.magenta,
  background: DefaultColors.background,
  foreground: DefaultColors.foreground,
  brightBlack: DefaultColors.brightBlack,
  backdropOpacity: DefaultColors.backdropOpacity,
};
