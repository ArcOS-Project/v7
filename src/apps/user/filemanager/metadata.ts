import { FileManagerIcon } from "$ts/images/apps";
import type { App } from "$types/app";
import FileManager from "./FileManager.svelte";
import { FileManagerRuntime } from "./runtime";
import "$css/apps/user/filemanager.css";

export const FileManagerApp: App = {
  metadata: {
    name: "File Manager",
    author: "Izaak Kuipers",
    version: "8.0.0",
    icon: FileManagerIcon,
  },
  size: {
    w: 700,
    h: 500,
  },
  minSize: { w: 500, h: 400 },
  maxSize: { w: NaN, h: NaN },
  position: { centered: true },
  state: {
    maximized: false,
    minimized: false,
    fullscreen: false,
    headless: true,
    resizable: true,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  assets: {
    component: FileManager as any,
    runtime: FileManagerRuntime,
  },
  glass: true,
  id: "fileManager",
};
