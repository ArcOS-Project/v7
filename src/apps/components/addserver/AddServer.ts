import "$css/apps/components/addserver.css";
import type { App } from "$types/app";
import AddServer from "./AddServer.svelte";
import { AddServerRuntime } from "./runtime";

const AddServerApp: App = {
  metadata: {
    name: "Add Server",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "ComponentIcon",
  },
  position: { centered: true },
  size: { w: 350, h: 400 },
  minSize: { w: 350, h: 400 },
  maxSize: { w: 350, h: 400 },
  state: {
    maximized: false,
    minimized: false,
    resizable: false,
    fullscreen: false,
    headless: true,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: AddServerRuntime,
    component: AddServer as any,
  },
  glass: false,
  elevated: false,
  hidden: true,
  core: false,
  overlay: true,
  noSafeMode: false,
  vital: true,
  id: "AddServer",
};

export default AddServerApp;
