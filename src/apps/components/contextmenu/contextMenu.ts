import "$css/apps/components/contextmenu.css";
import type { App } from "$types/app";
import ContextMenuRenderer from "./ContextMenuRenderer.svelte";
import { ContextMenuRuntime } from "./runtime";

const ContextMenuApp: App = {
  metadata: {
    name: "Context Menu",
    author: "Izaak Kuipers",
    version: "5.0.0",
    icon: "StartMenuIcon",
    appGroup: "components",
  },
  size: { w: NaN, h: NaN },
  minSize: { w: NaN, h: NaN },
  maxSize: { w: 700, h: NaN },
  position: { x: 0, y: 0 },
  state: {
    minimized: false,
    maximized: false,
    fullscreen: false,
    resizable: false,
    headless: true,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  assets: {
    runtime: ContextMenuRuntime,
    component: ContextMenuRenderer as any,
  },
  id: "contextMenu",
  core: true,
  vital: true,
  hidden: true,
};

export default ContextMenuApp;
