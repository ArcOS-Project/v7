import "$css/apps/components/fsnewfolder.css";
import { ComponentIcon } from "$ts/images/general";
import type { App } from "$types/app";
import NewFolder from "./NewFolder.svelte";
import { NewFolderRuntime } from "./runtime";

export const FsNewFolderApp: App = {
  metadata: {
    name: "New Folder",
    version: "4.0.0",
    author: "Izaak Kuipers",
    icon: ComponentIcon,
  },
  size: {
    w: 380,
    h: 203,
  },
  minSize: {
    w: 380,
    h: 203,
  },
  maxSize: {
    w: 380,
    h: 203,
  },
  position: { centered: true },
  state: {
    minimized: false,
    maximized: false,
    fullscreen: false,
    headless: false,
    resizable: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  assets: {
    runtime: NewFolderRuntime,
    component: NewFolder as any,
  },
  glass: true,
  id: "FsNewFolder",
};
