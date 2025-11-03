import type { ConstructedWaveKernel, ProcessHandlerType } from "$types/kernel";
import { ServerManager } from "./kernel/mods/server";
import { Store } from "./writable";

export const ArcOSVersion = "7.0.7";
export const BETA = false;
export const USERFS_UUID = "233D-CE74-18C0-0B08";
export const IsMobile = Store<boolean>(false);
export let CurrentKernel: ConstructedWaveKernel | undefined = undefined;

export function SetCurrentKernel(kernel: ConstructedWaveKernel) {
  if (CurrentKernel) throw new Error("Tried to reassign CurrentKernel");

  CurrentKernel = kernel;
}

export const Kernel = () => CurrentKernel;
export const KernelStack = () => getKMod<ProcessHandlerType>("stack");
export const KernelServerUrl = () => getKMod<ServerManager>("server").url;

export function getKMod<T = any>(id: string, dontCrash = false): T {
  const kernel = Kernel()!;

  return kernel.getModule<T>(id, dontCrash) as T;
}
