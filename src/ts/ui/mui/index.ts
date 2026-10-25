import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IMuiRenderer } from "$interfaces/IMuiRenderer";
import type { IProcess } from "$interfaces/IProcess";
import { Log } from "$ts/logging";
import { CommandResult } from "$ts/result";
import { Store } from "$ts/writable";
import type { MaybePromise } from "$types/shared/common";
import type { LogLevel } from "$types/shared/logging";
import type { ReadableStore } from "$types/shared/writable";
import type { BaseLeafBlock, ModularBlock, ModularOnClick, ModularPage } from "$types/system/mui";
import type { Component } from "svelte";
import { BaseBlockImplementations } from "./blocks";

export class MuiRenderer<
  TBlock extends ModularBlock = BaseLeafBlock,
  TPage extends ModularPage<TBlock> = ModularPage<TBlock>,
  TProcess extends IProcess = IProcess,
> implements IMuiRenderer<TProcess>
{
  protected page?: TPage;

  public Process: TProcess;
  public Conditions = Store<Map<string, boolean>>(new Map([]));
  public ConditionCallbacks: Record<string, () => MaybePromise<boolean>> = {};
  public EmbeddedComponents: Record<string, Component<any>> = {};
  public BlockImplementations: Record<string, Component<any>> = {};
  public Actions: Record<string, (...args: any[]) => MaybePromise<any>> = {};

  constructor(process: TProcess) {
    this.Process = process;
  }

  SetCondition(condition: string, isTrue: boolean) {
    this.Conditions.update((v) => {
      v.set(condition, isTrue);
      return v;
    });
  }

  async _Initialize() {
    await this.Initialize();
  }

  async Initialize() {
    // stub
  }

  async UpdateConditions() {
    for (const key in this.ConditionCallbacks) {
      const cb = this.ConditionCallbacks[key];
      const result = await cb?.();
      this.SetCondition(key, !!result);
    }
  }

  ConditionsMet(conditions: string[]): ReadableStore<boolean> {
    const store = Store<boolean>();

    this.Conditions.subscribe((v) => {
      let newValue = false;

      for (const condition of conditions) {
        const isInverted = condition.startsWith("!");
        const resolvedCondition = isInverted ? condition.slice(1) : condition;

        if (isInverted ? !v.get(resolvedCondition) : v.get(resolvedCondition)) newValue = true;
        else newValue = false;

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

  async PerformAction(onclick?: ModularOnClick): Promise<ICommandResult> {
    if (!onclick) return CommandResult.Ok();

    const action = this.Actions[onclick.operation];
    if (!action) return CommandResult.Error(`No such action ${name}`);

    try {
      return CommandResult.Ok(await action(...(onclick.arguments ?? [])));
    } catch (e) {
      return CommandResult.Error(`${e}`);
    }
  }

  protected Log(message: string, level?: LogLevel) {
    Log(`MuiRenderer::${this.Process.pid}`, message, level);
  }
}
