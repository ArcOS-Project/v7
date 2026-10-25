import type { MaybePromise } from "$types/shared/common";
import type { ReadableStore } from "$types/shared/writable";
import type { Component } from "svelte";
import type { ICommandResult } from "./ICommandResult";
import type { JoltOnClick } from "$types/system/jui";
import type { IProcess } from "./IProcess";

export interface IJuiRenderer<TProcess extends IProcess = IProcess> {
  Conditions: ReadableStore<Map<string, boolean>>;
  ConditionCallbacks: Record<string, () => MaybePromise<boolean>>;
  EmbeddedComponents: Record<string, Component<any>>;
  BlockImplementations: Record<string, Component<any> | undefined>;
  Process: TProcess;

  SetCondition(condition: string, isTrue: boolean): void;
  UpdateConditions(): Promise<void>;
  ConditionsMet(conditions: string[]): ReadableStore<boolean>;
  ResolveBlockImplementation(type: string): Component<any> | undefined;
  PerformAction(onclick?: JoltOnClick): Promise<ICommandResult>;
  Initialize(): Promise<void>;
  _Initialize(): Promise<void>;
}
