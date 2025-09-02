import "$css/apps/user/sqeleton.css";
import { SqeletonIcon } from "$ts/images/apps";
import type { App } from "$types/app";
import { SqeletonRuntime } from "./runtime";
import Sqeleton from "./Sqeleton.svelte";

export const SqeletonApp: App = {
  metadata: {
    name: "Sqeleton",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: SqeletonIcon,
  },
  position: { centered: true },
  size: { w: 800, h: 550 },
  minSize: { w: 800, h: 550 },
  maxSize: { w: NaN, h: NaN },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  state: {
    minimized: false,
    maximized: false,
    resizable: true,
    headless: false,
    fullscreen: false,
  },
  assets: {
    runtime: SqeletonRuntime,
    component: Sqeleton as any,
  },
  id: "Sqeleton",
};
