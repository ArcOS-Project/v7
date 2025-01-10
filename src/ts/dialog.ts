import { MessageBoxApp } from "$apps/components/messagebox/metadata";
import { MessageBoxRuntime } from "$apps/components/messagebox/runtime";
import type { MessageBoxData } from "$types/messagebox";
import { WaveKernel } from "./kernel";
import { ProcessHandler } from "./process/handler";

export async function MessageBox(
  data: MessageBoxData,
  parentPid: number,
  overlay = false
) {
  const kernel = WaveKernel.get();

  if (!kernel) return;

  const stack = kernel.getModule<ProcessHandler>("stack");

  const appData = { ...MessageBoxApp, overlay };

  await stack.spawn(
    MessageBoxRuntime,
    parentPid,
    {
      ...{ data: appData, id: appData.id },
    },
    data
  );
}
