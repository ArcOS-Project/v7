import type { Component, SvelteComponent } from "svelte";
import type { AppProcess } from "../ts/apps/process";

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
  id: string;
}

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
}

export interface WindowControls {
  minimize: boolean;
  maximize: boolean;
  close: boolean;
}

export interface AppAssets {
  runtime: typeof AppProcess;
  component: typeof SvelteComponent;
  css: string;
}

export type Size = { w: number; h: number };
export type Position = { x: number; y: number };
export type MaybeCenteredPosition = Partial<Position> & { centered?: boolean };

export type AppProcessData = { data: App; meta: App; id: string };
