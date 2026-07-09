import type { BooleanStore, ReadableStore, StringStore } from "$types/shared/writable";
import type { Component } from "svelte";
import type { IAppProcess } from "./IAppProcess";
import type { MaybePromise } from "$types/shared/common";
import type { ICommandResult } from "./ICommandResult";
import type { IDispatch } from "./IProcess";

export interface ITabHandler<T extends IAppProcess = IAppProcess, R extends IBaseTab = IBaseTab> {
  dispatch: IDispatch;
  hasPinned: BooleanStore;
  hasTemporary: BooleanStore;
  hasNormal: BooleanStore;
  parent: T;
  tabs: R[];
}

export interface IBaseTab<T extends IAppProcess = IAppProcess> {
  tabHandler: ITabHandler<T>;
  title: StringStore;
  icon: StringStore;
  modified: BooleanStore;
  readOnly: BooleanStore;
  loading: BooleanStore;
  pinned: BooleanStore;
  temporary: BooleanStore;
  className?: string;
  component?: Component<any>;
  identifier: string;
  onLoad(): MaybePromise<ICommandResult>;
  onClose(): MaybePromise<ICommandResult>;
  onSave(): MaybePromise<ICommandResult>;
  __onLoad(): Promise<ICommandResult>;
  __onClose(): Promise<ICommandResult>;
  __onSave(): Promise<ICommandResult>;
}
