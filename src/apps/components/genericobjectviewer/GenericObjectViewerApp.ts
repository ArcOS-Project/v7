import "$css/apps/components/genericobjectviewerapp.css";
import type { App } from "$types/apps/app";
import { GenericObjectViewerRuntime } from "./runtime";
import GenericObjectViewer from "./GenericObjectViewer.svelte";

const GenericObjectViewerApp: App = {
  metadata: {
    name: "GenericObjectViewer",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: "ComponentIcon",
  },
  position: { centered: true },
  size: { w: 800, h: 600 },
  minSize: { w: 800, h: 600 },
  maxSize: { w: NaN, h: NaN },
  state: {
    minimized: false,
    maximized: false,
    fullscreen: false,
    headless: false,
    resizable: true,
  },
  controls: {
    minimize: false,
    maximize: true,
    close: true,
  },
  assets: {
    runtime: GenericObjectViewerRuntime,
    component: GenericObjectViewer as any,
  },
  hidden: true,
  vital: true,
  id: "GenericObjectViewerApp",
};

export default GenericObjectViewerApp;
