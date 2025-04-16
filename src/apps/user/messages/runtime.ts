import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { WarningIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { MessagingInterface } from "$ts/server/messaging";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { ExpandedMessage, PartialMessage } from "$types/messaging";
import type { PublicUserInfo } from "$types/user";
import { messagingPages } from "./store";
import type { MessagingPage } from "./types";

export class MessagingAppRuntime extends AppProcess {
  service: MessagingInterface;
  page = Store<MessagingPage | undefined>();
  pageId = Store<string | undefined>();
  buffer = Store<PartialMessage[]>([]);
  loading = Store<boolean>(false);
  errored = Store<boolean>(false);
  message = Store<ExpandedMessage | undefined>();
  userInfoCache: Record<string, PublicUserInfo> = {};

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, page = "inbox") {
    super(handler, pid, parentPid, app);

    this.service = this.userDaemon?.serviceHost?.getService<MessagingInterface>("MessagingService")!;
    this.renderArgs.page = page;
  }

  async render({ page }: { page: string }) {
    this.switchPage(page);
  }

  async getInbox() {
    const received = await this.service.getReceivedMessages();
    const archived = this.getArchiveState();

    return received.filter((m) => !archived.includes(m._id));
  }

  async getSent() {
    const sent = await this.service.getSentMessages();
    const archived = this.getArchiveState();

    return sent.filter((m) => !archived.includes(m._id));
  }

  async getArchived() {
    const sent = await this.service.getSentMessages();
    const received = await this.service.getReceivedMessages();
    const archived = this.getArchiveState();

    return [...sent.filter((m) => archived.includes(m._id)), ...received.filter((m) => archived.includes(m._id))];
  }

  getArchiveState(): string[] {
    const preferences = this.userPreferences().appPreferences.Messages;

    return preferences.archived || [];
  }

  setArchiveState(state: string[]) {
    this.userPreferences.update((v) => {
      v.appPreferences.Messages.archived = state;

      return v;
    });
  }

  addToArchive(id: string) {
    const state = this.getArchiveState();

    if (state.includes(id)) return;

    state.push(id);
    this.setArchiveState(state);
  }

  removeFromArchive(id: string) {
    const state = this.getArchiveState();

    if (!state.includes(id)) return;

    state.splice(state.indexOf(id), 1);
    this.setArchiveState(state);
  }

  async switchPage(id: string) {
    if (this.pageId() === id && !this.errored()) return;
    if (!messagingPages[id]) return;

    this.errored.set(false);
    this.page.set(messagingPages[id]);
    this.pageId.set(id);

    await this.refresh();
  }

  async refresh() {
    this.loading.set(true);
    const messages = await this.page()?.supplier?.(this);
    this.loading.set(false);

    if (!messages) {
      this.refreshFailed();

      return;
    }

    this.buffer.set(messages);
  }

  refreshFailed() {
    this.errored.set(true);

    MessageBox(
      {
        title: "Failed to get messages",
        message: `ArcOS failed to get the messages for ${this.page()?.name || "an unknown page"}. Please refresh to try again.`,
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
        image: WarningIcon,
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  async readMessage(messageId: string) {
    this.loading.set(true);
    this.message.set(await this.service.readMessage(messageId));
    this.loading.set(false);
  }

  async userInfo(userId: string): Promise<PublicUserInfo | undefined> {
    if (this.userInfoCache[userId]) return this.userInfoCache[userId];

    const info = await this.userDaemon?.getPublicUserInfoOf(userId);
    if (!info) return undefined;

    this.userInfoCache[userId] = info;

    return info;
  }
}
