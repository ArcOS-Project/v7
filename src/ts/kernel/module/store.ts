import { BugHunt } from "$ts/kernel/mods/bughunt";
import { SystemDispatch } from "$ts/kernel/mods/dispatch";
import { Filesystem } from "$ts/kernel/mods/fs";
import { ArcLang } from "$ts/kernel/mods/lang";
import { ArcMSL } from "$ts/kernel/mods/msl";
import { SoundBus } from "$ts/kernel/mods/soundbus";
import { ProcessHandler } from "../mods/stack";
import { ServerManager } from "../mods/server";
import { Environment } from "../mods/env";

export const KernelModules: Record<string, any> = {
  env: Environment,
  dispatch: SystemDispatch,
  soundbus: SoundBus,
  stack: ProcessHandler,
  server: ServerManager,
  bughunt: BugHunt,
  fs: Filesystem,
  msl: ArcMSL,
  lang: ArcLang,
};
