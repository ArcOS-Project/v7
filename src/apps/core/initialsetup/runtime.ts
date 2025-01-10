import { MessageBox } from "$ts/dialog";
import { ErrorIcon, QuestionIcon, WarningIcon } from "$ts/images/dialog";
import { RegisterUser } from "$ts/server/user/auth";
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
  public username = Store<string>();
  public password = Store<string>();
  public confirm = Store<string>();
  public email = Store<string>();

  public readonly pages = [Welcome, License, Identity, CheckInbox, Finish];

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
        !!this.username() &&
          !!this.password() &&
          !!this.confirm() &&
          !!this.email()
      );
    };

    this.username.subscribe(update);
    this.password.subscribe(update);
    this.confirm.subscribe(update);
    this.email.subscribe(update);
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
            action: () => {},
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

  async viewLicense() {}

  async createAccount() {
    const username = this.username();
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
          buttons: [{ caption: "Okay", suggested: true, action: () => {} }],
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
          buttons: [{ caption: "Okay", suggested: true, action: () => {} }],
        },
        this.pid,
        true
      );

      return;
    }

    this.pageNumber.set(this.pageNumber() + 1);
  }

  async checkAccountActivation() {}

  async finish() {}
}
