import "$css/apps/components/serviceinfo.css";
import type { App } from "$types/app";
import { ServiceInfoRuntime } from "./runtime";
import ServiceInfo from "./ServiceInfo.svelte";

export const ServiceInfoApp: App = {
  metadata: {
    name: "Service Info",
    author: "Izaak Kuipers",
    version: "2.0.0",
    icon: "ServiceInfoIcon",
  },
  position: { centered: true },
  size: { w: 500, h: 450 },
  minSize: { w: 500, h: 450 },
  maxSize: { w: 500, h: 500 },
  state: {
    minimized: false,
    maximized: false,
    fullscreen: false,
    resizable: false,
    headless: false,
  },
  controls: {
    minimize: true,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: ServiceInfoRuntime,
    component: ServiceInfo as any,
  },
  hidden: true,
  vital: true,
  id: "ServiceInfo",
};

export default ServiceInfoApp;
