import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/daemon";
import { Stack } from "$ts/env";
import type { BugHuntUserSpaceProcess } from "$ts/servicehost/services/BugHuntUsp";
import { MessageBox } from "$ts/util/dialog";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { BugHuntProc } from "$types/bughunt";
import DataPrivacy from "./Creator/DataPrivacy.svelte";
import type { BugHuntCreatorOptions } from "./types";

export class BugHuntCreatorRuntime extends AppProcess {
  parent: BugHuntProc | undefined;
  title = Store<string>();
  body = Store<string>();
  loading = Store<boolean>();
  overrideOptions: BugHuntCreatorOptions | undefined;
  bughunt: BugHuntUserSpaceProcess;

  //#region LIFECYCLE

  constructor(
    pid: number,
    parentPid: number,
    app: AppProcessData,
    title?: string,
    body?: string,
    options?: BugHuntCreatorOptions
  ) {
    super(pid, parentPid, app);

    const parent = Stack.getProcess(this.parentPid);
    const bugHuntInstances = Stack.renderer?.getAppInstances("BugHunt").map((p) => p.pid);

    this.userPreferences.update((v) => {
      v.appPreferences.BugHunt ||= {};
      return v;
    });

    if (parent && bugHuntInstances?.includes(parent.pid)) this.parent = parent as any;

    if (title && body) {
      this.title.set(title);
      this.body.set(body);
    }

    if (options) this.overrideOptions = options;
    this.bughunt = Daemon?.serviceHost?.getService<BugHuntUserSpaceProcess>("BugHuntUsp")!;

    this.setSource(__SOURCE__);
  }

  //#endregion

  async Send() {
    this.Log(`Sending report`);
    const options = this.overrideOptions || (this.userPreferences().appPreferences.BugHunt! as BugHuntCreatorOptions);
    const title = this.title();
    const body = this.body();

    if (!title || !body) return;

    this.loading.set(true);

    await this.bughunt.sendBugReport({
      title,
      body,
      anonymous: !!options.sendAnonymously,
      noLogs: !!options.excludeLogs,
      public: !!options.makePublic,
    });

    await this.closeWindow();
    await this.parent?.invalidateCaches();

    this.loading.set(false);
  }

  async dataPrivacy() {
    this.Log(`dataPrivacy`);

    MessageBox(
      {
        title: "Please keep in mind",
        content: DataPrivacy,
        buttons: [
          {
            caption: "Decline",
            action: () => {
              this.closeWindow();
            },
          },
          { caption: "I Agree", action() {}, suggested: true },
        ],
        sound: "arcos.dialog.info",
      },
      this.pid,
      true
    );
  }
}
