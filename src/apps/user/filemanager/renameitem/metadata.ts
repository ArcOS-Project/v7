import { ComponentIcon } from "$ts/images/general";
import type { App } from "$types/app";
import RenameItem from "../FileManager/Overlays/RenameItem.svelte";
import { RenameItemRuntime } from "./runtime";

export const RenameItemApp: App = {
  metadata: {
    name: "Rename Item",
    version: "4.0.0",
    author: "Izaak Kuipers",
    icon: ComponentIcon,
  },
  size: {
    w: 380,
    h: 185,
  },
  minSize: {
    w: 380,
    h: 185,
  },
  maxSize: {
    w: 380,
    h: 185,
  },
  position: { centered: true },
  state: {
    minimized: false,
    maximized: false,
    fullscreen: false,
    headless: false,
    resizable: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  assets: {
    runtime: RenameItemRuntime,
    component: RenameItem as any,
  },
  glass: true,
  id: "RenameItem",
};
