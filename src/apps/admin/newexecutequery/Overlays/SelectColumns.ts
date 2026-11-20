import type { App } from "$types/apps/app";
import SelectColumns from "../NewExecuteQuery/Overlays/SelectColumns.svelte";
import { NewExecuteQueryOverlayRuntime } from "./runtime";

const SelectColumnsApp: App = {
  metadata: {
    name: "Select columns",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "ComponentIcon",
  },
  position: { centered: true },
  size: { w: 450, h: 500 },
  minSize: { w: 450, h: 500 },
  maxSize: { w: 450, h: 500 },
  state: {
    maximized: false,
    minimized: false,
    resizable: false,
    fullscreen: false,
    headless: true,
  },
  controls: {
    minimize: false,
    maximize: true,
    close: true,
  },
  assets: {
    runtime: NewExecuteQueryOverlayRuntime,
    component: SelectColumns as any,
  },
  glass: false,
  elevated: false,
  hidden: false,
  core: false,
  overlay: false,
  noSafeMode: false,
  vital: false,
  id: "NewExecuteQuery_SelectColumns",
};

export default SelectColumnsApp;
