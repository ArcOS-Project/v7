import type { App } from "$types/app";
import { BugHuntUserDataRuntime } from "./runtime";
import UserData from "./UserData.svelte";

// I'm not even sure this is still in use, but it's a code viewer.
// That's all. It's also stolen from BugHunt
export const BugHuntUserDataApp: App = {
  metadata: {
    name: "User Data",
    version: "3.0.0",
    author: "Izaak Kuipers",
    icon: "BugReportIcon",
  },
  position: { centered: true },
  size: { w: 600, h: 450 },
  minSize: { w: 600, h: 450 },
  maxSize: { w: 600, h: 450 },
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
    runtime: BugHuntUserDataRuntime,
    component: UserData as any,
  },
  id: "BugHuntUserData",
};
