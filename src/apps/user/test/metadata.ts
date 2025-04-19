import "$css/apps/components/test.css";
import { ConnectIcon } from "$ts/images/general";
import type { App } from "../../../types/app";
import { TestAppRuntime } from "./runtime";
import Test from "./Test.svelte";

export const TestApp: App = {
  metadata: {
    name: "Test",
    author: "Izaak Kuipers",
    version: "25.0.0",
    icon: ConnectIcon,
  },
  size: {
    w: 640,
    h: 480,
  },
  minSize: {
    w: 640,
    h: 480,
  },
  maxSize: {
    w: 1000,
    h: 750,
  },
  position: {
    centered: true,
  },
  state: {
    maximized: false,
    minimized: false,
    resizable: true,
    fullscreen: false,
    headless: false,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  assets: {
    component: Test as any,
    runtime: TestAppRuntime,
  },
  noSafeMode: true,
  id: "testApp",
  glass: true,
};
