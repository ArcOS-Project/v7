import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IBaseTab, ITabHandler } from "$interfaces/ITabHandler";
import { Log } from "$ts/logging";
import { CommandResult } from "$ts/result";
import { Store } from "$ts/writable";
import type { MaybePromise } from "$types/shared/common";
import { LogLevel } from "$types/shared/logging";
import type { Component } from "svelte";

export class BaseTab<T extends IAppProcess = IAppProcess> implements IBaseTab<T> {
  public title = Store<string>("BaseTab");
  public icon = Store<string>("");
  public modified = Store<boolean>(false);
  public readOnly = Store<boolean>(false);
  public loading = Store<boolean>(false);
  public className?: string;
  protected allowSaveWhenNotModified = false;
  public component?: Component<any>;
  public identifier: string;
  public tabHandler: ITabHandler<T>;

  constructor(parent: ITabHandler<T>, identifier: string, ...args: any[]) {
    this.identifier = identifier;
    this.tabHandler = parent;
  }

  public onOpen(): MaybePromise<ICommandResult> {
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

  public async __onOpen(): Promise<ICommandResult> {
    return await this.onOpen();
  }

  public async __onClose(): Promise<ICommandResult> {
    return await this.onClose();
  }

  public async __onSave(): Promise<ICommandResult> {
    if (!this.modified() && !this.allowSaveWhenNotModified) return CommandResult.Ok();

    const result = await this.onSave();
    if (result.success) this.modified.set(false);

    return result;
  }

  protected Log(message: string, level = LogLevel.info) {
    Log(`BaseTab::${this.identifier}`, message, level);
  }
}
