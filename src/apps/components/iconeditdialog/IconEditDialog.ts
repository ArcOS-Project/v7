import "$css/apps/components/iconeditdialog.css";
import type { App } from "$types/app";
import IconEditDialog from "./IconEditDialog.svelte";
import { IconEditDialogRuntime } from "./runtime";

export const IconEditDialogApp: App = {
  metadata: {
    name: "Change Icon",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "ComponentIcon",
  },
  position: { centered: true },
  size: { w: 530, h: 240 },
  minSize: { w: 530, h: 240 },
  maxSize: { w: 530, h: 240 },
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
    runtime: IconEditDialogRuntime,
    component: IconEditDialog as any,
  },
  vital: true,
  hidden: true,
  id: "IconEditDialog",
};

export default IconEditDialogApp;
