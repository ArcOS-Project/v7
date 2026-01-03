import "$css/apps/user/gallery.css";
import type { App } from "$types/app";
import Gallery from "./Gallery.svelte";
import { GalleryRuntime } from "./runtime";

export const GalleryApp: App = {
  metadata: {
    name: "Gallery",
    author: "ArcOS Team",
    version: "1.0.0",
    icon: "PersonalizationIcon",
    appGroup: "multimedia",
  },
  position: { centered: true },
  size: {
    w: 1000,
    h: 700,
  },
  minSize: {
    w: 700,
    h: 500,
  },
  maxSize: {
    w: 1800,
    h: 1000,
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
  assets: {
    runtime: GalleryRuntime,
    component: Gallery as any,
  },
  glass: true,
  noSafeMode: true,
  id: "gallery",
};

export default GalleryApp;