import "$css/apps/user/bughunt.css";
import { BugReportIcon } from "$ts/images/general";
import type { App } from "$types/app";
import BugHunt from "./BugHunt.svelte";
import { BugHuntRuntime } from "./runtime";

export const BugHuntApp: App = {
  metadata: {
    name: "Bug Hunt",
    version: "3.0.0",
    author: "Izaak Kuipers",
    icon: BugReportIcon,
    appGroup: "systemTools",
  },
  position: { centered: true },
  size: { w: 920, h: 550 },
  minSize: { w: 920, h: 550 },
  maxSize: { w: NaN, h: NaN },
  state: {
    minimized: false,
    maximized: false,
    resizable: true,
    headless: true,
    fullscreen: false,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  assets: {
    runtime: BugHuntRuntime,
    component: BugHunt as any,
  },
  glass: true,
  id: "BugHunt",
};

export default BugHuntApp;
