import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IMailbrokerManagerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
import type { MaybePromise } from "$types/shared/common";
import type { Component } from "svelte";

export interface MailbrokerPage {
  name: string;
  icon: string;
  content: Component<any>;
  hidden?: boolean;
  separator?: boolean;
  data?: (process: IMailbrokerManagerRuntime, pageProps: any) => MaybePromise<ICommandResult<Record<string, any>>>;
  scopes?: string[];
}

export type MailbrokerPages = Map<string, MailbrokerPage>;
