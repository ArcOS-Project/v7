import { MessageBox } from "$ts/dialog";
import { ErrorIcon, QuestionIcon, WarningIcon } from "$ts/images/dialog";
import { SecurityMediumIcon } from "$ts/images/general";
import type { ServerManager } from "$ts/server";
import { LoginUser, RegisterUser } from "$ts/server/user/auth";
import { UserDaemon } from "$ts/server/user/daemon";
import { Sleep } from "$ts/sleep";
import { htmlspecialchars } from "$ts/util";
import { Store } from "$ts/writable";
import { AppProcess } from "../../../ts/apps/process";
import type { ProcessHandler } from "../../../ts/process/handler";
import type { AppProcessData } from "../../../types/app";
import CheckInbox from "./InitialSetup/Page/CheckInbox.svelte";
import Finish from "./InitialSetup/Page/Finish.svelte";
import Identity from "./InitialSetup/Page/Identity.svelte";
import License from "./InitialSetup/Page/License.svelte";
import Welcome from "./InitialSetup/Page/Welcome.svelte";
import type { PageButtons } from "./types";

export class InitialSetupRuntime extends AppProcess {
  public pageNumber = Store<number>();
  public identityInfoValid = Store<boolean>(false);
  public newUsername = Store<string>();
  public password = Store<string>();
  public confirm = Store<string>();
  public email = Store<string>();
  public actionsDisabled = Store<boolean>(false);
  public showMainContent = Store<boolean>(false);
  public fullName = Store<string>();
  public server: ServerManager;
  private token: string | undefined;

  public readonly pages = [Welcome, License, Identity, CheckInbox, Finish];

  public readonly pageButtons: PageButtons = [
    {
      left: {
        caption: "Cancel",
        action: async () => {
          this.kernel.state?.loadState("login");
        },
      },
      previous: {
        disabled: () => true,
        caption: "Previous",
        to: 0,
      },
      next: {
        suggested: true,
        caption: "Next",
        to: 1,
      },
    },
    {
      left: {
        caption: "View License",
        action: () => this.viewLicense(),
      },
      previous: {
        caption: "Previous",
        to: 0,
      },
      next: {
        caption: "I agree",
        suggested: true,
        action: () => this.licenseConfirmation(),
      },
    },
    {
      previous: {
        caption: "Previous",
        to: 1,
      },
      next: {
        caption: "Continue",
        disabled: () => !this.identityInfoValid(),
        action: () => this.createAccount(),
        suggested: true,
      },
    },
    {
      previous: {
        disabled: () => true,
        to: 3,
        caption: "Previous",
      },
      next: {
        caption: "I clicked it",
        suggested: true,
        action: () => this.checkAccountActivation(),
      },
    },
    {
      previous: {
        disabled: () => true,
        to: 4,
        caption: "Previous",
      },
      next: {
        caption: "Let's begin",
        action: () => this.finish(),
        suggested: true,
      },
    },
  ];

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);

    const update = () => {
      this.identityInfoValid.set(
        !!this.newUsername() && !!this.password() && !!this.confirm() && !!this.email() && !!this.fullName()
      );
    };

    this.newUsername.subscribe(update);
    this.password.subscribe(update);
    this.confirm.subscribe(update);
    this.email.subscribe(update);
    this.fullName.subscribe(update);

    this.pageNumber.subscribe(() => {
      this.actionsDisabled.set(false);
    });

    this.server = this.kernel.getModule<ServerManager>("server");
  }

  async render() {
    if (this.server.serverInfo?.disableRegistration) {
      throw new Error("Registration is disabled on this server");
    }

    // TODO: some kind of intro animation
    await Sleep(1000);

    this.showMainContent.set(true);
  }

  async licenseConfirmation() {
    this.Log("Showing license confirmation");

    MessageBox(
      {
        title: "Just making sure...",
        message:
          "By using ArcOS, you agree to the License Agreement. You may not violate any of the rules contained within this license. Continue?",
        buttons: [
          {
            caption: "Decline",
            action: () => {
              this.actionsDisabled.set(false);
            },
          },
          {
            caption: "I agree",
            suggested: true,
            action: () => {
              this.pageNumber.set(this.pageNumber() + 1);
            },
          },
        ],
        image: QuestionIcon,
      },
      this.pid,
      true
    );
  }

  async viewLicense() {
    this.Log("Opening ArcOS license message box");

    MessageBox(
      {
        image: SecurityMediumIcon,
        title: "ArcOS License - GPLv3",
        message: `By using ArcOS, you agree to the GPLv3 License contained within: <code class='block'>${htmlspecialchars(
          this.kernel.ARCOS_LICENSE
        )}</code>`,
        buttons: [
          {
            caption: "Decline",
            action: () => {
              this.kernel.state?.loadState("licenseDeclined");
            },
          },
          {
            caption: "I agree",
            action: () => {
              this.actionsDisabled.set(false);
            },
            suggested: true,
          },
        ],
      },
      this.pid,
      true
    );
  }

  async createAccount() {
    const username = this.newUsername();
    const password = this.password();
    const confirm = this.confirm();
    const email = this.email();

    this.Log(`Creating the user account '${username}' (${email})`);

    if (confirm !== password) {
      MessageBox(
        {
          image: WarningIcon,
          title: "You made a typo!",
          message: "The passwords you entered don't match. Please re-enter them, and then try again.",
          buttons: [
            {
              caption: "Okay",
              suggested: true,
              action: () => {
                this.actionsDisabled.set(false);
              },
            },
          ],
        },
        this.pid,
        true
      );

      return;
    }

    const created = await RegisterUser(username, email, password);

    if (!created) {
      MessageBox(
        {
          image: ErrorIcon,
          title: "Something went wrong",
          message:
            "An error occured while creating your account. We might be experiencing some technical difficulties, please try again later.",
          buttons: [
            {
              caption: "Okay",
              suggested: true,
              action: () => {
                this.actionsDisabled.set(false);
              },
            },
          ],
        },
        this.pid,
        true
      );

      return;
    }

    this.pageNumber.set(this.pageNumber() + 1);
  }

  async checkAccountActivation() {
    this.Log(`Checking account activation of '${this.newUsername()}'`);

    const token = await LoginUser(this.newUsername(), this.password());

    if (!token) {
      MessageBox(
        {
          title: "Did you click the link?",
          message:
            "Our systems tell me that your account hasn't been activated yet. Are you sure you clicked the link? If you did, and you're still seeing this, please contact support.",
          buttons: [
            {
              caption: "Okay",
              action: () => {
                this.actionsDisabled.set(false);
              },
              suggested: true,
            },
          ],
          image: WarningIcon,
        },
        this.pid,
        true
      );
      return;
    }

    this.userDaemon = await this.handler.spawn(UserDaemon, undefined, this.pid, token, this.newUsername());

    await this.userDaemon?.getUserInfo();
    await this.userDaemon?.startPreferencesSync();
    await this.userDaemon?.startFilesystemSupplier();
    this.userDaemon?.preferences.update((v) => {
      v.account.displayName = this.fullName();

      return v;
    });

    this.token = token;
    this.pageNumber.set(this.pageNumber() + 1);
  }

  async finish() {
    this.Log(`Finishing`);

    this.showMainContent.set(false);

    await Sleep(1000);

    location.reload();
  }
}
