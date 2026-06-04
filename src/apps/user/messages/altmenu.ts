import type { IMessagingAppRuntime } from "$interfaces/runtimes/IMessagingAppRuntime";
import type { ContextMenuItem } from "$types/apps/app";
import { messagingPages } from "./store";

export function MessagesAltMenu(runtime: IMessagingAppRuntime): ContextMenuItem[] {
  return [
    {
      caption: "File",
      subItems: [
        {
          caption: "Compose message",
          icon: "plus",
          action: () => runtime.compose(),
        },
        { sep: true },
        ...MessagingPagesMenuItems(runtime),
        { sep: true },
        {
          caption: "Refresh",
          icon: "rotate-cw",
          action: () => runtime.refresh(),
        },
        {
          caption: "Exit",
          accelerator: "Ctrl+Q",
          action: () => runtime.closeWindow(),
          image: "ShutdownIcon",
        },
      ],
    },
    {
      caption: "Message",
      subItems: [
        {
          caption: "Reply",
          icon: "reply",
          disabled: () => !runtime.message(),
          action: () => runtime.replyTo(runtime.message()!),
        },
        {
          caption: "Forward",
          icon: "forward",
          disabled: () => !runtime.message(),
          action: () => runtime.forward(runtime.message()!),
        },
        { sep: true },
        {
          caption: "Save message to file...",
          icon: "save",
          disabled: () => !runtime.message(),
          action: () => runtime.saveMessage(),
        },
        {
          caption: "Download attachments...",
          icon: "file-down",
          disabled: () => !runtime.message(),
          action: () => runtime.downloadAttachments(),
        },
        { sep: true },
        {
          caption: "Archive message",
          icon: "archive",
          disabled: () => !runtime.message(),
          action: () => runtime.toggleArchived(runtime.message()!),
          isActive: () => !!runtime.message() && runtime.isArchived(runtime.message()?._id!),
        },
        {
          caption: "Delete message",
          icon: "trash-2",
          disabled: () => !runtime.message(),
          action: () => runtime.deleteMessage(runtime.message()!._id),
        },
      ],
    },
  ];
}

function MessagingPagesMenuItems(runtime: IMessagingAppRuntime): ContextMenuItem[] {
  return Object.entries(messagingPages).map(([id, page]) => ({
    caption: page.name,
    icon: page.icon,
    action: () => runtime.switchPage(id),
    isActive: () => runtime.pageId() === id,
  }));
}
