import "$css/apps/user/qlorb.css";
import type { App } from "$types/app";
import Qlorb from "./Qlorb.svelte";
import { QlorbRuntime } from "./runtime";

export const QlorbApp: App = {
  metadata: {
    name: "Qlorb",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: "QlorbIcon",
    appGroup: "entertainment",
  },
  position: { centered: true },
  size: { w: 890, h: NaN },
  minSize: { w: 890, h: 600 },
  maxSize: { w: 1200, h: NaN },
  state: {
    minimized: false,
    maximized: true,
    headless: false,
    fullscreen: false,
    resizable: true,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  assets: {
    component: Qlorb as any,
    runtime: QlorbRuntime,
  },
  noSafeMode: true,
  id: "QlorbApp",
};

export default QlorbApp;
