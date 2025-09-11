import "$css/apps/user/processmanager.css";
import { ProcessManagerIcon } from "$ts/images/apps";
import type { App } from "$types/app";
import ProcessManager from "./ProcessManager.svelte";
import { ProcessManagerRuntime } from "./runtime";

export const ProcessesApp: App = {
  metadata: {
    name: "Processes",
    version: "3.0.0",
    author: "Izaak Kuipers",
    icon: ProcessManagerIcon,
    appGroup: "systemTools",
  },
  size: {
    w: 750,
    h: 500,
  },
  minSize: {
    w: 750,
    h: 500,
  },
  maxSize: {
    w: 950,
    h: 700,
  },
  controls: {
    minimize: false,
    maximize: true,
    close: true,
  },
  state: {
    minimized: false,
    maximized: false,
    resizable: true,
    headless: false,
    fullscreen: false,
  },
  position: { centered: true },
  assets: {
    runtime: ProcessManagerRuntime,
    component: ProcessManager as any,
  },
  vital: true,
  id: "processManager",
};

export default ProcessesApp;
