import type { BooleanStore, ReadableStore, StringStore } from "$types/shared/writable";
import type { Component } from "svelte";
import type { IAppProcess } from "./IAppProcess";
import type { MaybePromise } from "$types/shared/common";
import type { ICommandResult } from "./ICommandResult";

export interface ITabHandler<T extends IAppProcess = IAppProcess, R extends IBaseTab = IBaseTab> {
  parent: T;
  tabs: ReadableStore<R[]>;
}

export interface IBaseTab<T extends IAppProcess = IAppProcess> {
  tabHandler: ITabHandler<T>;
  title: StringStore;
  icon: StringStore;
  modified: BooleanStore;
  readOnly: BooleanStore;
  loading: BooleanStore;
  className?: string;
  component?: Component<any>;
  identifier: string;
  onOpen(): MaybePromise<ICommandResult>;
  onClose(): MaybePromise<ICommandResult>;
  onSave(): MaybePromise<ICommandResult>;
  __onOpen(): Promise<ICommandResult>;
  __onClose(): Promise<ICommandResult>;
  __onSave(): Promise<ICommandResult>;
}
