import { GlobalDispatcher } from "$ts/dispatch";
import { Filesystem } from "$ts/fs";
import { ArcLang } from "$ts/lang";
import { RoturExtension } from "$ts/rotur";
import type { KernelModule } from ".";
import { ProcessHandler } from "../../process/handler";
import { ServerManager } from "../../server";

export const KernelModules: Record<string, typeof KernelModule> = {
  stack: ProcessHandler,
  server: ServerManager,
  dispatch: GlobalDispatcher,
  fs: Filesystem,
  lang: ArcLang,
  rotur: RoturExtension,
};
