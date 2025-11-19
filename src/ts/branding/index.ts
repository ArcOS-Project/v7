import { ReleaseLogo } from "$ts/images/branding";
import { ArcMode } from "$ts/metadata/mode";
import { TryGetDaemon } from "$ts/server/user/daemon";
import { ALIASED_MODES, MODES } from "./stores";

export const Logo = () => {
  const daemon = TryGetDaemon();
  const defaultLogo = daemon?.icons!.getIconCached?.("ReleaseLogo") || ReleaseLogo;

  return (daemon ? daemon.icons!.getIconCached(ALIASED_MODES[ArcMode()]) : MODES[ArcMode()]) || defaultLogo;
};
