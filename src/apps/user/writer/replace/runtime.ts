import { AppProcess } from "$ts/apps/process";
import { KernelStack } from "$ts/env";
import type { AppProcessData } from "$types/app";
import type { WriterRuntime } from "../runtime";

export class ReplaceRuntime extends AppProcess {
  parent: WriterRuntime;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.parent = KernelStack().getProcess(parentPid)!;

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
