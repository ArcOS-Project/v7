import "$css/apps/components/globalloadindicator.css";
import type { App } from "$types/app";
import GlobalLoadIndicator from "./GlobalLoadIndicator.svelte";
import { GlobalLoadIndicatorRuntime } from "./runtime";

export const GlobalLoadIndicatorApp: App = {
  metadata: {
    name: "globalLoadIndicator",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "ComponentIcon",
    appGroup: "components",
  },
  size: {
    w: NaN,
    h: NaN,
  },
  minSize: {
    w: 400,
    h: 80,
  },
  maxSize: {
    w: 550,
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
  vital: true,
  id: "GlobalLoadIndicator",
};

export default GlobalLoadIndicatorApp;
