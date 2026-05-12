import type { IMessagingAppRuntime } from "$interfaces/runtimes/IMessagingAppRuntime";
import { Daemon } from "$ts/env";
import { UserPaths } from "$ts/user/store";
import type { AppContextMenu, ContextMenuItem } from "$types/app";
import type { ExpandedMessage, MessageAttachment } from "$types/messaging";
import type { ReadableStore } from "$types/writable";

export function MessagesContextMenu(runtime: IMessagingAppRuntime): AppContextMenu {
  return { "message-attachment": [AttachmentItems(runtime)] };
}

function AttachmentItems(runtime: IMessagingAppRuntime): ContextMenuItem {
  return {
    caption: "Download",
    icon: "download",
    action: async (message: ReadableStore<ExpandedMessage | undefined>, attachment: MessageAttachment) => {
      const [path] = await Daemon!.files!.LoadSaveDialog({
        title: "Choose where to save the attachment",
        startDir: UserPaths.Downloads,
        icon: "MessagingIcon",
        folder: true,
      });

      if (!path) return;

      runtime.service.downloadAttachments(message()!, [attachment], path);
    },
  };
}
