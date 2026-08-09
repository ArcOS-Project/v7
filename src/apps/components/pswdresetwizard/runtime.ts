import type { IUserConnector } from "$interfaces/modules/server/IUserConnector";
import type { INewLoginAppRuntime } from "$interfaces/runtimes/INewLoginAppRuntime";
import type { IPswdResetWizardRuntime } from "$interfaces/runtimes/IPswdResetWizardRuntime";
import { AppProcess } from "$ts/apps/process";
import { Daemon, Env, GetConnector, Kernel, Stack } from "$ts/env";
import { GoodStatusIcon } from "$ts/images/status";
import { MessageBox } from "$ts/util/dialog";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/apps/app";
import { PswdResetPages } from "./store";
import type { PswdResetPage } from "./types";

export class PswdResetWizardRuntime extends AppProcess implements IPswdResetWizardRuntime {
  public RecoveryUsername = Store<string>("");
  public RecoveryCode = Store<string>("");
  public NewPassword = Store<string>("");

  public Loading = Store<boolean>(false);
  public CurrentPage = Store<PswdResetPage | undefined>();
  public ErrorMessage = Store<string>("");

  // for callback to login
  public Finished = Store<boolean>(false);

  public get LoginRuntime(): INewLoginAppRuntime {
    const proc = Stack.getProcess<INewLoginAppRuntime>(+Env.get("LOGINAPP_PID"));
    if (!proc) throw new Error("Reference to NewLoginAppRuntime could not be obtained");

    return proc;
  }

  async onClose(): Promise<boolean> {
    this.Finished.set(true);
    return true;
  }

  private RecoveryUserId?: string;
  private ResetToken?: string;
  private Pages = PswdResetPages(this);
  private get UserConnector(): IUserConnector {
    return GetConnector<IUserConnector>("UserConnector");
  }

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    if (Daemon && !Daemon?._disposed) throw new Error("PswdResetWizard illegal invocation");
  }

  protected async start(): Promise<any> {
    const daemonHasRun = !!Kernel.Logs.find((log) => log.source === "UserDaemon.Hello" && log.message === "HELLO!");

    this.SwitchPage(daemonHasRun ? "restartFirst" : "enterUsername");

    this.Loading.subscribe((v) => {
      if (v) this.ErrorMessage.set("");
    });
  }

  public async DoSendEmail() {
    if (!this.RecoveryUsername()) return;

    this.Loading.set(true);
    const result = await this.UserConnector.CreatePswdResetRequest(this.RecoveryUsername());
    this.Loading.set(false);

    if (!result.success) {
      this.ErrorMessage.set(result.errorMessage ?? "An unknown error has occurred. Please talk to an administrator.");
      return;
    }

    this.RecoveryUserId = result.result?.userId;
    this.SwitchPage("verification");
  }

  public async DoVerify() {
    if (!this.RecoveryCode()) return;

    this.Loading.set(true);
    const result = await this.UserConnector.VerifyPswdResetRequest(this.RecoveryUserId!, this.RecoveryCode());
    this.Loading.set(false);

    if (!result.success) {
      this.ErrorMessage.set(result.errorMessage ?? "An unknown error has occurred. Please talk to an administrator.");
      return;
    }

    this.RecoveryUserId = result.result?.userId;
    this.ResetToken = result.result?.resetToken;
    this.SwitchPage("newPassword");
  }

  public async DoChangePassword() {
    if (!this.NewPassword()) return;

    this.Loading.set(true);
    const result = await this.UserConnector.ConsumePswdResetRequest(this.RecoveryUserId!, this.ResetToken!, this.NewPassword());
    this.Loading.set(false);

    if (!result.success) {
      this.ErrorMessage.set(result.errorMessage ?? "An unknown error has occurred. Please talk to an administrator.");
      return;
    }

    MessageBox(
      {
        title: "Password changed",
        message: "Good news! Your ArcOS account password has been changed. Click Okay to return to the login screen.",
        buttons: [
          {
            caption: "Okay",
            action: () => {
              this.closeWindow();
            },
            suggested: true,
          },
        ],
        sound: "arcos.dialog.info",
        image: GoodStatusIcon, // no icon service here
      },
      this.pid,
      true
    );
  }

  public SwitchPage(pageId: string) {
    if (!this.Pages[pageId]) return;

    this.ErrorMessage.set("");
    this.CurrentPage.set(this.Pages[pageId]);
  }
}
