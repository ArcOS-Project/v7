import type { IKernelModule } from "./IKernelModule";

// !tpa-prop
export interface ISoundbus extends IKernelModule {
  playSound(id: string, volume?: number): boolean | undefined;
  stopSound(id: string): boolean;
  getStore(): [string, string][];
  loadExternal(source: string, play?: boolean): void;
}
