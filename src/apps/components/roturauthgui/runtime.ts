import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { RoturIcon } from "$ts/images/general";
import type { ProcessHandler } from "$ts/process/handler";
import type { UserDaemon } from "$ts/server/user/daemon";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class RoturAuthGuiProcess extends AppProcess {
  providedUserDaemon: UserDaemon;
  isRegistering = Store<boolean>(false);

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    userDaemon: UserDaemon
  ) {
    super(handler, pid, parentPid, app);

    this.providedUserDaemon = userDaemon;
  }

  async _start() {
    this.userDaemon ||= this.providedUserDaemon;
  }

  async render() {
    if (this.userDaemon?.preferences().account.roturToken) {
      MessageBox(
        {
          title: "Unnecessary invocation",
          message:
            "RoturAuthGuiProcess was invoked while the user is already authenticated. This shouldn't happen.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          sound: "arcos.system.error",
          image: RoturIcon,
        },
        this.parentPid
      );

      this.killSelf();
    }
  }
}
