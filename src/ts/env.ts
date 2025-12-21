import type {
  BugHuntType,
  ConstructedWaveKernel,
  EnvironmentType,
  FilesystemType,
  ProcessHandlerType,
  ServerManagerType,
  SoundbusType,
  SystemDispatchType,
} from "$types/kernel";
import { TryGetDaemon } from "./server/user/daemon";
import type { TrashCanService } from "./server/user/trash";
import { StateHandler } from "./state";
import { Store } from "./writable";

export const ArcOSVersion = "7.0.7";
export const BETA = true;
export const USERFS_UUID = "233D-CE74-18C0-0B08";
export let Kernel: ConstructedWaveKernel;
export let KernelServerUrl: string;

export let Fs: FilesystemType;
export let LiteralFs: FilesystemType;
export let Env: EnvironmentType;
export let Stack: ProcessHandlerType;
export let Server: ServerManagerType;
export let SysDispatch: SystemDispatchType;
export let SoundBus: SoundbusType;
export let State: StateHandler;
export let BugHunt: BugHuntType;

export function SetCurrentKernel(kernel: ConstructedWaveKernel) {
  if (Kernel) throw new Error("Tried to reassign CurrentKernel");

  Kernel = kernel;
}

export function SetCurrentStateHandler(state: StateHandler) {
  if (State) throw new Error("Tried to reassign StateHandler");

  State = state;
}

export function SetKernelExports() {
  LiteralFs = getKMod<FilesystemType>("fs");
  Fs = new Proxy(LiteralFs, {
    get: (target, prop, receiver) => {
      // recycle bin interceptor
      if (prop === "deleteItem" && typeof target[prop] === "function") {
        return async (path: string, dispatch?: boolean) => {
          if (!path.startsWith("U:/")) {
            return await target[prop].call(Fs, path, dispatch);
          }

          const daemon = TryGetDaemon();
          const trash = daemon?.serviceHost?.getService("TrashSvc") as TrashCanService;
          const disableTrash = daemon?.preferences().globalSettings.disableTrashCan;

          if (!trash || disableTrash) return await target[prop].call(Fs, path, dispatch);

          return await trash.moveToTrash(path, dispatch);
        };
      }
      return Reflect.get(target, prop, receiver);
    },
  });

  Env = getKMod<EnvironmentType>("env");
  Stack = getKMod<ProcessHandlerType>("stack");
  Server = getKMod<ServerManagerType>("server");
  KernelServerUrl = Server.url;
  SysDispatch = getKMod<SystemDispatchType>("dispatch");
  SoundBus = getKMod<SoundbusType>("soundbus");
  BugHunt = getKMod<BugHuntType>("bughunt");
}

export function getKMod<T = any>(id: string, dontCrash = false): T {
  const kernel = Kernel!;

  return kernel.getModule<T>(id, dontCrash) as T;
}
