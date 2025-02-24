import type { SvelteComponent } from "svelte";
import type { AppProcess } from "../ts/apps/process";
import type { WaveKernel } from "../ts/kernel";
import type { ProcessHandler } from "../ts/process/handler";
import type { ReadableStore } from "../ts/writable";
import type { MaybePromise } from "./common";

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
  thirdParty?: false;
  id: string;
  originId?: string;
  entrypoint?: "";
  workingDirectory?: "";
  opens?: {
    extensions?: string[];
    mimeTypes?: string[];
  };
}

export interface ThirdPartyApp {
  metadata: AppMetadata;
  entrypoint: string; // Path to MSL file
  workingDirectory: string;
  thirdParty: true;
  unsafeCode?: boolean;
  fileSignatures?: Record<string, string>; // [base64(path), SHA]
  id: string;
  autoRun?: boolean;
  core?: boolean;
  hidden?: boolean;
  overlay?: boolean;
  glass?: boolean;
  originId?: string;
  opens?: {
    extensions?: string[];
    mimeTypes?: string[];
  };
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

export type AppProcessData = { data: App; id: string; desktop?: string };

export type AppStorage = ((App | ThirdPartyApp) & { originId?: string })[];
export type AppStoreCb = () => MaybePromise<AppStorage>;

export interface ContextMenuItem {
  sep?: boolean;
  caption?: string;
  icon?: string;
  image?: string;
  isActive?: ContextMenuCallback<boolean>;
  action?: ContextMenuCallback;
  subItems?: ContextMenuItem[];
  disabled?: ContextMenuCallback<boolean>;
  accelerator?: string;
}

export type ContextMenuCallback<T = void> = (...args: any[]) => MaybePromise<T>;

export type AppContextMenu = { [key: string]: ContextMenuItem[] };
export interface ContextMenuInstance {
  x: number;
  y: number;
  items: ContextMenuItem[];
  process?: AppProcess;
  artificial?: boolean;
  props?: any[];
}
