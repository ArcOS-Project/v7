import { Filesystem } from "$ts/fs";
import { ArcLang } from "$ts/lang";
import type { KernelModule } from ".";
import { ProcessHandler } from "../../process/handler";
import { ServerManager } from "../../server";

export const KernelModules: Record<string, typeof KernelModule> = {
  stack: ProcessHandler,
  server: ServerManager,
  fs: Filesystem,
  lang: ArcLang,
};
