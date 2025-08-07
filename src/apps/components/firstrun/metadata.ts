import "$css/apps/components/firstrun.css";
import { WaveIcon } from "$ts/images/general";
import type { App } from "$types/app";
import FirstRun from "./FirstRun.svelte";
import { FirstRunRuntime } from "./runtime";

export const FirstRunApp: App = {
  metadata: {
    name: "First Run",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: WaveIcon,
  },
  position: { centered: true },
  size: { w: 450, h: 350 },
  minSize: { w: 450, h: 350 },
  maxSize: { w: 450, h: 350 },
  state: {
    maximized: false,
    minimized: false,
    resizable: false,
    fullscreen: false,
    headless: true,
  },
  controls: {
    maximize: false,
    minimize: false,
    close: true,
  },
  assets: {
    component: FirstRun as any,
    runtime: FirstRunRuntime,
  },
  vital: true,
  hidden: true,
  glass: true,
  id: "FirstRun",
};
