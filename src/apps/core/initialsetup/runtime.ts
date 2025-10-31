import { MessageBox } from "$ts/dialog";
import { getKMod, KernelStack } from "$ts/env";
import { KernelStateHandler } from "$ts/getters";
import { ErrorIcon, QuestionIcon, WarningIcon } from "$ts/images/dialog";
import { SecurityMediumIcon } from "$ts/images/general";
import { ArcLicense } from "$ts/metadata/license";
import { LoginUser, RegisterUser } from "$ts/server/user/auth";
import { UserDaemon } from "$ts/server/user/daemon";
import { Sleep } from "$ts/sleep";
import { htmlspecialchars } from "$ts/util";
import { Store } from "$ts/writable";
import type { ServerManagerType } from "$types/kernel";
import { AppProcess } from "../../../ts/apps/process";
import type { AppProcessData } from "../../../types/app";
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
  public server: ServerManagerType;

  public readonly pages = [Welcome, License, Identity, CheckInbox, Finish, FreshDeployment];

  public readonly pageButtons: PageButtons = [
    {
      left: {
        caption: "%general.cancel%",
        action: async () => {
          KernelStateHandler()?.loadState("login");
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
      this.identityInfoValid.set(
        !!this.newUsername() && !!this.password() && !!this.confirm() && !!this.email() && !!this.displayName()
      );
    };

    this.newUsername.subscribe(update);
    this.password.subscribe(update);
    this.confirm.subscribe(update);
    this.email.subscribe(update);
    this.displayName.subscribe(update);

    this.pageNumber.subscribe(() => {
      this.actionsDisabled.set(false);
    });

    this.server = getKMod<ServerManagerType>("server");

    this.pageNumber.set(this.server.serverInfo?.freshBackend ? this.pages.length - 1 : 0);

    this.setSource(__SOURCE__);
  }

  async render() {
    if (this.server.serverInfo?.disableRegistration) {
      throw new Error("InitialSetupWizardRender: Registration is disabled on this server");
    }

    // TODO: some kind of intro animation
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
              KernelStateHandler()?.loadState("licenseDeclined");
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

    this.pageNumber.set(this.pageNumber() + 1);
  }

  async checkAccountActivation() {
    this.Log(`Checking account activation of '${this.newUsername()}'`);

    const token = await LoginUser(this.newUsername(), this.password());

    if (!token) {
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
          image: WarningIcon,
        },
        this.pid,
        true
      );
      return;
    }

    this.userDaemon = await KernelStack().spawn(
      UserDaemon,
      undefined,
      this.userDaemon?.userInfo?._id,
      this.pid,
      token,
      this.newUsername()
    );

    await this.userDaemon?.getUserInfo();
    await this.userDaemon?.startPreferencesSync();
    await this.userDaemon?.startFilesystemSupplier();
    this.userDaemon?.preferences.update((v) => {
      v.account.displayName = this.displayName();

      return v;
    });

    this.pageNumber.set(this.pageNumber() + 1);
  }

  //#endregion
}
