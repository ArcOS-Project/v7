import type { IWaveKernel } from "$interfaces/IWaveKernel";
import type { IBugHunt } from "$interfaces/modules/IBugHunt";
import type { ISystemDispatch } from "$interfaces/modules/ISystemDispatch";
import type { IEnvironment } from "$interfaces/modules/IEnvironment";
import type { IFilesystem } from "$interfaces/modules/IFilesystem";
import type { IServerConnector, IServerManager } from "$interfaces/modules/IServerManager";
import type { ISoundbus } from "$interfaces/modules/ISoundbus";
import type { IProcessHandler } from "$interfaces/modules/IProcessHandler";
import type { IStateHandler } from "$interfaces/IStateHandler";
import packageJson from "../../package.json";
import type { IKernelModule } from "$interfaces/modules/IKernelModule";
import type { IUserDaemon } from "$interfaces/IUserDaemon";

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

export function getKMod<T extends IKernelModule>(id: string, dontCrash = false): T {
  const kernel = Kernel!;

  return kernel.getModule<T>(id, dontCrash) as T;
}

export function GetConnector<T extends IServerConnector>(name: string, token?: string): T {
  return getKMod<IServerManager>("server").GetConn(name, token || "");
}

export let Daemon: IUserDaemon;

export function SetDaemon(daemon: IUserDaemon) {
  Daemon = daemon;
}