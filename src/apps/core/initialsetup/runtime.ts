import type { IUserDaemon } from "$interfaces/daemon";
import type { IServerManager } from "$interfaces/kernel";
import { AppProcess } from "$ts/apps/process";
import { UserDaemon } from "$ts/daemon";
import { Env, getKMod, Server, Stack, State } from "$ts/env";
import { ErrorIcon, QuestionIcon, WarningIcon } from "$ts/images/dialog";
import { AccountIcon, SecurityMediumIcon } from "$ts/images/general";
import { ArcLicense } from "$ts/metadata/license";
import { Sleep } from "$ts/sleep";
import { LoginUser, RegisterUser } from "$ts/user/auth";
import { htmlspecialchars } from "$ts/util";
import { MessageBox } from "$ts/util/dialog";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import CheckInbox from "./InitialSetup/Page/CheckInbox.svelte";
import Finish from "./InitialSetup/Page/Finish.svelte";
import FreshDeployment from "./InitialSetup/Page/FreshDeployment.svelte";
import Identity from "./InitialSetup/Page/Identity.svelte";
import License from "./InitialSetup/Page/License.svelte";
import Welcome from "./InitialSetup/Page/Welcome.svelte";
import type { PageButtons } from "./types";

export class InitialSetupRuntime extends AppProcess {
  //#region VARIABLES

  public pageNumber = Store<number>();
  public identityInfoValid = Store<boolean>(false);
  public newUsername = Store<string>();
  public password = Store<string>();
  public confirm = Store<string>();
  public email = Store<string>();
  public actionsDisabled = Store<boolean>(false);
  public showMainContent = Store<boolean>(false);
  public displayName = Store<string>();
  public server: IServerManager;
  #userDaemon?: IUserDaemon;

  public readonly pages = [Welcome, License, Identity, CheckInbox, Finish, FreshDeployment];

  public readonly pageButtons: PageButtons = [
    {
      left: {
        caption: "Cancel",
        action: async () => {
          State?.loadState("login");
        },
        disabled: () => !!this.server?.serverInfo?.freshBackend,
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
    {
      left: {
        caption: "Cancel",
        disabled: () => true,
      },
      previous: {
        caption: "Previous",
        disabled: () => true,
      },
      next: {
        caption: "Server's all good",
        to: 0,
        suggested: true,
      },
    },
  ];

  //#endregion
  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    const update = () => {
      this.identityInfoValid.set(
        !!this.newUsername() && !!this.password() && !!this.confirm() && !!this.email() && !!this.displayName()
      );
    };

    this.#userDaemon = Stack.getProcess(Env.get("userdaemon_pid"));
    this.newUsername.subscribe(update);
    this.password.subscribe(update);
    this.confirm.subscribe(update);
    this.email.subscribe(update);
    this.displayName.subscribe(update);

    this.pageNumber.subscribe(() => {
      this.actionsDisabled.set(false);
    });

    this.server = getKMod<IServerManager>("server");

    this.pageNumber.set(this.server.serverInfo?.freshBackend ? this.pages.length - 1 : 0);

    this.setSource(__SOURCE__);
  }

  async render() {
    if (this.server.serverInfo?.disableRegistration) {
      throw new Error("InitialSetupWizardRender: Registration is disabled on this server");
    }

    await Sleep(1000);

    this.showMainContent.set(true);
  }

  async finish() {
    this.Log(`Finishing`);

    this.showMainContent.set(false);

    await Sleep(1000);

    location.reload();
  }

  //#endregion
  //#region LICENSE

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
          ArcLicense()
        )}</code>`,
        buttons: [
          {
            caption: "Decline",
            action: () => {
              State?.loadState("licenseDeclined");
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

  //#endregion
  //#region ACCOUNT CREATE

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
          sound: "arcos.dialog.warning",
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

    const confirmed = await new Promise<boolean>((r) => {
      const emailNotice = !Server.serverInfo?.noEmailVerify
        ? ` Please note that you <b>need</b> a valid email address in order to activate your account. Entering a non-existent email address will prevent you from creating your account.`
        : ``;

      MessageBox(
        {
          title: "Confirm details",
          message: `Are you sure that the following information is correct?${emailNotice}<br>
<br>
<ul>
  <li><b>Username:</b> ${htmlspecialchars(username)}</li>
  <li><b>Email:</b> ${htmlspecialchars(email)}</li>
</ul>`,
          sound: "arcos.dialog.warning",
          buttons: [
            {
              caption: "Go back",
              action: () => {
                r(false);
              },
            },
            {
              caption: "Confirm",
              suggested: true,
              action: () => {
                r(true);
              },
            },
          ],
          image: AccountIcon,
        },
        this.pid,
        true
      );
    });

    if (!confirmed) {
      this.actionsDisabled.set(false);
      return;
    }

    const created = await RegisterUser(username, email, password);

    if (!created) {
      MessageBox(
        {
          image: ErrorIcon,
          title: "Something went wrong",
          message:
            "An error occurred while creating your account. We might be experiencing some technical difficulties, please try again later.",
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

    this.pageNumber.set(this.pageNumber() + (Server.serverInfo?.noEmailVerify ? 2 : 1));
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
          sound: "arcos.dialog.error",
          image: ErrorIcon,
        },
        this.pid,
        true
      );
      return;
    }

    this.#userDaemon = await Stack.spawn(
      UserDaemon,
      undefined,
      this.#userDaemon?.userInfo?._id,
      this.pid,
      token,
      this.newUsername()
    );

    await this.#userDaemon?.account?.getUserInfo();
    await this.#userDaemon?.init?.startPreferencesSync();
    await this.#userDaemon?.init?.startFilesystemSupplier();
    this.#userDaemon?.preferences.update((v) => {
      v.account.displayName = this.displayName();

      return v;
    });

    this.pageNumber.set(this.pageNumber() + 1);
  }

  //#endregion
}
