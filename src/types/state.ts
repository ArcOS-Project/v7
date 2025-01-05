import type { WaveKernel } from "../ts/kernel";
import type { ProcessHandler } from "../ts/process/handler";
import type { StateHandler } from "../ts/state";

export interface State {
  render: (
    props: Record<string, any>,
    accessors: StateRendererAccessors
  ) => Promise<any>;
  css: string;
  html: string;
  name: string;
  identifier: string;
}

export interface StateRendererAccessors {
  state: StateHandler;
  kernel: WaveKernel;
  stack: ProcessHandler;
}

export type StateProps = Record<string, any>;
