import type { IMuiRenderer } from "$interfaces/IMuiRenderer";
import type { IProcess } from "$interfaces/IProcess";
import { Store } from "$ts/writable";
import type { MaybePromise } from "$types/shared/common";
import type { ReadableStore } from "$types/shared/writable";
import type { BaseLeafBlock, ModularBlock, ModularPage } from "$types/system/mui";
import type { Component } from "svelte";
import { BaseBlockImplementations } from "./blocks";

export class MuiRenderer<
  TBlock extends ModularBlock = BaseLeafBlock,
  TPage extends ModularPage<TBlock> = ModularPage<TBlock>,
  TProcess extends IProcess = IProcess,
> implements IMuiRenderer
{
  protected process: TProcess;
  protected page?: TPage;

  public Conditions = Store<Map<string, boolean>>(new Map([]));
  public ConditionCallbacks = new Map<string, () => MaybePromise<boolean>>([]);
  public EmbeddedComponents: Record<string, Component<any>> = {};
  public BlockImplementations: Record<string, Component<any>> = {};

  constructor(process: TProcess) {
    this.process = process;
  }

  SetCondition(condition: string, isTrue: boolean) {
    this.Conditions.update((v) => {
      v.set(condition, isTrue);
      return v;
    });
  }

  async UpdateConditions() {
    for (const key of this.ConditionCallbacks.keys()) {
      const cb = this.ConditionCallbacks.get(key);
      const result = await cb?.();
      this.SetCondition(key, !!result);
    }
  }

  ConditionsMet(conditions: string[]): ReadableStore<boolean> {
    const store = Store<boolean>();

    this.Conditions.subscribe((v) => {
      let newValue = true;

      for (const condition of conditions) {
        const isInverted = condition.startsWith("!");
        const resolvedCondition = isInverted ? condition.slice(1) : condition;

        if (isInverted ? v.get(resolvedCondition) : !v.get(resolvedCondition)) newValue = false;
        if (!newValue) break;
      }

      store.set(newValue);
    });

    return store;
  }

  ResolveBlockImplementation(type: string): Component<any> | undefined {
    const implementations = { ...this.BlockImplementations, ...BaseBlockImplementations };

    return implementations[type];
  }
}
