import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { BugHuntRuntime } from "../bughunt/runtime";
import DataPrivacy from "./Creator/DataPrivacy.svelte";
import type { BugHuntCreatorOptions } from "./types";

export class BugHuntCreatorRuntime extends AppProcess {
  parent: BugHuntRuntime | undefined;
  title = Store<string>();
  body = Store<string>();
  loading = Store<boolean>();

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, title?: string, body?: string) {
    super(handler, pid, parentPid, app);

    const parent = this.handler.getProcess(this.parentPid);

    if (parent && parent instanceof BugHuntRuntime) this.parent = parent;

    if (title && body) {
      this.title.set(title);
      this.body.set(body);
    }
  }

  async Send() {
    const options = this.userPreferences().appPreferences.BugHunt! as BugHuntCreatorOptions;
    const title = this.title();
    const body = this.body();

    if (!title || !body) return;

    this.loading.set(true);

    await this.parent?.bughunt.sendBugReport({
      title,
      body,
      anonymous: options.sendAnonymously,
      noLogs: options.excludeLogs,
      public: options.makePublic,
    });

    await this.closeWindow();
    await this.parent?.invalidateCaches();

    this.loading.set(false);
  }

  async dataPrivacy() {
    MessageBox(
      {
        title: "Please keep in mind",
        content: DataPrivacy,
        buttons: [
          { caption: "Decline", action: () => this.closeWindow() },
          { caption: "I Agree", action() {}, suggested: true },
        ],
        sound: "arcos.dialog.info",
      },
      this.pid,
      true
    );
  }
}
