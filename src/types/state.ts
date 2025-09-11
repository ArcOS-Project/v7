import type { StateHandler } from "../ts/state";
import type { App } from "./app";

export type AppModuleLoader = () => Promise<{ default: App }>;

export interface State {
  render?: (props: Record<string, any>, accessors: StateRendererAccessors) => Promise<any>;
  appModule?: AppModuleLoader; // It's either an app ...
  html?: string; // ... or HTML.
  name: string;
  identifier: string;
}

export interface StateRendererAccessors {
  state: StateHandler;
}

export type StateProps = Record<string, any>;
