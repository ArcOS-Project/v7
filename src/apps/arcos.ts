import { SacrudaVersion } from "$ts/env";
import { ReleaseLogo } from "$ts/images/branding";
import { Process } from "$ts/kernel/mods/stack/process/instance";
import { RegisteredProcess } from "$ts/util/apps";
import type { App } from "$types/apps/app";

// Dummy app metadata that can be used when Sacruda encounters
// an internal exception that can be handled by error.ts
export const SacrudaApp: App = RegisteredProcess({
  metadata: {
    name: "Sacruda",
    version: SacrudaVersion,
    author: "Sacruda Team",
    icon: ReleaseLogo,
  },
  assets: {
    runtime: Process,
  },
  id: "Sacruda",
});
