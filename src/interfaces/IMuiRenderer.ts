import type { MaybePromise } from "$types/shared/common";
import type { ReadableStore } from "$types/shared/writable";
import type { Component } from "svelte";
import type { ICommandResult } from "./ICommandResult";
import type { ModularOnClick } from "$types/system/mui";
import type { IProcess } from "./IProcess";

export interface IMuiRenderer<TProcess extends IProcess = IProcess> {
  Conditions: ReadableStore<Map<string, boolean>>;
  ConditionCallbacks: Record<string, () => MaybePromise<boolean>>;
  EmbeddedComponents: Record<string, Component<any>>;
  BlockImplementations: Record<string, Component<any> | undefined>;
  Process: TProcess;

  SetCondition(condition: string, isTrue: boolean): void;
  UpdateConditions(): Promise<void>;
  ConditionsMet(conditions: string[]): ReadableStore<boolean>;
  ResolveBlockImplementation(type: string): Component<any> | undefined;
  PerformAction(onclick?: ModularOnClick): Promise<ICommandResult>;
  Initialize(): Promise<void>;
  _Initialize(): Promise<void>;
}
