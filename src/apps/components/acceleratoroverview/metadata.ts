import "$css/apps/components/acceleratoroverview.css";
import { KeyboardIcon } from "$ts/images/general";
import type { App } from "$types/app";
import AcceleratorOverview from "./AcceleratorOverview.svelte";
import { AcceleratorOverviewRuntime } from "./runtime";

export const AcceleratorOverviewApp: App = {
  metadata: {
    name: "Keyboard Shortcuts",
    author: "Izaak Kuipers",
    version: "2.0.0",
    icon: KeyboardIcon,
  },
  size: {
    w: 1000,
    h: 650,
  },
  minSize: {
    w: 1000,
    h: 650,
  },
  maxSize: {
    w: 1000,
    h: 650,
  },
  position: { centered: true },
  state: {
    minimized: false,
    maximized: false,
    resizable: false,
    fullscreen: false,
    headless: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: AcceleratorOverviewRuntime,
    component: AcceleratorOverview as any,
  },
  id: "AcceleratorOverview",
  hidden: true,
};
