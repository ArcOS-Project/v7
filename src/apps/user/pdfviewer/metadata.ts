import "$css/apps/user/pdfviewer.css";
import { PdfMimeIcon } from "$ts/images/mime";
import type { App } from "$types/app";
import PdfViewer from "./PdfViewer.svelte";
import { PdfViewerRuntime } from "./runtime";

export const PdfViewerApp: App = {
  metadata: {
    name: "PDF Viewer",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: PdfMimeIcon,
  },
  size: {
    w: 600,
    h: 450,
  },
  minSize: { w: 600, h: 450 },
  maxSize: { w: NaN, h: NaN },
  position: { centered: true },
  state: {
    minimized: false,
    maximized: true,
    headless: false,
    resizable: true,
    fullscreen: false,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  assets: {
    runtime: PdfViewerRuntime,
    component: PdfViewer as any,
  },
  opens: {
    extensions: [".pdf"],
    mimeTypes: ["application/pdf"],
  },
  noSafeMode: true,
  id: "PdfViewer",
  hidden: true,
};
