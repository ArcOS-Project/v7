import "$css/apps/components/sendbetafeedback.css";
import type { App } from "$types/apps/app";
import { SendBetaFeedbackRuntime } from "./runtime";
import SendBetaFeedback from "./SendBetaFeedback.svelte";

const SendBetaFeedbackApp: App = {
  metadata: {
    name: "Send beta feedback",
    version: "1.0.0",
    author: "Izaak Kuipers",
    icon: "UpdateIcon",
  },
  position: { centered: true },
  size: { w: 500, h: 400 },
  minSize: { w: 500, h: 400 },
  maxSize: { w: 500, h: 400 },
  state: {
    maximized: false,
    minimized: false,
    resizable: false,
    fullscreen: false,
    headless: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  assets: {
    runtime: SendBetaFeedbackRuntime,
    component: SendBetaFeedback as any,
  },
  glass: false,
  elevated: false,
  hidden: true,
  core: false,
  overlay: true,
  noSafeMode: false,
  vital: true,
  id: "SendBetaFeedbackApp",
};

export default SendBetaFeedbackApp;
