import { TextEditorIcon } from "$ts/images/apps";
import type { App } from "$types/app";
import { WordPadRuntime } from "./runtime";
import WordPad from "./WordPad.svelte";

export const WordPadApp: App = {
  metadata: {
    name: "WordPad",
    author: "Izaak Kuipers",
    version: "1.0.0",
    icon: TextEditorIcon,
  },
  size: {
    w: 800,
    h: 550,
  },
  minSize: {
    w: 550,
    h: 400,
  },
  maxSize: {
    w: NaN,
    h: NaN,
  },
  position: { centered: true },
  state: {
    minimized: false,
    maximized: false,
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
    runtime: WordPadRuntime,
    component: WordPad as any,
  },
  id: "WordPad",
};
