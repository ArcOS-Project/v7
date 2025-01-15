import type { WaveKernel } from "$ts/kernel";
import { KernelModule } from "$ts/kernel/module";
import { ProcessHandler } from "$ts/process/handler";
import type { LanguageOptions } from "$types/lang";
import { PrematureLanguageError } from "./error";
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
    if (this.locked) throw new PrematureLanguageError("Language is busy");

    this.locked = !options.continuous;

    const process = await this.stack?.spawn<LanguageInstance>(
      LanguageInstance,
      parent,
      source,
      options
    );

    if (!process)
      throw new PrematureLanguageError("Failed to spawn language instance");

    try {
      process.watchException();

      const result = await process.run();

      return result;
    } catch (e) {
      if (process._disposed) return;

      console.log(e);

      throw e;
    } finally {
      await process.killSelf();

      this.locked = false;
    }
  }
}
