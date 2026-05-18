import "$css/apps/components/masteroptions.css";
import type { App } from "$types/app";
import MasterOptions from "./MasterOptions.svelte";
import { MasterOptionsRuntime } from "./runtime";

const MasterOptionsApp: App = {
  metadata: {
    name: "Master Options",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "ElevationIcon",
  },
  position: { centered: true },
  size: { w: 400, h: 490 },
  minSize: { w: 400, h: 490 },
  maxSize: { w: 400, h: 490 },
  state: {
    maximized: false,
    minimized: false,
    resizable: false,
    fullscreen: false,
    headless: true,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: MasterOptionsRuntime,
    component: MasterOptions as any,
  },
  glass: false,
  elevated: false,
  hidden: true,
  core: false,
  overlay: false,
  noSafeMode: false,
  vital: true,
  id: "MasterOptions",
};

export default MasterOptionsApp;
