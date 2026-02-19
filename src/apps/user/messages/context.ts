import type { AppContextMenu, ContextMenuItem } from "$types/app";
import type { MessagingAppRuntime } from "./runtime";

export function MessagesContextMenu(runtime: MessagingAppRuntime): AppContextMenu {
  return { "message-attachment": [AttachmentItems(runtime)] };
}

function AttachmentItems(runtime: MessagingAppRuntime): ContextMenuItem {
  return { caption: "Download", icon: "download" };
}
