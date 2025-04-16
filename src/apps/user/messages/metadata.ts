import "$css/apps/user/messages.css";
import { MessagingIcon } from "$ts/images/apps";
import type { App } from "$types/app";
import Messages from "./Messages.svelte";
import { MessagingAppRuntime } from "./runtime";

export const MessagingApp: App = {
  metadata: {
    name: "Messages",
    version: "3.0.0",
    author: "Izaak Kuipers",
    icon: MessagingIcon,
  },
  position: { centered: true },
  size: {
    w: 850,
    h: 500,
  },
  minSize: {
    w: 700,
    h: 450,
  },
  maxSize: {
    w: NaN,
    h: NaN,
  },
  state: {
    maximized: false,
    minimized: false,
    resizable: true,
    headless: true,
    fullscreen: false,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  assets: {
    runtime: MessagingAppRuntime,
    component: Messages as any,
  },
  glass: true,
  id: "Messages",
};
