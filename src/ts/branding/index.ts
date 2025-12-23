import { ReleaseLogo } from "$ts/images/branding";
import { ChristmasLogo } from "$ts/images/branding";
import { ArcMode } from "$ts/metadata/mode";
import { TryGetDaemon } from "$ts/server/user/daemon";
import { ALIASED_MODES, MODES } from "./stores";

export const Logo = () => {
  const daemon = TryGetDaemon();
  
  const d = new Date();
  if (d.getDate() >= 24 && d.getDate() <= 26 && d.getMonth() === 11) // Check whether to enable the Christmas logo
    return ChristmasLogo;
  
  const defaultLogo = daemon?.icons!.getIconCached?.("ReleaseLogo") || ReleaseLogo;

  return (daemon ? daemon.icons!.getIconCached(ALIASED_MODES[ArcMode()]) : MODES[ArcMode()]) || defaultLogo;
};
