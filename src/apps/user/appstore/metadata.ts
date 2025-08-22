import "$css/apps/user/appstore.css";
import { AppStoreIcon } from "$ts/images/apps";
import type { App } from "$types/app";
import AppStore from "./AppStore.svelte";
import { AppStoreRuntime } from "./runtime";

export const AppStoreApp: App = {
  metadata: {
    name: "App Store",
    author: "Izaak Kuipers",
    version: "1.0.1",
    icon: AppStoreIcon,
  },
  position: { centered: true },
  size: { w: 950, h: 500 },
  minSize: { w: 950, h: 500 },
  maxSize: { w: NaN, h: NaN },
  state: {
    minimized: false,
    maximized: false,
    resizable: true,
    fullscreen: false,
    headless: true,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  assets: {
    runtime: AppStoreRuntime,
    component: AppStore as any,
  },
  glass: true,
  vital: true,
  noSafeMode: true,
  id: "AppStore",
};
