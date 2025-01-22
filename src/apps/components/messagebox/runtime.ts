import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import type { AppProcessData } from "$types/app";
import { LogLevel } from "$types/logging";
import type { MessageBoxData } from "$types/messagebox";

export class MessageBoxRuntime extends AppProcess {
  data: MessageBoxData | undefined;

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    data: MessageBoxData
  ) {
    super(handler, pid, parentPid, app);

    this.data = data;
  }

  async start() {
    if (!this.data) {
      this.Log(`Can't spawn a message box with missing data`, LogLevel.error);

      await this.closeWindow();

      return;
    }
  }

  async render() {
    this.windowTitle.set(this.data?.title!);
    if (this.data?.image) this.windowIcon.set(this.data?.image);
  }
}
