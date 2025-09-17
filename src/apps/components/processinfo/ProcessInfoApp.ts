import "$css/apps/components/processinfo.css";
import type { App } from "$types/app";
import ProcessInfo from "./ProcessInfo.svelte";
import { ProcessInfoRuntime } from "./runtime";

export const ProcessInfoApp: App = {
  metadata: {
    name: "Process Info",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "ComponentIcon",
  },
  position: { centered: true },
  size: { w: 500, h: 550 },
  minSize: { w: 500, h: 550 },
  maxSize: { w: 500, h: 550 },
  state: {
    minimized: false,
    maximized: false,
    fullscreen: false,
    headless: false,
    resizable: false,
  },
  controls: {
    minimize: true,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: ProcessInfoRuntime,
    component: ProcessInfo as any,
  },
  vital: true,
  hidden: true,
  id: "ProcessInfoApp",
};

export default ProcessInfoApp;
