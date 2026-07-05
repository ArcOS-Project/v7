import type { Constructs } from "$interfaces/common";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IBaseTab, ITabHandler } from "$interfaces/ITabHandler";
import { Log } from "$ts/logging";
import { CommandResult } from "$ts/result";
import { UUID } from "$ts/util/uuid";
import { Store } from "$ts/writable";
import { LogLevel } from "$types/shared/logging";

export class TabHandler<T extends IAppProcess = IAppProcess, R extends IBaseTab = IBaseTab<T>> implements ITabHandler<T, R> {
  parent: T;
  tabs = Store<R[]>([]);
  activeTab = Store<string>();

  constructor(parent: T) {
    this.parent = parent;
  }

  Log(message: string, level = LogLevel.info) {
    Log(`BaseTab::${this.parent.name}[${this.parent.pid}]`, message, level);
  }

  async openTab(tab: Constructs<R, [ITabHandler<T>, string, ...any[]]>, ...args: any[]): Promise<ICommandResult<R>> {
    const instance = new tab(this, UUID(), ...args);
    const openResult = await instance.__onOpen();

    if (openResult.success) {
      this.tabs.update((v) => {
        v.push(instance);
        return v;
      });

      return CommandResult.Ok(instance);
    }

    return openResult;
  }

  async getTab(id: string): Promise<ICommandResult<R>> {
    const tab = this.tabs().find((t) => t.identifier === id);

    if (!tab) return CommandResult.Error(`No such tab '${id}'`);
    return CommandResult.Ok(tab);
  }

  async closeTab(id: string): Promise<ICommandResult> {
    const tabResult = await this.getTab(id);
    if (!tabResult.success) return tabResult;

    const tab = tabResult.result!;
    const closeResult = await tab.__onClose();
    if (!closeResult.success) return closeResult;

    this.tabs.set(this.tabs().filter((t) => t.identifier !== id));

    return CommandResult.Ok();
  }

  async saveTab(id: string): Promise<ICommandResult> {
    const tabResult = await this.getTab(id);
    if (!tabResult.success) return tabResult;

    const tab = tabResult.result!;
    const saveResult = await tab.__onSave();
    if (!saveResult.success) return saveResult;

    return CommandResult.Ok();
  }

  getModifiedList(): R[] {
    return this.tabs().filter((t) => !!t.modified());
  }

  async saveAll(): Promise<ICommandResult> {
    if (this.getModifiedList().length > 1) return CommandResult.Error("Multiple tabs have to be saved individually (for now).");

    // wip

    return CommandResult.Ok();
  }
}
