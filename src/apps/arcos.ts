import { RegisteredProcess } from "$ts/util/apps";
import { ArcOSVersion } from "$ts/env";
import { ReleaseLogo } from "$ts/images/branding";
import { Process } from "$ts/kernel/mods/stack/process/instance";
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
    runtime: Process,
  },
  id: "ArcOS", // Note: might confict with older versions of NikN_ArcOS
});
