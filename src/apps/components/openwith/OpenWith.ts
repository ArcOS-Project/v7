import "$css/apps/components/openwith.css";
import { ComponentIcon } from "$ts/images/general";
import type { App } from "$types/app";
import OpenWith from "./OpenWith.svelte";
import { OpenWithRuntime } from "./runtime";

export const OpenWithApp: App = {
  metadata: {
    name: "Open With",
    author: "Izaak Kuipers",
    version: "4.0.0",
    icon: ComponentIcon,
    appGroup: "components",
  },
  size: {
    w: 480,
    h: 520,
  },
  minSize: {
    w: 480,
    h: 520,
  },
  maxSize: {
    w: 480,
    h: 520,
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
  vital: true,
  id: "OpenWith",
};

export default OpenWithApp;
