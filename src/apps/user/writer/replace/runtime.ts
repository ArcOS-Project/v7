import type { IWriterRuntime } from "$interfaces/runtimes/IWriterRuntime";
import { AppProcess } from "$ts/apps/process";
import { Stack } from "$ts/env";
import type { AppProcessData } from "$types/app";

export class ReplaceRuntime extends AppProcess {
  parent: IWriterRuntime;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.parent = Stack.getProcess(parentPid)!;

    this.setSource(__SOURCE__);
  }

  //#endregion

  public replaceOnce(text: string, replacer: string) {
    const buffer = this.parent.buffer();

    this.parent.buffer.set(buffer.replace(text, replacer));
  }

  public replaceAll(text: string, replacer: string) {
    const buffer = this.parent.buffer();

    this.parent.buffer.set(buffer.replaceAll(text, replacer));
  }
}
