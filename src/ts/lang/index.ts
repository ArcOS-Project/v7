import type { WaveKernel } from "$ts/kernel";
import { KernelModule } from "$ts/kernel/module";
import { ProcessHandler } from "$ts/process/handler";
import { LanguageInstance } from "./instance";

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
    stdin?: () => Promise<string>,
    stdout?: (m: string) => void
  ) {
    if (this.locked) throw new Error("Language is busy");

    this.locked = true;

    const process = await this.stack?.spawn<LanguageInstance>(
      LanguageInstance,
      0,
      source,
      stdin,
      stdout
    );

    if (!process) throw new Error("Failed to spawn language instance");

    try {
      const result = await process.run();

      await process.killSelf();

      return result;
    } catch (e) {
      throw e;
    } finally {
      this.locked = false;
    }
  }
}
