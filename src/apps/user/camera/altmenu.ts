import { ShutdownIcon } from "$ts/images/power";
import type { ContextMenuItem } from "$types/app";
import type { CameraRuntime } from "./runtime";

export function CameraAltMenu(runtime: CameraRuntime): ContextMenuItem[] {
  const devices: ContextMenuItem[] = (runtime.devices() || [])
    .filter((d) => d.kind === "videoinput" && d.deviceId)
    .map((d) => ({
      caption: d.label,
      icon: "video",
      isActive: () => runtime.sourceSelect() === d.deviceId,
      action: () => runtime.sourceSelect.set(d.deviceId),
    }));

  return [
    {
      caption: "File",
      subItems: [
        {
          caption: "Change save location...",
          icon: "library",
          action: () => {
            runtime.changeSaveLocation();
          },
        },
        { sep: true },
        {
          caption: "Exit",
          image: ShutdownIcon,
          accelerator: "Alt+Q",
          action: () => runtime.closeWindow(),
        },
      ],
    },
    { caption: "Device", subItems: devices },
  ];
}
