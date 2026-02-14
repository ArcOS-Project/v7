import type {
  IBugHunt,
  IEnvironment,
  IFilesystem,
  IProcessHandler,
  IServerManager,
  ISoundbus,
  ISystemDispatch,
  IWaveKernel,
} from "$interfaces/kernel";
import type { IStateHandler } from "$interfaces/state";
import packageJson from "../../package.json";

export const ArcOSVersion = packageJson.version;
export const BETA = true;
export const USERFS_UUID = "233D-CE74-18C0-0B08";
export let Kernel: IWaveKernel;

export let Fs: IFilesystem;
export let Env: IEnvironment;
export let Stack: IProcessHandler;
export let Server: IServerManager;
export let SysDispatch: ISystemDispatch;
export let SoundBus: ISoundbus;
export let State: IStateHandler;
export let BugHunt: IBugHunt;

export function SetCurrentKernel(kernel: IWaveKernel) {
  if (Kernel) throw new Error("Tried to reassign CurrentKernel");

  Kernel = kernel;
}

export function SetCurrentStateHandler(state: IStateHandler) {
  if (State) throw new Error("Tried to reassign StateHandler");

  State = state;
}

export function SetKernelExports() {
  Fs = getKMod<IFilesystem>("fs");
  Env = getKMod<IEnvironment>("env");
  Stack = getKMod<IProcessHandler>("stack");
  Server = getKMod<IServerManager>("server");
  SysDispatch = getKMod<ISystemDispatch>("dispatch");
  SoundBus = getKMod<ISoundbus>("soundbus");
  BugHunt = getKMod<IBugHunt>("bughunt");
}

export function getKMod<T = any>(id: string, dontCrash = false): T {
  const kernel = Kernel!;

  return kernel.getModule<T>(id, dontCrash) as T;
}
