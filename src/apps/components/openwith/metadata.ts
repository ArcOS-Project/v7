import { ComponentIcon } from "$ts/images/general";
import type { App } from "$types/app";
import OpenWith from "./OpenWith.svelte";
import { OpenWithRuntime } from "./runtime";
import "$css/apps/components/openwith.css";

export const OpenWithApp: App = {
  metadata: {
    name: "Open With",
    author: "Izaak Kuipers",
    version: "4.0.0",
    icon: ComponentIcon,
  },
  size: {
    w: 450,
    h: 500,
  },
  minSize: {
    w: 450,
    h: 500,
  },
  maxSize: {
    w: 450,
    h: 540,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  state: {
    minimized: false,
    maximized: false,
    fullscreen: false,
    headless: false,
    resizable: false,
  },
  position: {
    centered: true,
  },
  assets: {
    runtime: OpenWithRuntime,
    component: OpenWith as any,
  },
  hidden: true,
  glass: true,
  id: "OpenWith",
};
