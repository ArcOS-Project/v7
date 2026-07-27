import type { BooleanStore, ReadableStore, StringStore } from "$types/shared/writable";
import type { Component } from "svelte";
import type { IAppProcess } from "./IAppProcess";
import type { MaybePromise } from "$types/shared/common";
import type { ICommandResult } from "./ICommandResult";
import type { Constructs } from "./common";
import type { TabState } from "$types/shared/tabs";

export interface ITabHandler<Proc extends IAppProcess = IAppProcess, TabType extends IBaseTab = IBaseTab> {
  parent: Proc;
  tabs: ReadableStore<TabType[]>;
  activeTab: StringStore;
  hasNormal: BooleanStore;
  hasPinned: BooleanStore;
  hasTemporary: BooleanStore;
  openTab(tab: Constructs<TabType, [ITabHandler<Proc>, string, ...any[]]>, ...args: any[]): Promise<ICommandResult<TabType>>;
  getTab(id: string): ICommandResult<TabType>;
  closeTab(id: string): Promise<ICommandResult>;
  saveTab(id: string): Promise<ICommandResult>;
  getModifiedList(): TabType[];
  saveAll(): Promise<ICommandResult>;
  changeTabState(id: string, newState: TabState): ICommandResult;
  newTab?(): Promise<ICommandResult<TabType>>;
}

export interface IBaseTab<Proc extends IAppProcess = IAppProcess> {
  tabHandler: ITabHandler<Proc>;
  title: StringStore;
  icon: StringStore;
  modified: BooleanStore;
  readOnly: BooleanStore;
  loading: BooleanStore;
  state: TabState;
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
