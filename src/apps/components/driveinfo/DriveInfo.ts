import "$css/apps/components/driveinfo.css";
import type { App } from "$types/app";
import DriveInfo from "./DriveInfo.svelte";
import { DriveInfoRuntime } from "./runtime";

const DriveInfoApp: App = {
  metadata: {
    name: "%apps.DriveInfo._name%",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "DriveIcon",
  },
  position: { centered: true },
  size: { w: 350, h: 490 },
  minSize: { w: 350, h: 490 },
  maxSize: { w: 350, h: 490 },
  state: {
    minimized: false,
    maximized: false,
    resizable: false,
    headless: true,
    fullscreen: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: DriveInfoRuntime,
    component: DriveInfo as any,
  },
  vital: true,
  hidden: true,
  id: "DriveInfo",
};

export default DriveInfoApp;
