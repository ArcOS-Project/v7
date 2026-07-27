import type { Constructs } from "$interfaces/common";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IBaseTab, ITabHandler } from "$interfaces/ITabHandler";
import { Log } from "$ts/logging";
import { CommandResult } from "$ts/result";
import { UUID } from "$ts/util/uuid";
import { Store } from "$ts/writable";
import { LogLevel } from "$types/shared/logging";
import { TabState, type TabHandlerConstructorOptions } from "$types/shared/tabs";

export class TabHandler<Proc extends IAppProcess = IAppProcess, TabType extends IBaseTab<Proc> = IBaseTab<Proc>>
  implements ITabHandler<Proc, TabType>
{
  parent: Proc;
  tabs = Store<TabType[]>([]);
  activeTab = Store<string>();
  hasNormal = Store<boolean>(false);
  hasPinned = Store<boolean>(false);
  hasTemporary = Store<boolean>(false);
  newTab?(): Promise<ICommandResult<TabType>>;

  constructor(parent: Proc, options?: TabHandlerConstructorOptions<Proc, TabType>) {
    this.parent = parent;

    if (options) {
      this.newTab = options.newTab;
    }

    this.tabs.subscribe((v) => {
      this.hasNormal.set(!!v.find((t) => t.state === TabState.Normal));
      this.hasPinned.set(!!v.find((t) => t.state === TabState.Pinned));
      this.hasTemporary.set(!!v.find((t) => t.state === TabState.Temporary));
    });
  }

  Log(message: string, level = LogLevel.info) {
    Log(`BaseTab::${this.parent.name}[${this.parent.pid}]`, message, level);
  }

  async openTab(
    tab: Constructs<TabType, [ITabHandler<Proc>, string, ...any[]]>,
    ...args: any[]
  ): Promise<ICommandResult<TabType>> {
    const instance = new tab(this, UUID(), ...args);
    const openResult = await instance.__onLoad();

    if (openResult.success) {
      this.tabs.update((v) => {
        v.push(instance);
        return v;
      });

      return CommandResult.Ok(instance);
    }

    return openResult;
  }

  getTab(id: string): ICommandResult<TabType> {
    const tab = this.tabs().find((t) => t.identifier === id);

    if (!tab) return CommandResult.Error(`No such tab '${id}'`);
    return CommandResult.Ok(tab);
  }

  async closeTab(id: string): Promise<ICommandResult> {
    const tabResult = this.getTab(id);
    if (!tabResult.success) return tabResult;

    const tab = tabResult.result!;
    const closeResult = await tab.__onClose();
    if (!closeResult.success) return closeResult;

    this.tabs.update((v) => {
      v = v.filter((t) => t.identifier !== id);
      return v;
    });

    return CommandResult.Ok();
  }

  async saveTab(id: string): Promise<ICommandResult> {
    const tabResult = this.getTab(id);
    if (!tabResult.success) return tabResult;

    const tab = tabResult.result!;
    const saveResult = await tab.__onSave();
    if (!saveResult.success) return saveResult;

    return CommandResult.Ok();
  }

  getModifiedList(): TabType[] {
    return this.tabs().filter((t) => !!t.modified());
  }

  async saveAll(): Promise<ICommandResult> {
    if (this.getModifiedList().length > 1) return CommandResult.Error("Multiple tabs have to be saved individually (for now).");

    // wip

    return CommandResult.Ok();
  }

  public changeTabState(id: string, newState: TabState): ICommandResult {
    return this.UpdateTab(id, (tab) => {
      tab.state = newState;
      return tab;
    });
  }

  private UpdateTab(id: string, predicate: (tab: TabType) => TabType): ICommandResult {
    var existingTabResult = this.getTab(id);
    if (!existingTabResult.success) return existingTabResult;

    this.tabs.update((v) => {
      const index = v.findIndex((t) => t.identifier);
      const tab = predicate(v[index]);

      v[index] = tab;

      return v;
    });

    return CommandResult.Ok();
  }
}
