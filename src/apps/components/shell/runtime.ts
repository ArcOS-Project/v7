import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class ShellRuntime extends AppProcess {
  public startMenuOpened = Store<boolean>(false);
  public actionCenterOpened = Store<boolean>(false);

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData
  ) {
    super(handler, pid, parentPid, app);

    const params = this.kernel.state?.stateProps["desktop"];

    console.log(params);
  }

  async render() {
    document.body.addEventListener("click", (e) => {
      const startMenu = document.querySelector("#arcShell div.startmenu");
      const startButton = document.querySelector(
        "#arcShell button.start-button"
      );
      const actionCenter = document.querySelector("#arcShell div.actioncenter");
      const actionCenterButton = document.querySelector(
        "#arcShell button.action-center-button"
      );

      const composed = e.composedPath();

      if (
        startMenu &&
        startButton &&
        !composed.includes(startMenu) &&
        !composed.includes(startButton)
      )
        this.startMenuOpened.set(false);

      if (
        actionCenter &&
        actionCenterButton &&
        !composed.includes(actionCenter) &&
        !composed.includes(actionCenterButton)
      )
        this.actionCenterOpened.set(false);
    });
  }
}
