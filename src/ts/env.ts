import type {
  SoundbusType,
  ConstructedWaveKernel,
  EnvironmentType,
  FilesystemType,
  ProcessHandlerType,
  SystemDispatchType,
} from "$types/kernel";
import { ServerManager } from "./kernel/mods/server";
import { TryGetDaemon } from "./server/user/daemon";
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
export const KernelServerMan = () => getKMod<ServerManager>("server");
export const KernelServerUrl = () => getKMod<ServerManager>("server").url;
export const KernelFs = () => {
  const mod = getKMod<FilesystemType>("fs");

  // Global interceptor for the recycle bin
  return new Proxy(mod, {
    get: (target, prop, receiver) => {
      if (prop === "deleteItem" && typeof target[prop] === "function") {
        return async (path: string, dispatch?: boolean) => {
          if (!path.startsWith("U:/")) {
            return await target[prop].call(mod, path, dispatch);
          }

          const daemon = TryGetDaemon();
          const trash = daemon?.serviceHost?.getService("TrashSvc") as any;

          if (!trash) return await target[prop].call(mod, path, dispatch);
        };
      }
      return Reflect.get(target, prop, receiver);
    },
  });
};
export const KernelEnv = () => getKMod<EnvironmentType>("env");
export const KernelDispatchS = () => getKMod<SystemDispatchType>("dispatch");
export const KernelSound = () => getKMod<SoundbusType>("soundbus");

export const Fs = KernelFs;
export const Env = KernelEnv;
export const Stack = KernelStack;

export function getKMod<T = any>(id: string, dontCrash = false): T {
  const kernel = Kernel()!;

  return kernel.getModule<T>(id, dontCrash) as T;
}
