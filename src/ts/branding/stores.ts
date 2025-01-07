import {
  DevelopmentLogo as development,
  EsrLogo as esr,
  RcLogo as rc,
  ReleaseLogo as release,
  UnstableLogo as unstable,
} from "$ts/images/branding";

export const MODES: Record<string, string> = {
  release,
  development,
  unstable,
  rc,
  esr,
};
