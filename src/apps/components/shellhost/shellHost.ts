import { RegisteredProcess } from "$ts/util/apps";
import type { App } from "$types/app";
import { ShellHostRuntime } from "./runtime";

export const ShellHostApp: App = RegisteredProcess({
  metadata: {
    name: "ShellHost",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "ComponentIcon",
    appGroup: "coreApps",
  },
  assets: {
    runtime: ShellHostRuntime,
  },
  vital: true,
  id: "shellHost",
});

export default ShellHostApp;
