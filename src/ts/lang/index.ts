import type { WaveKernel } from "$ts/kernel";
import { getKMod, KernelModule } from "$ts/kernel/module";
import { ProcessHandler } from "$ts/process/handler";
import type { ArcLangOptions } from "$types/lang";
import { LangError } from "./error";
import { Interpreter } from "./interpreter";
import { DefaultArcLangOptions } from "./store";

export class ArcLang extends KernelModule {
  stack = getKMod<ProcessHandler>("stack");
  locked = false;

  //#region LIFECYCLE

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);
  }

  //#endregion

  async run(code: string, parentPid: number, options: ArcLangOptions = DefaultArcLangOptions) {
    this.isKmod();
    if (this.locked) throw new LangError("ArcLang is busy");

    return new Promise(async (resolve, reject) => {
      const proc = await this.stack.spawn<Interpreter>(Interpreter, undefined, "SYSTEM", parentPid, options);

      if (!proc) throw new LangError("Failed to spawn language instance");

      try {
        await proc.run(code);
        resolve(proc);
      } catch (e) {
        reject(e);
        await proc?.killSelf();
      }
    });
  }
}
