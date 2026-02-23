import type { State } from "$types/state";
import type { IAppProcess } from "./app";
import type { IProcess } from "./process";

export interface IStateHandler extends IProcess {
  store: Record<string, State>;
  currentState: string;
  stateProps: Record<string, Record<any, any>>;
  stateAppProcess: IAppProcess | undefined;
  _criticalProcess: boolean;
  start(): Promise<void>;
  loadState(id: string, props?: Record<string, any>, instant?: boolean): Promise<void>;
  loadStateNormally(id: string, data: State, htmlLoader: HTMLDivElement, cssLoader: HTMLLinkElement): Promise<void>;
  loadStateAsApp(data: State, props: Record<string, any>): Promise<void>;
  getStateLoaders(): {
    htmlLoader: HTMLDivElement;
    cssLoader: HTMLLinkElement;
    main: HTMLDivElement;
  };
}
