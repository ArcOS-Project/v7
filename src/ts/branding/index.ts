import { ReleaseLogo } from "$ts/images/branding";
import { ArcMode } from "$ts/metadata/mode";
import { MODES } from "./stores";

export const Logo = (m?: string) => MODES[m || ArcMode()] || ReleaseLogo;
