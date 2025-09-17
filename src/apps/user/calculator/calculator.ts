import "$css/apps/user/calculator.css";
import type { App } from "$types/app";
import Calculator from "./Calculator.svelte";
import { CalculatorRuntime } from "./runtime";

export const CalculatorApp: App = {
  metadata: {
    name: "Calculator",
    version: "4.0.0",
    author: "Izaak Kuipers",
    icon: "CalculatorIcon",
    appGroup: "utilities",
  },
  position: {
    x: 60,
    y: 60,
  },
  size: {
    w: 347,
    h: NaN,
  },
  minSize: {
    w: 347,
    h: NaN,
  },
  maxSize: {
    w: 347,
    h: NaN,
  },
  state: {
    maximized: false,
    minimized: false,
    resizable: false,
    headless: false,
    fullscreen: false,
  },
  controls: {
    minimize: true,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: CalculatorRuntime,
    component: Calculator as any,
  },
  glass: true,
  noSafeMode: true,
  id: "calculator",
};

export default CalculatorApp;
