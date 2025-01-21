import type { WaveKernel } from "$ts/kernel";
import { KernelModule } from "$ts/kernel/module";
import { ProcessHandler } from "$ts/process/handler";
import Contextmenu from "@lemonadejs/contextmenu";

export class ContextMenu extends KernelModule {
  handler: ProcessHandler;
  target: HTMLDivElement | undefined;

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);

    this.handler = kernel.getModule<ProcessHandler>("stack");
    this.target = this.handler.renderer?.target;
  }

  async createMenu(options: Contextmenu.Options) {
    Contextmenu(this.target!, options);
  }
}
