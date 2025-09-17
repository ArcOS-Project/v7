import "$css/apps/components/oopsnotifier.css";
import type { App } from "$types/app";
import OopsNotifier from "./OopsNotifier.svelte";
import { OopsNotifierRuntime } from "./runtime";

export const OopsNotifierApp: App = {
  metadata: {
    name: "OopsNotifier",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "BugReportIcon",
  },
  position: { centered: true },
  size: { w: 320, h: 365 },
  minSize: { w: 320, h: 365 },
  maxSize: { w: 320, h: 365 },
  state: {
    maximized: false,
    minimized: false,
    fullscreen: false,
    resizable: false,
    headless: true,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: OopsNotifierRuntime,
    component: OopsNotifier as any,
  },
  hidden: true,
  vital: true,
  glass: true,
  id: "OopsNotifier",
};

export default OopsNotifierApp;
