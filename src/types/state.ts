import type { ProcessHandler } from "../ts/process/handler";
import type { StateHandler } from "../ts/state";
import type { App } from "./app";

export interface State {
  render?: (props: Record<string, any>, accessors: StateRendererAccessors) => Promise<any>;
  app?: App; // It's either an app ...
  html?: string; // ... or HTML.
  name: string;
  identifier: string;
}

export interface StateRendererAccessors {
  state: StateHandler;
  stack: ProcessHandler;
}

export type StateProps = Record<string, any>;
