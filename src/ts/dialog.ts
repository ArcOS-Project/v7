import { MessageBoxApp } from "$apps/components/messagebox/messageBox";
import { MessageBoxRuntime } from "$apps/components/messagebox/runtime";
import type { ConfirmationData, MessageBoxData } from "$types/messagebox";
import { getKMod } from "./kernel/module";
import { ProcessHandler } from "./process/handler";

export async function MessageBox(data: MessageBoxData, parentPid: number, overlay = false) {
  const stack = getKMod<ProcessHandler>("stack");

  const appData = { ...MessageBoxApp, overlay: overlay && !!stack.getProcess(parentPid) };

  await stack.spawn(
    MessageBoxRuntime,
    undefined,
    "SYSTEM",
    parentPid,
    {
      ...{ data: appData, id: appData.id },
    },
    data
  );
}

export async function GetConfirmation(data: ConfirmationData, parentPid: number, overlay = false) {
  return new Promise<boolean>((r) => {
    MessageBox(
      {
        ...data,
        buttons: [
          { caption: "No", action: () => r(false) },
          { caption: "Yes", action: () => r(true), suggested: true },
        ],
      },
      parentPid,
      overlay
    );
  });
}
