import "$css/apps/core/mobileblock.css";
import type { App } from "$types/app";
import MobileBlock from "./MobileBlock.svelte";
import { MobileBlockRuntime } from "./runtime";

export const MobileBlockApp: App = {
  metadata: {
    name: "MobileBlock",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "ComponentIcon",
  },
  size: {
    w: 0,
    h: 0,
  },
  minSize: {
    w: 0,
    h: 0,
  },
  maxSize: {
    w: 0,
    h: 0,
  },
  state: {
    minimized: false,
    maximized: false,
    headless: true,
    resizable: false,
    fullscreen: true,
  },
  controls: {
    maximize: false,
    minimize: false,
    close: false,
  },
  assets: {
    runtime: MobileBlockRuntime,
    component: MobileBlock as any,
  },
  position: { centered: true },
  core: true,
  hidden: true,
  id: "MobileBlock",
};

export default MobileBlockApp;
