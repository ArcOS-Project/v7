import { BugReportIcon } from "$ts/images/general";
import type { App } from "$types/app";
import { BugHuntUserDataRuntime } from "./runtime";
import UserData from "./UserData.svelte";

export const BugHuntUserDataApp: App = {
  metadata: {
    name: "User Data",
    version: "3.0.0",
    author: "Izaak Kuipers",
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
    runtime: BugHuntUserDataRuntime,
    component: UserData as any,
  },
  id: "BugHuntUserData",
};
