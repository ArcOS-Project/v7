import { Logo } from "$ts/branding";
import { ProfilePictures } from "$ts/images/pfp";
import { Store } from "$ts/writable";
import { AppProcess } from "../../../ts/apps/process";
import type { ProcessHandler } from "../../../ts/process/handler";
import type { AppProcessData } from "../../../types/app";

export class LoginAppRuntime extends AppProcess {
  public status = Store<string>("");
  public displayStatus = Store<boolean>(false);
  public working = Store<boolean>(false);
  public profileImage = Store<string>(Logo());

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData
  ) {
    super(handler, pid, parentPid, app);
  }

  async proceed(username: string, password: string) {
    if (this.working.get()) return;

    this.showStatus("loading...");
    this.profileImage.set(ProfilePictures.def);
    this.working.set(true);
  }

  showStatus(status: string) {
    this.displayStatus.set(true);
    this.status.set(status);
  }

  hideStatus() {
    this.displayStatus.set(false);
  }
}
