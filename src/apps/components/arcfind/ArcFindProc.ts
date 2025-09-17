import { RegisteredProcess } from "$ts/apps/util";
import type { App } from "$types/app";
import { ArcFindRuntime } from "./runtime";

const ArcFind: App = RegisteredProcess({
  metadata: {
    name: "ArcFind",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "ArcFindIcon",
  },
  assets: {
    runtime: ArcFindRuntime,
  },
  id: "ArcFindProc",
});

export default ArcFind;
