import Logs from "./Pages/Logs.svelte";
import Sent from "./Pages/Sent.svelte";
import Templates from "./Pages/Templates.svelte";
import type { MailbrokerPage, MailbrokerPages } from "./types";

export const mailbrokerPages: MailbrokerPages = new Map<string, MailbrokerPage>([
  [
    "templates",
    {
      name: "Templates",
      icon: "mails",
      content: Templates,
      data: async (process) => await process.admin.getMailbrokerTemplates(),
    },
  ],
  [
    "sent",
    {
      name: "Sent emails",
      icon: "send",
      content: Sent,
      separator: true,
      data: async (process) => await process.admin.getMailbrokerSentRecords(),
    },
  ],
  [
    "logs",
    {
      name: "Logs",
      icon: "list",
      content: Logs,
      data: async (process) => await process.admin.getMailbrokerLogs(),
    },
  ],
]);
