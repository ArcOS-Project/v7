import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IBaseTab, ITabHandler } from "$interfaces/ITabHandler";
import { Log } from "$ts/logging";
import { CommandResult } from "$ts/result";
import { Store } from "$ts/writable";
import type { MaybePromise } from "$types/shared/common";
import { LogLevel } from "$types/shared/logging";
import { TabState } from "$types/shared/tabs";
import type { Component } from "svelte";

export class BaseTab<Proc extends IAppProcess = IAppProcess> implements IBaseTab<Proc> {
  public title = Store<string>("BaseTab");
  public icon = Store<string>("");
  public modified = Store<boolean>(false);
  public readOnly = Store<boolean>(false);
  public loading = Store<boolean>(false);
  public state = TabState.Normal;
  public className?: string;
  public component?: Component<any>;
  public identifier: string;
  public tabHandler: ITabHandler<Proc>;
  protected allowSaveWhenNotModified = false;

  constructor(parent: ITabHandler<Proc>, identifier: string, ...args: any[]) {
    this.Log(`${this.constructor.name} constructing`);

    this.identifier = identifier;
    this.tabHandler = parent;
  }

  public onLoad(): MaybePromise<ICommandResult> {
    // stub
    return CommandResult.Ok();
  }

  public onCreated(): MaybePromise<ICommandResult> {
    // stub
    return CommandResult.Ok();
  }

  public onClose(): MaybePromise<ICommandResult> {
    // stub
    return CommandResult.Ok();
  }

  public onSave(): MaybePromise<ICommandResult> {
    return CommandResult.Ok();
  }

  public async __onLoad(): Promise<ICommandResult> {
    this.Log(`OnLoad`);

    return await this.onLoad();
  }

  public async __onClose(): Promise<ICommandResult> {
    this.Log(`OnClose`);
    return await this.onClose();
  }

  public async __onCreated(): Promise<ICommandResult> {
    this.Log(`OnCreated`);
    return await this.onCreated();
  }

  public async __onSave(): Promise<ICommandResult> {
    this.Log(`OnSave`);
    if (!this.modified() && !this.allowSaveWhenNotModified) return CommandResult.Ok();

    const result = await this.onSave();
    if (result.success) this.modified.set(false);

    return result;
  }

  protected Log(message: string, level = LogLevel.info) {
    Log(`BaseTab::${this.identifier}`, message, level);
  }
}
