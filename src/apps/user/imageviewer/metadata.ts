import { ImageViewerIcon } from "$ts/images/apps";
import type { App } from "$types/app";
import ImageViewer from "./ImageViewer.svelte";
import { ImageViewerRuntime } from "./runtime";

export const ImageViewerApp: App = {
  metadata: {
    name: "Image Viewer",
    version: "4.0.0",
    author: "Izaak Kuipers",
    icon: ImageViewerIcon,
  },
  size: { w: 640, h: 480 },
  minSize: { w: 300, h: 200 },
  maxSize: { w: 1200, h: 800 },
  state: {
    minimized: false,
    maximized: false,
    resizable: true,
    headless: false,
    fullscreen: false,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  position: { centered: true },
  id: "ImageViewer",
  hidden: true,
  assets: {
    runtime: ImageViewerRuntime,
    component: ImageViewer as any,
  },
};
