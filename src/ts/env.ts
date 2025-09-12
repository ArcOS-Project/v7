import type { ProcessHandlerType, ConstructedWaveKernel } from "$types/kernel";

export const ArcOSVersion = "7.0.6";
export const BETA = false;
export const USERFS_UUID = "233D-CE74-18C0-0B08";
export let CurrentKernel: ConstructedWaveKernel | undefined = undefined;

export function SetCurrentKernel(kernel: ConstructedWaveKernel) {
  if (CurrentKernel) throw new Error("Tried to reassign CurrentKernel");

  CurrentKernel = kernel;
}

export const Kernel = () => CurrentKernel;
export const KernelStack = () => getKMod<ProcessHandlerType>("stack");

export function getKMod<T = any>(id: string, dontCrash = false): T {
  const kernel = Kernel()!;

  return kernel.getModule<T>(id, dontCrash) as T;
}
