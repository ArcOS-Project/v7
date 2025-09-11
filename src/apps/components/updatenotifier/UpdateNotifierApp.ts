import "$css/apps/components/updatenotifier.css";
import { UpdateIcon } from "$ts/images/general";
import type { App } from "$types/app";
import { UpdateNotifierRuntime } from "./runtime";
import UpdateNotifier from "./UpdateNotifier.svelte";

export const UpdateNotifierApp: App = {
  metadata: {
    name: "UpdateNotifier",
    author: "Izaak Kuipers",
    version: "2.0.0",
    icon: UpdateIcon,
  },
  position: { centered: true },
  size: { w: 390, h: 490 },
  minSize: { w: 390, h: 490 },
  maxSize: { w: 390, h: 490 },
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
    runtime: UpdateNotifierRuntime,
    component: UpdateNotifier as any,
  },
  hidden: true,
  vital: true,
  glass: true,
  id: "UpdateNotifierApp",
};

export default UpdateNotifierApp;
