import "$css/apps/components/fsprogressfail.css";
import type { App } from "$types/app";
import FsProgressFail from "./FsProgressFail.svelte";
import { FsProgressFailRuntime } from "./runtime";

export const FsProgressFailApp: App = {
  metadata: {
    name: "FsProgressFail",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "WarningIcon",
  },
  position: { centered: true },
  size: { w: 390, h: 450 },
  minSize: { w: 390, h: 450 },
  maxSize: { w: 390, h: 450 },
  state: {
    minimized: false,
    maximized: false,
    resizable: false,
    headless: true,
    fullscreen: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: FsProgressFailRuntime,
    component: FsProgressFail as any,
  },
  hidden: true,
  vital: true,
  id: "FsProgressFail",
};

export default FsProgressFailApp;
