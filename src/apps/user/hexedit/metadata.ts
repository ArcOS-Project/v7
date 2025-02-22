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
  size: { w: 694, h: 456 },
  minSize: { w: 694, h: 456 },
  maxSize: { w: 694, h: 456 },
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
  id: "HexEdit",
};
