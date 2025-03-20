import type { WaveKernel } from "$ts/kernel";
import { KernelModule } from "$ts/kernel/module";
import { ProcessHandler } from "$ts/process/handler";
import type { ArcLangOptions } from "$types/lang";
import { LangError } from "./error";
import { Interpreter } from "./interpreter";
import { DefaultArcLangOptions } from "./store";

export class ArcLang extends KernelModule {
  stack = this.kernel.getModule<ProcessHandler>("stack");
  locked = false;

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);
  }

  async run(code: string, parentPid: number, options: ArcLangOptions = DefaultArcLangOptions) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");
    if (this.locked) throw new LangError("ArcLang is busy");

    return new Promise(async (resolve, reject) => {
      const proc = await this.stack.spawn<Interpreter>(Interpreter, undefined, parentPid, options);

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
