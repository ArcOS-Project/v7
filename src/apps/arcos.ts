import { RegisteredProcess } from "$ts/apps/util";
import { ArcOSVersion } from "$ts/env";
import { ReleaseLogo } from "$ts/images/branding";
import { InitProcess } from "$ts/kernel/init";
import type { App } from "$types/app";

export const ArcOSApp: App = RegisteredProcess({
  metadata: {
    name: "ArcOS",
    version: ArcOSVersion,
    author: "ArcOS Team",
    icon: ReleaseLogo,
  },
  assets: {
    runtime: InitProcess,
  },
  id: "ArcOS",
});
