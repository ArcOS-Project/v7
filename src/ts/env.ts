import type { IStateHandler } from "$interfaces/IStateHandler";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { IWaveKernel } from "$interfaces/IWaveKernel";
import type { IBugHunt } from "$interfaces/modules/IBugHunt";
import type { IEnvironment } from "$interfaces/modules/IEnvironment";
import type { IFilesystem } from "$interfaces/modules/IFilesystem";
import type { IPrinter } from "$interfaces/modules/IPrinterKernelModule";
import type { IProcessHandler } from "$interfaces/modules/IProcessHandler";
import type { IServerConnector, IServerManager } from "$interfaces/modules/IServerManager";
import type { ISoundbus } from "$interfaces/modules/ISoundbus";
import type { ISystemDispatch } from "$interfaces/modules/ISystemDispatch";
import packageJson from "../../package.json";
import { Log } from "./logging";

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
export let Printer: IPrinter;

export function SetCurrentKernel(kernel: IWaveKernel) {
  kernel.Log("SetCurrentKernel", `Assigning kernel to constant`);

  if (Kernel) throw new Error("Tried to reassign CurrentKernel");

  Kernel = kernel;
}

export function SetCurrentStateHandler(state: IStateHandler) {
  Log("SetCurrentStateHandler", `pid = ${state.pid}`);
  if (State) throw new Error("Tried to reassign StateHandler");

  State = state;
}

export function UpdateKernelExports(kernel: IWaveKernel) {
  Log("UpdateKernelExports", `mods = ${kernel.modules.join(", ")}`);

  Fs = kernel.getModule<IFilesystem>("fs", true);
  Env = kernel.getModule<IEnvironment>("env", true);
  Stack = kernel.getModule<IProcessHandler>("stack", true);
  Server = kernel.getModule<IServerManager>("server", true);
  SysDispatch = kernel.getModule<ISystemDispatch>("dispatch", true);
  SoundBus = kernel.getModule<ISoundbus>("soundbus", true);
  BugHunt = kernel.getModule<IBugHunt>("bughunt", true);
  Printer = kernel.getModule<IPrinter>("printer", true);
}

export function GetConnector<T extends IServerConnector>(name: string, token?: string): T {
  return Server.GetConn(name, token || "");
}

export let Daemon: IUserDaemon;

export function SetDaemon(daemon: IUserDaemon) {
  Daemon = daemon;
}
