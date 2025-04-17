import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { arrayToBlob, arrayToText, textToBlob } from "$ts/fs/convert";
import { getParentDirectory } from "$ts/fs/util";
import { MessagingIcon } from "$ts/images/apps";
import { WarningIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { MessagingInterface } from "$ts/server/messaging";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { ExpandedMessage, MessageAttachment, PartialMessage } from "$types/messaging";
import type { PublicUserInfo } from "$types/user";
import Fuse from "fuse.js";
import { messagingPages } from "./store";
import type { MessagingPage } from "./types";
import dayjs from "dayjs";
import { tryJsonParse } from "$ts/json";

export class MessagingAppRuntime extends AppProcess {
  service: MessagingInterface;
  page = Store<MessagingPage | undefined>();
  pageId = Store<string | undefined>();
  buffer = Store<PartialMessage[]>([]);
  loading = Store<boolean>(false);
  refreshing = Store<boolean>(true);
  errored = Store<boolean>(false);
  messageNotFound = Store<boolean>(false);
  message = Store<ExpandedMessage | undefined>();
  userInfoCache: Record<string, PublicUserInfo> = {};
  searchQuery = Store<string>();
  searchResults = Store<string[]>([]);
  messageWindow = false;
  messageFromFile = false;

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    pageOrMessagePath = "inbox",
    messageId?: string
  ) {
    super(handler, pid, parentPid, app);

    this.service = this.userDaemon?.serviceHost?.getService<MessagingInterface>("MessagingService")!;

    const path = pageOrMessagePath.includes(":/") && pageOrMessagePath.endsWith(".msg") ? pageOrMessagePath : undefined;

    if (messageId || path) {
      this.messageWindow = true;
      if (messageId) this.readMessage(messageId);
      else if (path) this.readMessageFromFile(path);
      this.app.data.minSize.w = 600;
      this.app.data.size.w = this.app.data.minSize.w;
      this.app.data.size.h = this.app.data.minSize.h;
    } else {
      this.renderArgs.page = pageOrMessagePath;
    }
  }

  async render({ page }: { page: string }) {
    this.switchPage(page);

    this.searchQuery.subscribe((v) => this.Search(v));
  }

  async getInbox() {
    if (this.messageWindow) return [];

    const received = await this.service.getReceivedMessages();
    const archived = this.getArchiveState();

    return received.filter((m) => !archived.includes(m._id));
  }

  async getSent() {
    if (this.messageWindow) return [];

    const sent = await this.service.getSentMessages();
    const archived = this.getArchiveState();

    return sent.filter((m) => !archived.includes(m._id));
  }

  async getArchived() {
    if (this.messageWindow) return [];

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
    if (this.messageWindow) return;
    if (this.pageId() === id && !this.errored()) return;
    if (!messagingPages[id]) return;

    this.errored.set(false);
    this.page.set(messagingPages[id]);
    this.pageId.set(id);

    await this.refresh();
  }

  async refresh() {
    if (this.messageWindow) return;

    this.refreshing.set(true);
    const messages = await this.page()?.supplier?.(this);
    this.refreshing.set(false);

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
    if (this.message()?._id === messageId) return;

    this.messageNotFound.set(false);
    this.loading.set(true);

    const message = await this.service.readMessage(messageId);
    if (!message) this.messageNotFound.set(true);

    this.message.set(message);
    this.loading.set(false);

    if (this.messageWindow && message)
      this.windowTitle.set(`${message.title} from ${message.author?.displayName || message.author?.username || "unknown user"}`);
  }

  async userInfo(userId: string): Promise<PublicUserInfo | undefined> {
    if (this.userInfoCache[userId]) return this.userInfoCache[userId];

    const info = await this.userDaemon?.getPublicUserInfoOf(userId);
    if (!info) return undefined;

    this.userInfoCache[userId] = info;

    return info;
  }

  async openAttachment(attachment: MessageAttachment, messageId: string) {
    const path = `T:/Apps/${this.app.id}/${messageId}/${attachment.filename}`;

    if (await this.fs.readFile(path)) return this.userDaemon?.openFile(path);

    const prog = await this.userDaemon?.FileProgress({
      type: "size",
      max: attachment.size,
      caption: `Reading Attachment...`,
      icon: MessagingIcon,
      subtitle: attachment.filename,
    });

    const contents = await this.service.readAttachment(messageId, attachment._id, (progress) => {
      prog?.show();
      prog?.setDone(progress.value);
      prog?.setMax(progress.max);
    });

    prog?.stop();

    if (!contents) return;

    await this.fs.createDirectory(getParentDirectory(path));
    await this.fs.writeFile(path, arrayToBlob(contents, attachment.mimeType));
    await this.userDaemon?.openFile(path);
  }

  Search(query: string) {
    if (this.messageWindow) return;
    if (!query) return this.searchResults.set([]);

    const messages = this.buffer().map((m) => ({ ...m, authorName: m.author?.displayName || m.author?.username }));

    if (!messages) return;

    const options = {
      includeScore: true,
      keys: ["title", "authorname"],
    };

    const fuse = new Fuse(messages, options);
    const result = fuse.search(query);

    this.searchResults.set(result.map((r) => r.item._id));
  }

  popoutMessage(messageId: string) {
    this.message.set(undefined);
    this.spawnApp(this.app.id, this.parentPid, this.pageId(), messageId);
  }

  async saveMessage() {
    const message = this.message();

    if (!message) return;

    const date = dayjs(message.createdAt).format("DD MMM YYYY, HH.mm.ss");
    const [path] = await this.userDaemon!.LoadSaveDialog({
      title: "Choose where to save the message",
      icon: MessagingIcon,
      isSave: true,
      extensions: [".arcmsg"],
      saveName: `${message.title} from ${
        message.author?.displayName || message.author?.displayName || "unknown user"
      } - ${date}.msg`,
    });

    if (!path) return;

    const prog = await this.userDaemon?.FileProgress({
      type: "size",
      caption: `Writing message...`,
      icon: MessagingIcon,
      subtitle: path,
    });

    await this.fs.writeFile(path, textToBlob(JSON.stringify(message, null, 2)), (progress) => {
      prog?.show();
      prog?.setDone(progress.value);
      prog?.setMax(progress.max);
    });
  }

  async readMessageFromFile(path: string) {
    this.messageFromFile = true;

    const contents = await this.fs.readFile(path);
    if (!contents) return this.closeWindow();

    const json = tryJsonParse(arrayToText(contents));
    if (typeof json === "string") return this.closeWindow();

    this.message.set(json as ExpandedMessage);
    this.windowTitle.set(path);
  }
}
