import type { MaybePromise } from "$types/shared/common";
import type { ReadableStore } from "$types/shared/writable";
import type { Component } from "svelte";

export interface IMuiRenderer {
  Conditions: ReadableStore<Map<string, boolean>>;
  ConditionCallbacks: Map<string, () => MaybePromise<boolean>>;
  EmbeddedComponents: Record<string, Component<any>>;
  BlockImplementations: Record<string, Component<any> | undefined>;

  SetCondition(condition: string, isTrue: boolean): void;
  UpdateConditions(): Promise<void>;
  ConditionsMet(conditions: string[]): ReadableStore<boolean>;
  ResolveBlockImplementation(type: string): Component<any> | undefined;
}
