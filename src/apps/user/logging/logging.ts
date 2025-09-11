import "$css/apps/user/logging.css";
import { LoggerIcon } from "$ts/images/apps";
import type { App } from "$types/app";
import Logging from "./Logging.svelte";
import { LoggingRuntime } from "./runtime";

export const LoggingApp: App = {
  metadata: {
    name: "Logging",
    version: "3.0.0",
    author: "Izaak Kuipers",
    icon: LoggerIcon,
    appGroup: "systemTools",
  },
  size: {
    w: 680,
    h: 450,
  },
  minSize: {
    w: 680,
    h: 450,
  },
  maxSize: {
    w: 1300,
    h: 900,
  },
  position: { centered: true },
  state: {
    resizable: true,
    maximized: false,
    minimized: false,
    fullscreen: false,
    headless: true,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  assets: {
    runtime: LoggingRuntime,
    component: Logging as any,
  },
  glass: true,
  elevated: true,
  id: "logging",
};

export default LoggingApp;
