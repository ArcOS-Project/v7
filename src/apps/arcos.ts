import { RegisteredProcess } from "$ts/apps/util";
import { ArcOSVersion } from "$ts/env";
import { ReleaseLogo } from "$ts/images/branding";
import { InitProcess } from "$ts/kernel/init";
import type { App } from "$types/app";

// Dummy app metadata that can be used when ArcOS encounters
// an internal exception that can be handled by error.ts
export const ArcOSApp: App = RegisteredProcess({
  metadata: {
    name: "ArcOS",
    version: ArcOSVersion,
    author: "ArcOS Team",
    icon: ReleaseLogo,
  },
  assets: {
    // We need something, so might as well use the init
    runtime: InitProcess,
  },
  id: "ArcOS", // Note: might confict with older versions of NikN_ArcOS
});
