import { ComponentIcon } from "$ts/images/general";
import type { App } from "$types/app";
import HexEdit from "./HexEdit.svelte";
import { HexEditRuntime } from "./runtime";
import "$css/apps/user/hexedit.css";

export const HexEditorApp: App = {
  metadata: {
    name: "Hex Editor",
    version: "1.0.0",
    icon: ComponentIcon,
    author: "Izaak Kuipers",
  },
  size: { w: 500, h: 500 },
  minSize: { w: 400, h: 300 },
  maxSize: { w: 1440, h: 1000 },
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
    resizable: true,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  id: "HexEdit",
};
