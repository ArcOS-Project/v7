import type { SvelteComponent } from "svelte";
import type { AppProcess } from "../ts/apps/process";
import type { WaveKernel } from "../ts/kernel";
import type { ProcessHandler } from "../ts/process/handler";
import type { ReadableStore } from "../ts/writable";

export interface App {
  metadata: AppMetadata;
  size: Size;
  minSize: Size;
  maxSize: Size;
  position: MaybeCenteredPosition;
  state: AppState;
  controls: WindowControls;
  assets: AppAssets;
  autoRun?: boolean;
  core?: boolean;
  hidden?: boolean;
  overlay?: boolean;
  glass?: boolean;
  id: string;
}

export type ScriptedApp = Omit<App, "assets">;

export interface AppMetadata {
  name: string;
  version: `${number}.${number}.${number}`;
  author: string;
  icon: string;
}

export interface AppState {
  resizable: boolean;
  minimized: boolean;
  maximized: boolean;
  fullscreen: boolean;
  headless: boolean;
}

export interface WindowControls {
  minimize: boolean;
  maximize: boolean;
  close: boolean;
}

export interface AppAssets {
  runtime: typeof AppProcess;
  component: typeof SvelteComponent;
}

export interface AppComponentProps<T = AppProcess> {
  process: T;
  pid: number;
  kernel: WaveKernel;
  handler: ProcessHandler;
  app: App;
  windowTitle: ReadableStore<string>;
  windowIcon: ReadableStore<string>;
}

export type Size = { w: number; h: number };
export type Position = { x: number; y: number };
export type MaybeCenteredPosition = Partial<Position> & { centered?: boolean };

export type AppProcessData = { data: App; id: string };
