import type { IStateHandler } from "$interfaces/state";
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
  state: IStateHandler;
}

export type StateProps = Record<string, any>;
