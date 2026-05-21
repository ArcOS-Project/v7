import type { IKernelModule } from "./IKernelModule";

export interface ISoundbus extends IKernelModule {
  playSound(id: string, volume?: number): boolean | undefined;
  stopSound(id: string): boolean;
  getStore(): [string, string][];
  loadExternal(source: string, play?: boolean): void;
}
