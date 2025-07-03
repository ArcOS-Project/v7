import { UpdateIcon } from "$ts/images/general";
import type { App } from "$types/app";
import MultiUpdateGui from "./MultiUpdateGui.svelte";
import { MultiUpdateGuiRuntime } from "./runtime";

export const MultiUpdateGuiApp: App = {
  metadata: {
    name: "App Updater",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: UpdateIcon,
  },
  position: { centered: true },
  size: {
    w: 450,
    h: 240,
  },
  minSize: {
    w: 450,
    h: 240,
  },
  maxSize: {
    w: 450,
    h: 430,
  },
  state: {
    minimized: false,
    maximized: false,
    headless: true,
    resizable: false,
    fullscreen: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: MultiUpdateGuiRuntime,
    component: MultiUpdateGui as any,
  },
  hidden: true,
  vital: true,
  glass: true,
  id: "MultiUpdateGui",
};
