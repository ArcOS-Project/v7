import { AppProcess } from "$ts/apps/process";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { LogLevel } from "$types/logging";
import type { MessageBoxData } from "$types/messagebox";

export class MessageBoxRuntime extends AppProcess {
  data: MessageBoxData | undefined;
  acted = Store<boolean>(false);

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, data: MessageBoxData) {
    super(pid, parentPid, app);

    // Fallback to default data if missing
    this.data = data || {
      title: "MsgBox::title",
      message: "MsgBox::message",
      buttons: [],
      image: "ComponentIcon",
    };

    if (this.data.sound) this.soundBus.playSound(this.data.sound); // Play the sound

    this.setSource(__SOURCE__);
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

  async onClose(): Promise<boolean> {
    if (this.acted()) return true;

    // Gross way to determine the primary action of the dialog
    await this.data?.buttons
      .reverse()
      .filter((b) => b.suggested)[0]
      ?.action();

    return true;
  }

  //#endregion
}
