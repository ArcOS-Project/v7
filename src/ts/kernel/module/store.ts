import { GlobalDispatcher } from "$ts/dispatch";
import { Filesystem } from "$ts/fs";
import { ArcLang } from "$ts/lang";
import { RoturExtension } from "$ts/rotur";
import { SoundBus } from "$ts/soundbus";
import { ContextMenuLogic } from "$ts/ui/context";
import type { KernelModule } from ".";
import { ProcessHandler } from "../../process/handler";
import { ServerManager } from "../../server";
import { Environment } from "../env";

export const KernelModules: Record<string, typeof KernelModule> = {
  env: Environment,
  dispatch: GlobalDispatcher,
  soundbus: SoundBus,
  stack: ProcessHandler,
  server: ServerManager,
  fs: Filesystem,
  lang: ArcLang,
  rotur: RoturExtension,
  context: ContextMenuLogic,
};
