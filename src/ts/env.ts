import type { IWaveKernel } from "$interfaces/kernel";
import type { IBugHunt } from "$interfaces/modules/bughunt";
import type { ISystemDispatch } from "$interfaces/modules/dispatch";
import type { IEnvironment } from "$interfaces/modules/env";
import type { IFilesystem } from "$interfaces/modules/fs";
import type { IServerManager } from "$interfaces/modules/server";
import type { ISoundbus } from "$interfaces/modules/soundbus";
import type { IProcessHandler } from "$interfaces/modules/stack";
import type { IStateHandler } from "$interfaces/state";
import packageJson from "../../package.json";

export const ArcOSVersion = packageJson.version as `${number}.${number}.${number}`;
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
