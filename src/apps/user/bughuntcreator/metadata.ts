import { BugReportIcon } from "$ts/images/general";
import type { App } from "$types/app";
import Creator from "./Creator.svelte";
import { BugHuntCreatorRuntime } from "./runtime";

export const BugReportsCreatorApp: App = {
  metadata: {
    name: "Submit a bug report",
    author: "Izaak Kuipers",
    version: "3.0.0",
    icon: BugReportIcon,
  },
  position: { centered: true },
  size: { w: 650, h: 500 },
  minSize: { w: 650, h: 500 },
  maxSize: { w: 650, h: 500 },
  state: {
    minimized: false,
    maximized: false,
    resizable: false,
    headless: false,
    fullscreen: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: BugHuntCreatorRuntime,
    component: Creator as any,
  },
  id: "BugHuntCreator",
};
