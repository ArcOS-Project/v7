import type { App } from "$types/app";
import EditRowSvelte from "../HexEdit/Overlays/EditRow.svelte";
import { EditRowRuntime } from "./runtime";

export const EditRow: App = {
  metadata: {
    name: "Edit Row",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: "ComponentIcon",
  },
  size: {
    w: 518,
    h: 162,
  },
  minSize: {
    w: 518,
    h: 162,
  },
  maxSize: {
    w: 518,
    h: 162,
  },
  position: { centered: true },
  state: {
    maximized: false,
    minimized: false,
    fullscreen: false,
    headless: true,
    resizable: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  assets: {
    runtime: EditRowRuntime,
    component: EditRowSvelte as any,
  },
  id: "EditRow",
};
