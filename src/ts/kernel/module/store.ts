import { BugHuntKernelModule } from "$ts/kernel/mods/bughunt";
import { SystemDispatchKernelModule } from "$ts/kernel/mods/dispatch";
import { FilesystemKernelModule } from "$ts/kernel/mods/fs";
import { SoundBusKernelModule } from "$ts/kernel/mods/soundbus";
import { EnvironmentKernelModule } from "../mods/env";
import { PrinterKernelModule } from "../mods/printer";
import { PsaKernelModule } from "../mods/psa";
import { ServerManagerKernelModule } from "../mods/server";
import { StackKernelModule } from "../mods/stack";

export const KernelModules: Record<string, any> = {
  env: EnvironmentKernelModule,
  dispatch: SystemDispatchKernelModule,
  soundbus: SoundBusKernelModule,
  stack: StackKernelModule,
  server: ServerManagerKernelModule,
  bughunt: BugHuntKernelModule,
  fs: FilesystemKernelModule,
  printer: PrinterKernelModule,
  psa: PsaKernelModule,
};
