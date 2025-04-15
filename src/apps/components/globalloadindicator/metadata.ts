import "$css/apps/components/globalloadindicator.css";
import { ComponentIcon } from "$ts/images/general";
import type { App } from "$types/app";
import GlobalLoadIndicator from "./GlobalLoadIndicator.svelte";
import { GlobalLoadIndicatorRuntime } from "./runtime";

export const GlobalLoadIndicatorApp: App = {
  metadata: {
    name: "globalLoadIndicator",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: ComponentIcon,
  },
  size: {
    w: NaN,
    h: NaN,
  },
  minSize: {
    w: 320,
    h: 80,
  },
  maxSize: {
    w: 500,
    h: 260,
  },
  state: {
    minimized: false,
    maximized: false,
    resizable: false,
    headless: true,
    fullscreen: false,
  },
  controls: {
    close: false,
    minimize: false,
    maximize: false,
  },
  position: { centered: true },
  assets: {
    runtime: GlobalLoadIndicatorRuntime,
    component: GlobalLoadIndicator as any,
  },
  hidden: true,
  id: "GlobalLoadIndicator",
};
