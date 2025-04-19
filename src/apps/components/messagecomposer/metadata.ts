import "$css/apps/components/messagecomposer.css";
import { MessagingIcon } from "$ts/images/apps";
import type { App } from "$types/app";
import MessageComposer from "./MessageComposer.svelte";
import { MessageComposerRuntime } from "./runtime";

export const MessageComposerApp: App = {
  metadata: {
    name: "New Message",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: MessagingIcon,
  },
  position: { centered: true },
  size: { w: 550, h: 450 },
  minSize: { w: 550, h: 450 },
  maxSize: { w: NaN, h: NaN },
  state: {
    maximized: false,
    minimized: false,
    resizable: true,
    headless: false,
    fullscreen: false,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  assets: {
    runtime: MessageComposerRuntime,
    component: MessageComposer as any,
  },
  noSafeMode: true,
  id: "MessageComposer",
};
