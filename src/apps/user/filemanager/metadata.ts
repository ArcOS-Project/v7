import "$css/apps/user/filemanager.css";
import { FileManagerIcon } from "$ts/images/apps";
import type { App } from "$types/app";
import FileManager from "./FileManager.svelte";
import { FileManagerRuntime } from "./runtime";

export const FileManagerApp: App = {
  metadata: {
    name: "File Manager",
    author: "Izaak Kuipers",
    version: "8.0.0",
    icon: FileManagerIcon,
  },
  size: {
    w: 800,
    h: 600,
  },
  minSize: { w: 650, h: 520 },
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
