import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import type { AppProcessData } from "$types/app";
import type { WriterRuntime } from "../runtime";

export class ReplaceRuntime extends AppProcess {
  parent: WriterRuntime;

  //#region LIFECYCLE

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);

    this.parent = this.handler.getProcess(parentPid)!;
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
