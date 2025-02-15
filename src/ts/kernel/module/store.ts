import { GlobalDispatcher } from "$ts/dispatch";
import { Filesystem } from "$ts/fs";
import { ArcLang } from "$ts/lang";
import { SoundBus } from "$ts/soundbus";
import { ContextMenuLogic } from "$ts/ui/context";
import { ProcessHandler } from "../../process/handler";
import { ServerManager } from "../../server";
import { Environment } from "../env";

export const KernelModules: Record<string, any> = {
  env: Environment,
  dispatch: GlobalDispatcher,
  soundbus: SoundBus,
  stack: ProcessHandler,
  server: ServerManager,
  fs: Filesystem,
  lang: ArcLang,
  context: ContextMenuLogic,
};
