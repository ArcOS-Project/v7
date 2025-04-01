import { BugHunt } from "$ts/bughunt";
import { GlobalDispatcher } from "$ts/dispatch";
import { Filesystem } from "$ts/fs";
import { ArcLang } from "$ts/lang";
import { ArcMSL } from "$ts/msl";
import { SoundBus } from "$ts/soundbus";
import { ProcessHandler } from "../../process/handler";
import { ServerManager } from "../../server";
import { Environment } from "../env";

export const KernelModules: Record<string, any> = {
  env: Environment,
  dispatch: GlobalDispatcher,
  soundbus: SoundBus,
  stack: ProcessHandler,
  server: ServerManager,
  bughunt: BugHunt,
  fs: Filesystem,
  msl: ArcMSL,
  lang: ArcLang,
};
