import { Daemon } from "$ts/daemon";
import { ChristmasLogo, ReleaseLogo } from "$ts/images/branding";
import { ArcMode } from "$ts/metadata/mode";
import { ALIASED_MODES, MODES } from "./stores";

export const Logo = () => {
  const d = new Date();
  if ((d.getDate() >= 24 && d.getMonth() === 11) || (d.getMonth() === 0 && d.getDate() <= 4))
    // Check whether to enable the Christmas logo
    return ChristmasLogo;

  const defaultLogo = Daemon?.icons!.getIconCached?.("ReleaseLogo") || ReleaseLogo;

  return (Daemon ? Daemon.icons!.getIconCached(ALIASED_MODES[ArcMode()]) : MODES[ArcMode()]) || defaultLogo;
};
