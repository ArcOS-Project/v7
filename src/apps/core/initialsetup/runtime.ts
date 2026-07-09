import type { IServerManager } from "$interfaces/modules/IServerManager";
import type { IInitialSetupRuntime } from "$interfaces/runtimes/IIntialSetupRuntime";
import { AppProcess } from "$ts/apps/process";
import { getKMod, Server, Stack, State } from "$ts/env";
import { ErrorIcon, QuestionIcon, WarningIcon } from "$ts/images/dialog";
import { AccountIcon, SecurityMediumIcon } from "$ts/images/general";
import { ArcLicense } from "$ts/metadata/license";
import { Sleep } from "$ts/sleep";
import { LoginUser, RegisterUser } from "$ts/user/auth";
import { htmlspecialchars } from "$ts/util";
import { MessageBox } from "$ts/util/dialog";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/apps/app";
import CheckInbox from "./InitialSetup/Page/CheckInbox.svelte";
import Finish from "./InitialSetup/Page/Finish.svelte";
import FreshDeployment from "./InitialSetup/Page/FreshDeployment.svelte";
import Identity from "./InitialSetup/Page/Identity.svelte";
import License from "./InitialSetup/Page/License.svelte";
import Welcome from "./InitialSetup/Page/Welcome.svelte";
import type { PageButtons } from "./types";

export class InitialSetupRuntime extends AppProcess implements IInitialSetupRuntime {
  //#region VARIABLES

  public pageNumber = Store<number>();
  public identityInfoValid = Store<boolean>(false);
  public newUsername = Store<string>();
  public password = Store<string>();
  public confirm = Store<string>();
  public email = Store<string>();
  public actionsDisabled = Store<boolean>(false);
  public showMainContent = Store<boolean>(false);
  public server: IServerManager;

  public readonly pages = [Welcome, License, Identity, CheckInbox, Finish, FreshDeployment];

  public readonly pageButtons: PageButtons = [
    {
      left: {
        caption: "%general.cancel%",
        action: async () => {
          State?.loadState("login");
        },
        disabled: () => !!this.server?.serverInfo?.freshBackend,
      },
      previous: {
        disabled: () => true,
        caption: "%general.previous%",
        to: 0,
      },
      next: {
        suggested: true,
        caption: "%general.next%",
        to: 1,
      },
    },
    {
      left: {
        caption: "%apps.initialSetupWizard.buttons.viewLicense%",
        action: () => this.viewLicense(),
      },
      previous: {
        caption: "%general.previous%",
        to: 0,
      },
      next: {
        caption: "%general.iAgree%",
        suggested: true,
        action: () => this.licenseConfirmation(),
      },
    },
    {
      previous: {
        caption: "%general.previous%",
        to: 1,
      },
      next: {
        caption: "%general.continue%",
        disabled: () => !this.identityInfoValid(),
        action: () => this.createAccount(),
        suggested: true,
      },
    },
    {
      previous: {
        disabled: () => true,
        to: 3,
        caption: "%general.previous%",
      },
      next: {
        caption: "%apps.initialSetupWizard.buttons.iClickedIt%",
        suggested: true,
        action: () => this.checkAccountActivation(),
      },
    },
    {
      previous: {
        disabled: () => true,
        to: 4,
        caption: "%general.previous%",
      },
      next: {
        caption: "%apps.initialSetupWizard.buttons.letsBegin%",
        action: () => this.finish(),
        suggested: true,
      },
    },
    {
      left: {
        caption: "%general.cancel%",
        disabled: () => true,
      },
      previous: {
        caption: "%general.previous%",
        disabled: () => true,
      },
      next: {
        caption: "%apps.initialSetupWizard.serverAllGood%",
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
      this.identityInfoValid.set(!!this.newUsername() && !!this.password() && !!this.confirm() && !!this.email());
    };

    this.newUsername.subscribe(update);
    this.password.subscribe(update);
    this.confirm.subscribe(update);
    this.email.subscribe(update);

    this.pageNumber.subscribe(() => {
      this.actionsDisabled.set(false);
    });

    this.server = getKMod<IServerManager>("server");

    this.pageNumber.set(this.server.serverInfo?.freshBackend ? this.pages.length - 1 : 0);

    this.setSource(__SOURCE__);
  }

  async render() {
    if (this.server.serverInfo?.disableRegistration) {
      throw new Error("InitialSetupRuntime.render: Registration is disabled on this server");
    }

    Stack.renderer?.target.classList.add("theme-light");

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
        title: "%apps.initialSetupWizard.licenseConfirmation.title%",
        message: "%apps.initialSetupWizard.licenseConfirmation.message%",
        buttons: [
          {
            caption: "%general.decline%",
            action: () => {
              this.actionsDisabled.set(false);
            },
          },
          {
            caption: "%general.iAgree%",
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
        title: "%apps.initialSetupWizard.viewLicense.title%",
        message: `%apps.initialSetupWizard.viewLicense.message%: <code class='block'>${htmlspecialchars(ArcLicense())}</code>`,
        buttons: [
          {
            caption: "%general.decline%",
            action: () => {
              State?.loadState("licenseDeclined");
            },
          },
          {
            caption: "%general.iAgree%",
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
          title: "%apps.initialSetupWizard.createAccount.passwordMismatch.title%",
          message: "%apps.initialSetupWizard.createAccount.passwordMismatch.message%",
          sound: "arcos.dialog.warning",
          buttons: [
            {
              caption: "%general.okay%",
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
        ? ` Please note that you <b>need</b> a valid email address in order to activate your account. Entering a non-existent email address will prevent you from creating your account. Deactivated accounts will be manually deleted by an ArcOS administrator after 24 hours.`
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
          title: "%apps.initialSetupWizard.createAccount.genericError.title%",
          message: "%apps.initialSetupWizard.createAccount.genericError.message%",
          buttons: [
            {
              caption: "%generic.okay%",
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

    const tokenResult = await LoginUser(this.newUsername(), this.password());

    if (!tokenResult.success) {
      MessageBox(
        {
          title: "%apps.initialSetupWizard.checkAccountActivationError.title%",
          message: "%apps.initialSetupWizard.checkAccountActivationError.message%",
          buttons: [
            {
              caption: "%generic.okay%",
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

    this.pageNumber.set(this.pageNumber() + 1);
  }

  //#endregion
}
