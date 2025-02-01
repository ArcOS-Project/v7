import { AppInfoIcon } from "$ts/images/apps";
import type { App } from "$types/app";
import AppInfo from "./AppInfo.svelte";
import { AppInfoRuntime } from "./runtime";
import "$css/apps/components/appinfo.css";

export const AppInfoApp: App = {
  metadata: {
    name: "App Info",
    author: "Izaak Kuipers",
    version: "3.0.0",
    icon: AppInfoIcon,
  },
  size: {
    w: 500,
    h: NaN,
  },
  minSize: {
    w: 500,
    h: 450,
  },
  maxSize: {
    w: 500,
    h: 460,
  },
  position: {
    centered: true,
  },
  state: {
    minimized: false,
    maximized: false,
    headless: false,
    fullscreen: false,
    resizable: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  assets: {
    runtime: AppInfoRuntime,
    component: AppInfo as any,
  },
  hidden: true,
  id: "AppInfo",
};
