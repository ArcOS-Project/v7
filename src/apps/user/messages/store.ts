import type { MessagingPage } from "./types";

export const messagingPages: Record<string, MessagingPage> = {
  inbox: {
    name: "Inbox",
    icon: "inbox",
    supplier: async (process) => await process.getInbox(),
  },
  unread: {
    name: "Unread messages",
    icon: "mail-warning",
    supplier: async (process) => (await process.getInbox()).filter((m) => !m.read),
  },
  sent: {
    name: "Sent messages",
    icon: "send",
    supplier: async (process) => await process.getSent(),
  },
  archived: {
    name: "Archived",
    icon: "archive",
    supplier: async (process) => await process.getArchived(),
  },
};
