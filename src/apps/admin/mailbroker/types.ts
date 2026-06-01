import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IMailbrokerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
import type { MaybePromise } from "$types/shared/common";
import type { Component } from "svelte";

export interface MailbrokerPage {
  name: string;
  icon: string;
  content: Component<any>;
  hidden?: boolean;
  separator?: boolean;
  data?: (process: IMailbrokerRuntime) => MaybePromise<ICommandResult<Record<string, any>>>;
}

export type MailbrokerPages = Map<string, MailbrokerPage>;
