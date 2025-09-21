import "$css/apps/user/iconeditor.css";
import type { App } from "$types/app";
import IconEditor from "./IconEditor.svelte";
import { IconEditorRuntime } from "./runtime";

export const IconEditorApp: App = {
  metadata: {
    name: "Icon Editor",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: "AppsIcon",
  },
  position: { centered: true },
  size: { w: 700, h: 550 },
  minSize: { w: 700, h: 550 },
  maxSize: { w: NaN, h: NaN },
  state: {
    minimized: false,
    maximized: false,
    resizable: true,
    headless: true,
    fullscreen: false,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  assets: {
    runtime: IconEditorRuntime,
    component: IconEditor as any,
  },
  glass: true,
  vital: true,
  id: "IconEditorApp",
};

export default IconEditorApp;
