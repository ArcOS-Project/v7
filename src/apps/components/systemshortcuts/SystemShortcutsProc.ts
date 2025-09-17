import { RegisteredProcess } from "$ts/apps/util";
import type { App } from "$types/app";
import { SystemShortcutsRuntime } from "./runtime";

export const SystemShortcuts: App = RegisteredProcess({
  metadata: {
    name: "SystemShortcutsProc",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "ComponentIcon",
    appGroup: "components",
  },
  assets: {
    runtime: SystemShortcutsRuntime,
  },
  vital: true,
  id: "SystemShortcutsProc",
});

export default SystemShortcuts;
