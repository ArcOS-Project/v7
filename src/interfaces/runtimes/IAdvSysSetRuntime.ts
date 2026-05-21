import type { IAppProcess } from "$interfaces/IAppProcess";
import type { UserPreferences } from "$types/user";
import type { ReadableStore, Unsubscriber } from "$types/writable";
import type { Component } from "svelte";

export interface IAdvSysSetRuntime extends IAppProcess {
  currentTab: ReadableStore<string>;
  tabs: Record<string, Component>;
  preferencesBuffer: ReadableStore<UserPreferences>;
  syncInitialized: boolean;
  bufferInitialized: boolean;
  bufferChanged: ReadableStore<boolean>;
  displayingDesync: boolean;
  preferencesSub?: Unsubscriber;
  bufferSub?: Unsubscriber;

  apply(close?: boolean): void;
}
