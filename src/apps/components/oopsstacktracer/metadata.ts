import "$css/apps/components/oopsstacktracer.css";
import { ComponentIcon } from "$ts/images/general";
import type { App } from "$types/app";
import OopsStackTracer from "./OopsStackTracer.svelte";
import { OopsStackTracerRuntime } from "./runtime";

export const OopsStackTracerApp: App = {
  metadata: {
    name: "OopsStackTracer",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: ComponentIcon,
  },
  position: { centered: true },
  size: { w: 500, h: 380 },
  minSize: { w: 500, h: 380 },
  maxSize: { w: 500, h: 380 },
  state: {
    minimized: false,
    maximized: false,
    resizable: false,
    headless: true,
    fullscreen: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: OopsStackTracerRuntime,
    component: OopsStackTracer as any,
  },
  hidden: true,
  vital: true,
  id: "OopsStackTracer",
};
