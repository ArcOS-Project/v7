import "$css/apps/components/fsnewfile.css";
import { ComponentIcon } from "$ts/images/general";
import type { App } from "$types/app";
import NewFile from "./NewFile.svelte";
import { NewFileRuntime } from "./runtime";

export const FsNewFileApp: App = {
  metadata: {
    name: "New File",
    version: "4.0.0",
    author: "Izaak Kuipers",
    icon: ComponentIcon,
    appGroup: "components",
  },
  size: {
    w: 380,
    h: 185,
  },
  minSize: {
    w: 380,
    h: 185,
  },
  maxSize: {
    w: 380,
    h: 185,
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
    runtime: NewFileRuntime,
    component: NewFile as any,
  },
  glass: true,
  hidden: true,
  id: "FsNewFile",
};
