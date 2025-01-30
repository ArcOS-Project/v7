import { RoturAuthGuiApp } from "$apps/components/roturauthgui/metadata";
import { MessageBox } from "$ts/dialog";
import { ErrorIcon, QuestionIcon, WarningIcon } from "$ts/images/dialog";
import { SecurityMediumIcon } from "$ts/images/general";
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
import RoturSetup from "./InitialSetup/Page/RoturSetup.svelte";
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
  private token: string | undefined;

  public readonly pages = [
    Welcome,
    License,
    Identity,
    CheckInbox,
    RoturSetup,
    Finish,
  ];

  public readonly pageButtons: PageButtons = [
    {
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
      left: {
        caption: "Learn more",
        action: async () => {},
      },
      previous: {
        caption: "Skip",
        to: 5,
      },
      next: {
        caption: "Connect",
        action: async () => this.roturAuthGui(),
        suggested: true,
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

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData
  ) {
    super(handler, pid, parentPid, app);

    const update = () => {
      this.identityInfoValid.set(
        !!this.newUsername() &&
          !!this.password() &&
          !!this.confirm() &&
          !!this.email()
      );
    };

    this.newUsername.subscribe(update);
    this.password.subscribe(update);
    this.confirm.subscribe(update);
    this.email.subscribe(update);

    this.pageNumber.subscribe(() => {
      this.actionsDisabled.set(false);
    });
  }

  async render() {
    // TODO: some kind of intro animation
    await Sleep(1000);

    this.showMainContent.set(true);
  }

  async licenseConfirmation() {
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

    if (confirm !== password) {
      MessageBox(
        {
          image: WarningIcon,
          title: "You made a typo!",
          message:
            "The passwords you entered don't match. Please re-enter them, and then try again.",
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
            "I couldn't create your account. Maybe either the username or email is invalid or already in use. Enter another username and/or email, and then try again",
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

    this.userDaemon = await this.handler.spawn(
      UserDaemon,
      this.pid,
      token,
      this.newUsername()
    );

    await this.userDaemon?.getUserInfo();
    await this.userDaemon?.startPreferencesSync();
    await this.userDaemon?.startFilesystemSupplier();

    this.token = token;
    this.pageNumber.set(this.pageNumber() + 1);
  }

  async finish() {
    this.showMainContent.set(false);

    await Sleep(1000);

    location.reload();
  }

  async roturAuthGui() {
    this.userDaemon?.appStore?.loadApp(RoturAuthGuiApp);

    await this.userDaemon?.spawnApp("RoturAuthGui", this.pid, this.userDaemon);

    this.globalDispatch.subscribe("ragui-loggedin", () => {
      this.pageNumber.set(this.pageNumber() + 1);
    });
  }
}
