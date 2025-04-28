import { RegisteredProcess } from "$ts/apps/util";
import { ComponentIcon } from "$ts/images/general";
import type { App } from "$types/app";
import { SystemShortcutsRuntime } from "./runtime";

export const SystemShortcuts: App = RegisteredProcess({
  metadata: {
    name: "SystemShortcutsProc",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: ComponentIcon,
  },
  assets: {
    runtime: SystemShortcutsRuntime,
  },
  id: "SystemShortcutsProc",
});
