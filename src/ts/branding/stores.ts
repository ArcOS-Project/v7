import {
  DevelopmentLogo as development,
  EsrLogo as esr,
  NightlyLogo as nightly,
  RcLogo as rc,
  ReleaseLogo as release,
  UnstableLogo as unstable,
  DevBranchLogo as devbranch,
  BetaBranchLogo as betabranch,
} from "$ts/images/branding";

export const MODES: Record<string, string> = {
  release,
  development,
  unstable,
  rc,
  esr,
  nightly,
  betabranch,
  devbranch
};

export const ALIASED_MODES: Record<string, string> = {
  release: "ReleaseLogo",
  development: "DevelopmentLogo",
  unstable: "UnstableLogo",
  rc: "RcLogo",
  esr: "EsrLogo",
  nightly: "NightlyLogo",
  devbranch: "DevBranchLogo",
  betabranch: "BetaBranchLogo",
};
