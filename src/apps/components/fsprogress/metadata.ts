import { ComponentIcon } from "$ts/images/general";
import type { App } from "$types/app";
import FsProgress from "./FsProgress.svelte";
import { FsProgressRuntime } from "./runtime";
import "$css/apps/components/fsprogress.css";

export const FsProgressApp: App = {
  metadata: {
    name: "FsProgress",
    author: "The ArcOS Team",
    version: "1.0.0",
    icon: ComponentIcon,
  },
  size: { w: 400, h: NaN },
  minSize: { w: 400, h: 160 },
  maxSize: { w: 400, h: NaN },
  position: { centered: true },
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
    runtime: FsProgressRuntime,
    component: FsProgress as any,
  },
  id: "FsProgress",
  hidden: true,
  overlay: true,
};
