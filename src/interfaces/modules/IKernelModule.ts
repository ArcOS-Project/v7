import type { Constructs } from "$interfaces/common";

// !tpa
export interface IKernelModule {
  id: string;
  _init(): Promise<void>;
  __init(): Promise<void>;
  isKmod(): void;
}

export interface IKernelModuleConstructor extends Constructs<IKernelModule> {
  identifier: string;
}
// !endtpa
