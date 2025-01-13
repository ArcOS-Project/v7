import type { WaveKernel } from "$ts/kernel";
import { KernelModule } from "$ts/kernel/module";
import { ProcessHandler } from "$ts/process/handler";
import type { LanguageOptions } from "$types/lang";
import { LanguageInstance } from "./instance";
import { DefaultLanguageOptions } from "./store";

export class ArcLang extends KernelModule {
  private stack: ProcessHandler | undefined;
  private locked = false;

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);
  }

  async _init() {
    const stack = this.kernel.getModule<ProcessHandler>("stack");

    this.stack = stack;
  }

  async run(
    source: string,
    parent: number,
    options: LanguageOptions = DefaultLanguageOptions
  ) {
    if (this.locked) throw new Error("Language is busy");

    this.locked = !options.continuous;

    const process = await this.stack?.spawn<LanguageInstance>(
      LanguageInstance,
      parent,
      source,
      options
    );

    if (!process) throw new Error("Failed to spawn language instance");

    try {
      const result = await process.run();

      await process.killSelf();

      return result;
    } catch (e) {
      if (process._disposed) return;

      throw e;
    } finally {
      this.locked = false;
    }
  }
}
