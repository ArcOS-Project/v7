import "$css/apps/user/writer.css";
import { TextEditorIcon } from "$ts/images/apps";
import type { App } from "$types/app";
import { WriterRuntime } from "./runtime";
import Writer from "./Writer.svelte";

export const WriterApp: App = {
  metadata: {
    name: "Writer",
    author: "Izaak Kuipers",
    version: "5.0.0",
    icon: TextEditorIcon,
  },
  size: {
    w: 700,
    h: 500,
  },
  minSize: {
    w: 480,
    h: 500,
  },
  maxSize: {
    w: 1800,
    h: 1000,
  },
  position: {
    centered: true,
  },
  controls: {
    maximize: true,
    minimize: true,
    close: true,
  },
  state: {
    minimized: false,
    maximized: false,
    resizable: true,
    headless: false,
    fullscreen: false,
  },
  opens: {
    extensions: [".txt", ".json", ".svg"],
  },
  assets: {
    component: Writer as any,
    runtime: WriterRuntime,
  },
  id: "writer",
};
