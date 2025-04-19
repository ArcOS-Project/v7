import "$css/apps/user/camera.css";
import { CameraIcon } from "$ts/images/apps";
import type { App } from "$types/app";
import Camera from "./Camera.svelte";
import { CameraRuntime } from "./runtime";

export const CameraApp: App = {
  metadata: {
    name: "Camera",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: CameraIcon,
  },
  size: {
    w: 560,
    h: 360,
  },
  minSize: {
    w: 560,
    h: 360,
  },
  maxSize: {
    w: NaN,
    h: NaN,
  },
  position: { centered: true },
  state: {
    resizable: true,
    maximized: false,
    minimized: false,
    fullscreen: false,
    headless: false,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  assets: {
    runtime: CameraRuntime,
    component: Camera as any,
  },
  noSafeMode: true,
  id: "CameraApp",
};
