import "$css/apps/components/fsrenameitem.css";
import type { App } from "$types/app";
import RenameItem from "./RenameItem.svelte";
import { RenameItemRuntime } from "./runtime";

export const FsRenameItemApp: App = {
  metadata: {
    name: "Rename Item",
    version: "4.0.0",
    author: "Izaak Kuipers",
    icon: "ComponentIcon",
    appGroup: "components",
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
  hidden: true,
  id: "FsRenameItem",
};

export default FsRenameItemApp;
