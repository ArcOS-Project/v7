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
  },
  size: {
    w: 1000,
    h: 600,
  },
  minSize: {
    w: 1000,
    h: 600,
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
