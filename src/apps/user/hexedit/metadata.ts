import "$css/apps/user/hexedit.css";
import { ComponentIcon } from "$ts/images/general";
import type { App } from "$types/app";
import HexEdit from "./HexEdit.svelte";
import { HexEditRuntime } from "./runtime";

export const HexEditorApp: App = {
  metadata: {
    name: "Hex Editor",
    version: "1.0.0",
    icon: ComponentIcon,
    author: "Izaak Kuipers",
  },
  size: { w: 700, h: 485 },
  minSize: { w: 700, h: 485 },
  maxSize: { w: 700, h: 485 },
  position: { centered: true },
  assets: {
    runtime: HexEditRuntime,
    component: HexEdit as any,
  },
  state: {
    maximized: false,
    minimized: false,
    fullscreen: false,
    headless: false,
    resizable: false,
  },
  controls: {
    minimize: true,
    maximize: false,
    close: true,
  },
  hidden: true,
  id: "HexEdit",
};
