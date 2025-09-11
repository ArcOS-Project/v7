import { RegisteredProcess } from "$ts/apps/util";
import { ComponentIcon } from "$ts/images/general";
import type { App } from "$types/app";
import { TrayHostRuntime } from "./runtime";

export const TrayHost: App = RegisteredProcess({
  metadata: {
    name: "TrayHost",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: ComponentIcon,
    appGroup: "components",
  },
  assets: {
    runtime: TrayHostRuntime,
  },
  vital: true,
  id: "TrayHostProc",
});

export default TrayHost;
