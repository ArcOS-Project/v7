import { RegisteredProcess } from "$ts/apps/util";
import { ComponentIcon } from "$ts/images/general";
import type { App } from "$types/app";
import { ShellHostRuntime } from "./runtime";

export const ShellHostApp: App = RegisteredProcess({
  metadata: {
    name: "ShellHost",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: ComponentIcon,
  },
  assets: {
    runtime: ShellHostRuntime,
  },
  id: "shellHost",
});
