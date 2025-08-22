import { RegisteredProcess } from "$ts/apps/util";
import { ArcFindIcon } from "$ts/images/general";
import type { App } from "$types/app";
import { ArcFindRuntime } from "./runtime";

export const ArcFind: App = RegisteredProcess({
  metadata: {
    name: "ArcFind",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: ArcFindIcon,
  },
  assets: {
    runtime: ArcFindRuntime,
  },
  id: "ArcFindProc",
});
