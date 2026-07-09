import "$css/apps/user/imageviewer.css";
import type { App } from "$types/apps/app";
import ImageViewer from "./ImageViewer.svelte";
import { ImageViewerRuntime } from "./runtime";

export const ImageViewerApp: App = {
  metadata: {
    name: "Image Viewer",
    version: "4.0.0",
    author: "Izaak Kuipers",
    icon: "ImageViewerIcon",
    appGroup: "multimedia",
  },
  size: { w: 700, h: 550 },
  minSize: { w: 700, h: 550 },
  maxSize: { w: NaN, h: NaN },
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
  opens: {
    extensions: [".png", ".jpg", ".gif", ".webp", ".ico", ".bmp", ".tif", ".tiff", ".jpeg", ".svg"],
  },
  noSafeMode: true,
  assets: {
    runtime: ImageViewerRuntime,
    component: ImageViewer as any,
  },
};

export default ImageViewerApp;
