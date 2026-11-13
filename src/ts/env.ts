import type { IStateHandler } from "$interfaces/IStateHandler";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { IWaveKernel } from "$interfaces/IWaveKernel";
import type { IBugHuntKernelModule } from "$interfaces/modules/IBugHunt";
import type { IEnvironmentKernelModule } from "$interfaces/modules/IEnvironment";
import type { IFilesystemKernelModule } from "$interfaces/modules/IFilesystem";
import type { IPrinterKernelModule } from "$interfaces/modules/IPrinterKernelModule";
import type { IPsaKernelModule } from "$interfaces/modules/IPsaKernelModule";
import type { IServerConnector, IServerManagerKernelModule } from "$interfaces/modules/IServerManager";
import type { ISoundbusKernelModule } from "$interfaces/modules/ISoundbus";
import type { IStackKernelModule } from "$interfaces/modules/IStackKernelModule";
import type { ISystemDispatchKernelModule } from "$interfaces/modules/ISystemDispatch";
import packageJson from "../../package.json";
import { Log } from "./logging";

export const ArcOSVersion = packageJson.version as `${number}.${number}.${number}`;
export const BETA = true;
export const USERFS_UUID = "233D-CE74-18C0-0B08";
export let Kernel: IWaveKernel;

export let Fs: IFilesystemKernelModule;
export let Env: IEnvironmentKernelModule;
export let Stack: IStackKernelModule;
export let Server: IServerManagerKernelModule;
export let SysDispatch: ISystemDispatchKernelModule;
export let SoundBus: ISoundbusKernelModule;
export let State: IStateHandler;
export let BugHunt: IBugHuntKernelModule;
export let Printer: IPrinterKernelModule;
export let Psa: IPsaKernelModule;

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

  Fs = kernel.getModule<IFilesystemKernelModule>("fs", true);
  Env = kernel.getModule<IEnvironmentKernelModule>("env", true);
  Stack = kernel.getModule<IStackKernelModule>("stack", true);
  Server = kernel.getModule<IServerManagerKernelModule>("server", true);
  SysDispatch = kernel.getModule<ISystemDispatchKernelModule>("dispatch", true);
  SoundBus = kernel.getModule<ISoundbusKernelModule>("soundbus", true);
  BugHunt = kernel.getModule<IBugHuntKernelModule>("bughunt", true);
  Printer = kernel.getModule<IPrinterKernelModule>("printer", true);
  Psa = kernel.getModule<IPsaKernelModule>("psa", true);
}

export function GetConnector<T extends IServerConnector>(name: string, token?: string): T {
  return Server.GetConn(name, token || "");
}

export let Daemon: IUserDaemon;

export function SetDaemon(daemon: IUserDaemon) {
  Daemon = daemon;
}
