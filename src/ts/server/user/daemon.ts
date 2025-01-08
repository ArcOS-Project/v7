import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";

export class UserDaemon extends Process {
  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    token: string,
    username: string
  ) {
    super(handler, pid, parentPid);
  }
}
