import "$css/apps/user/filemanager.css";
import type { App } from "$types/app";
import FileManager from "./FileManager.svelte";
import { FileManagerRuntime } from "./runtime";

export const FileManagerApp: App = {
  metadata: {
    name: "File Manager",
    author: "Izaak Kuipers",
    version: "8.0.0",
    icon: "FileManagerIcon",
  },
  size: {
    w: 800,
    h: 500,
  },
  minSize: { w: 650, h: 500 },
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
  vital: true,
  acceleratorDescriptions: {
    Del: "Delete the selected items",
    "Alt+Enter": "View item details of selected item",
    F2: "Rename the selected item",
    Up: "Move selection up using the keyboard",
    Down: "Move selection down using the keyboard",
    "Shift+Enter": "Opens a single selected file with an app of your choosing",
    Enter: "Opens one or more selected items",
  },
};

export default FileManagerApp;
