import type { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import type { Process } from "$ts/process/instance";
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
  entrypoint?: string;
  workingDirectory?: string;
  opens?: {
    extensions?: string[];
    mimeTypes?: string[];
  };
  elevated?: boolean;
  acceleratorDescriptions?: Record<string, string>; // <[combo in One+Two+Key format], description>
  fileSignatures?: Record<string, string>;
  process?: ThirdPartyAppProcess;
  tpaRevision?: number;
  noSafeMode?: boolean;
  vital?: boolean;
}

export type RegisteredProcess = {
  metadata: AppMetadata;
  id: string;
  assets: {
    runtime: typeof Process;
  };
  vital?: boolean;
};

export interface InstalledApp extends App {
  metadata: AppMetadata;
  tpaPath: string;
}

export type ScriptedApp = Omit<App, "assets">;

export interface AppMetadata {
  name: string;
  version: string;
  author: string;
  icon: string;
  appGroup?: string;
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
  runtime: typeof Process;
  component?: typeof SvelteComponent;
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

export type AppStorage = ((App | InstalledApp) & { originId?: string })[];
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

export type ContextMenuCallback<T = any> = (...args: any[]) => MaybePromise<T>;

export type AppContextMenu = { [key: string]: ContextMenuItem[] };
export interface ContextMenuInstance {
  x: number;
  y: number;
  items: ContextMenuItem[];
  process?: AppProcess;
  artificial?: boolean;
  props?: any[];
}
