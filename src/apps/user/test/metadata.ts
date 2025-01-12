import "$css/apps/components/test.css";
import type { App } from "../../../types/app";
import { TestAppRuntime } from "./runtime";
import Test from "./Test.svelte";

export const TestApp: App = {
  metadata: {
    name: "Test",
    author: "Izaak Kuipers",
    version: "25.0.0",
    icon: "",
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
    w: 640,
    h: 480,
  },
  position: {
    centered: true,
  },
  state: {
    maximized: false,
    minimized: false,
    resizable: true,
    fullscreen: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  assets: {
    component: Test as any,
    runtime: TestAppRuntime,
  },
  id: "testApp",
};
