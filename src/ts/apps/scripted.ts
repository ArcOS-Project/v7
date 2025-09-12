import type { LanguageInstance } from "$ts/kernel/mods/msl/instance";
import { KernelStack } from "$ts/kernel/mods/stack";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { AppProcess } from "./process";

export class ScriptedAppProcess extends AppProcess {
  private lang: LanguageInstance;
  public bodyStore = Store<HTMLDivElement>();
  public body: HTMLDivElement | undefined;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, lang: LanguageInstance) {
    super(pid, parentPid, app);

    this.lang = lang;
    this.lang.app = app;
    this.lang.appProcess = this;

    if (!KernelStack().renderer?.currentState.includes(this.lang.pid)) {
      KernelStack().renderer?.currentState.push(this.lang.pid);
    }
  }

  override async __render__() {
    await this.render(this.renderArgs);
    const body = (document.querySelector(`div.window[data-pid="${this.pid}"] > div.body`) as HTMLDivElement) || undefined;

    this.bodyStore.set(body);
    this.body = body;
  }

  protected async stop() {
    setTimeout(() => {
      const children = KernelStack().getSubProcesses(this.lang.pid);

      if (!children.size) this.lang.killSelf();
    }, 1000);
  }

  //#endregion
}
