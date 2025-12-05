import type { App } from "$types/app";
import ExecuteQuery from "./ExecuteQuery.svelte";
import { ExecuteQueryRuntime } from "./runtime";

const ExecuteQueryApp: App = {
  metadata: {
    name: "Execute Query",
    version: "1.0.0",
    author: "Izaak Kuipers",
    appGroup: "adminTools",
    icon: "ComponentIcon",
  },
  position: { centered: true },
  size: { w: 640, h: 480 },
  minSize: { w: 640, h: 480 },
  maxSize: { w: NaN, h: NaN },
  state: {
    maximized: true,
    minimized: false,
    resizable: true,
    fullscreen: false,
    headless: false,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  assets: {
    runtime: ExecuteQueryRuntime,
    component: ExecuteQuery as any,
  },
  glass: false,
  elevated: true,
  hidden: false,
  core: false,
  overlay: false,
  noSafeMode: false,
  vital: true,
  id: "ExecuteQuery",
};

export default ExecuteQueryApp;
