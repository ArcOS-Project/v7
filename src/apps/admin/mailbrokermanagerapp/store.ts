import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
import GenericList from "./Pages/GenericList.svelte";
import Logs from "./Pages/Logs.svelte";
import NewTemplate from "./Pages/NewTemplate.svelte";
import Sent from "./Pages/Sent.svelte";
import ServerKeys from "./Pages/ServerKeys.svelte";
import ViewSentRecord from "./Pages/ViewSentRecord.svelte";
import ViewTemplate from "./Pages/ViewTemplate.svelte";
import type { MailbrokerPage, MailbrokerPages } from "./types";

export const mailbrokerPages: MailbrokerPages = new Map<string, MailbrokerPage>([
  [
    "activeTemplates",
    {
      name: "Active templates",
      icon: "mails",
      content: GenericList,
      data: async (process) => await process.admin.getMailbrokerTemplates((template) => !template.deprecated),
      scopes: [AdminScopes.adminMailbrokerTemplatesRead],
    },
  ],
  [
    "deprecatedTemplates",
    {
      name: "Deprecated templates",
      icon: "mails",
      content: GenericList,
      data: async (process) => await process.admin.getMailbrokerTemplates((template) => template.deprecated),
      scopes: [AdminScopes.adminMailbrokerTemplatesRead],
    },
  ],
  [
    "viewTemplate",
    {
      name: "View template",
      icon: "eye",
      hidden: true,
      content: ViewTemplate,
      data: async (process, props: { templateId: string }) => await process.admin.getMailbrokerTemplate(props.templateId),
      scopes: [AdminScopes.adminMailbrokerTemplatesRead],
    },
  ],
  [
    "newTemplate",
    {
      name: "Create template",
      icon: "plus",
      hidden: true,
      content: NewTemplate,
      scopes: [AdminScopes.adminMailbrokerTemplatesWrite],
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
      scopes: [AdminScopes.adminMailbrokerSentRead],
    },
  ],
  [
    "viewSentRecord",
    {
      name: "View sent record",
      icon: "eye",
      hidden: true,
      content: ViewSentRecord,
      data: async (process, props: { sentRecordId: string }) => await process.admin.getMailbrokerSentRecord(props.sentRecordId),
      scopes: [AdminScopes.adminMailbrokerSentRead],
    },
  ],
  [
    "keys",
    {
      name: "Server keys",
      icon: "key",
      content: ServerKeys,
      data: async (process) => await process.admin.getAllMailbrokerKeys(),
      scopes: [AdminScopes.adminMailbrokerKeysRead],
    },
  ],
  [
    "logs",
    {
      name: "Logs",
      icon: "list",
      content: Logs,
      data: async (process) => await process.admin.getMailbrokerLogs(),
      scopes: [AdminScopes.adminMailbrokerLogsRead],
    },
  ],
]);
