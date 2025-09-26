import "$css/apps/user/donut.css";
import type { App } from "$types/app";
import Donut from "./Donut.svelte";
import { DonutAppRuntime } from "./runtime";

export const DonutApp: App = {
  metadata: {
    name: "Donut",
    version: "3.0.0",
    author: "Izaak Kuipers",
    icon: "DonutIcon",
    appGroup: "entertainment",
  },
  size: {
    w: 640,
    h: 480,
  },
  minSize: { w: 640, h: 540 },
  maxSize: { w: NaN, h: NaN },
  position: { centered: true },
  state: {
    minimized: false,
    maximized: false,
    headless: false,
    resizable: false,
    fullscreen: false,
  },
  controls: {
    minimize: true,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: DonutAppRuntime,
    component: Donut as any,
  },
  noSafeMode: true,
  id: "DonutApp",
  hidden: false,
  glass: true,
};

export default DonutApp;
