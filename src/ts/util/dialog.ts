import type { IProcessHandler } from "$interfaces/modules/IProcessHandler";
import { Daemon } from "$ts/env";
import type { App } from "$types/apps/app";
import type { ConfirmationData, MessageBoxData } from "$types/shared/messagebox";
import type { ErrorButton } from "$types/system/notification";
import { getKMod } from "../env";

export async function MessageBox(data: MessageBoxData, parentPid: number, overlay = false) {
  const stack = getKMod<IProcessHandler>("stack");
  const messageBox = (await import("$apps/components/messagebox/messageBox")).default as App;
  const appData = { ...messageBox, overlay: overlay && !!stack.getProcess(parentPid) };
  const desktop = Daemon?.workspaces?.getCurrentDesktop();

  await stack.spawn(
    appData.assets.runtime,
    desktop,
    "SYSTEM",
    parentPid,
    {
      ...{ data: appData, id: appData.id, desktop },
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

export const ConditionalButton = (button: ErrorButton, condition: any) => (!!condition ? [button] : []);
