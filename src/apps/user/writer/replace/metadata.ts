import { ComponentIcon } from "$ts/images/general";
import type { App } from "$types/app";
import Replace from "./Replace.svelte";
import { ReplaceRuntime } from "./runtime";

export const ReplaceOverlay: App = {
  metadata: {
    name: "Replace",
    icon: ComponentIcon,
    version: "2.0.0",
    author: "Izaak Kuipers",
  },
  minSize: {
    w: 500,
    h: 160,
  },
  maxSize: {
    w: 500,
    h: 160,
  },
  size: {
    w: 500,
    h: 180,
  },
  position: { centered: true },
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
    runtime: ReplaceRuntime,
    component: Replace as any,
  },
  glass: true,
  id: "replace",
};
