import { BootScreen } from "$apps/core/bootscreen/metadata";
import { BootScreenRuntime } from "$apps/core/bootscreen/runtime";
import { WaveKernel } from "$ts/kernel";
import type { ProcessHandler } from "$ts/process/handler";

export default async function render() {
  const kernel = WaveKernel.get();
  const stack = kernel.getModule<ProcessHandler>("stack");

  stack.spawn<BootScreenRuntime>(BootScreenRuntime, 0, {
    data: BootScreen,
    meta: BootScreen,
    id: "bootScreen",
  });
}
