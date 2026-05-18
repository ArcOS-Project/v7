import { Daemon } from "$ts/daemon";
import { UserPaths } from "$ts/user/store";
import type { AppContextMenu, ContextMenuItem } from "$types/app";
import type { ExpandedMessage, MessageAttachment } from "$types/messaging";
import type { ReadableStore } from "$types/writable";
import type { MessagingAppRuntime } from "./runtime";

export function MessagesContextMenu(runtime: MessagingAppRuntime): AppContextMenu {
  return { "message-attachment": [AttachmentItems(runtime)] };
}

function AttachmentItems(runtime: MessagingAppRuntime): ContextMenuItem {
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
