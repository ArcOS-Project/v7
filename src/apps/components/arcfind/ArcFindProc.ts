import { RegisteredProcess } from "$ts/util/apps";
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
