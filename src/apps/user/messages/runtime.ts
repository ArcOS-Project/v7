import type { FileProgressMutator } from "$apps/components/fsprogress/types";
import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { Fs } from "$ts/env";
import { tryJsonParse } from "$ts/json";
import { MessagingInterface } from "$ts/server/messaging";
import { Daemon } from "$ts/server/user/daemon";
import { Sleep } from "$ts/sleep";
import { sortByKey } from "$ts/util";
import { arrayBufferToBlob, arrayBufferToText, textToBlob } from "$ts/util/convert";
import { getParentDirectory } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { ExpandedMessage, MessageAttachment } from "$types/messaging";
import type { PublicUserInfo } from "$types/user";
import dayjs from "dayjs";
import Fuse from "fuse.js";
import { messagingPages } from "./store";
import type { MessagingPage } from "./types";

export class MessagingAppRuntime extends AppProcess {
  service: MessagingInterface;
  page = Store<MessagingPage | undefined>();
  pageId = Store<string | undefined>();
  buffer = Store<ExpandedMessage[]>([]);
  correlated = Store<ExpandedMessage[][]>([]);
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

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, pageOrMessagePath = "inbox", messageId?: string) {
    super(pid, parentPid, app);

    this.service = Daemon?.serviceHost?.getService<MessagingInterface>("MessagingService")!;

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
      this.app.data.minSize.w = 700;
      this.app.data.size.w = 850;
      this.app.data.size.h = 500;
    }

    this.setSource(__SOURCE__);
  }

  async render({ page }: { page: string }) {
    await this.switchPage(page);

    this.searchQuery.subscribe((v) => this.Search(v));
  }

  //#endregion
  //#region GETTERS

  async getInbox() {
    this.Log(`Getting received messages`);

    if (this.messageWindow) return [];

    const inbox = await this.service.getInboxListing();
    const archived = this.getArchiveState();

    return inbox.filter((m) => !archived.includes(m._id));
  }

  async getSent() {
    this.Log(`Getting sent messages`);

    if (this.messageWindow) return [];

    const sent = await this.service.getSentMessages();
    const archived = this.getArchiveState();

    return sent.filter((m) => !archived.includes(m._id));
  }

  async getArchived() {
    this.Log(`Obtaining archived messages`);

    if (this.messageWindow) return [];

    const sent = await this.service.getSentMessages();
    const received = await this.service.getReceivedMessages();
    const archived = this.getArchiveState();

    return [...sent.filter((m) => archived.includes(m._id)), ...received.filter((m) => archived.includes(m._id))];
  }

  async readMessage(messageId: string, force = false) {
    this.Log(`readMessage: ${messageId}, force=${force}`);

    if (this.message()?._id === messageId && !force) return;

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
    this.Log(`userInfo: ${userId}`);

    if (this.userInfoCache[userId]) return this.userInfoCache[userId];

    const info = await Daemon?.account?.getPublicUserInfoOf(userId);
    if (!info) return undefined;

    this.userInfoCache[userId] = info;

    return info;
  }

  async readMessageFromFile(path: string) {
    this.Log(`readMessageFromFile: ${path}`);

    this.messageFromFile = true;

    try {
      const contents = await Fs.readFile(path);
      if (!contents) return this.closeWindow();

      const json = tryJsonParse(arrayBufferToText(contents));
      if (typeof json === "string") return this.closeWindow();

      this.message.set(json as ExpandedMessage);
      this.windowTitle.set(path);
    } catch {}
  }

  //#endregion
  //#region ACTIONS

  async deleteMessage(id: string) {
    this.Log(`deleteMessage: ${id}`);

    MessageBox(
      {
        title: "Delete message?",
        message: "Are you sure you want to delete this message? This cannot be undone.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Delete",
            action: async () => {
              await this.service.deleteMessage(id);
              this.message.set(undefined);
              if (this.messageWindow) this.closeWindow();
            },
            suggested: true,
          },
        ],
      },
      this.pid,
      true
    );
  }

  compose() {
    this.Log(`compose`);

    this.spawnOverlayApp("MessageComposer", this.pid);
  }

  replyTo(message: ExpandedMessage) {
    this.Log(`replyTo: ${message._id}`);

    this.spawnOverlayApp(
      "MessageComposer",
      this.pid,
      {
        title: message.title.startsWith("Re: ") ? message.title : `Re: ${message.title}`,
        body: "",
        recipients: [message.author!.username],
        attachments: [],
      },
      message._id
    );
  }

  async forward(message: ExpandedMessage) {
    this.Log(`forward: ${message._id}`);

    const attachments: File[] = [];

    const prog = await Daemon?.files?.FileProgress(
      {
        type: "none",
        max: 100,
        caption: `Reading attachments`,
        icon: "MessagingIcon",
        subtitle: `Just a moment...`,
      },
      this.pid
    );

    if (message.attachmentData) {
      for (const attachment of message.attachmentData) {
        const contents = await this.readAttachment(attachment, message._id, prog!);

        if (!contents) continue;

        attachments.push(new File([contents], attachment.filename, { type: attachment.mimeType }));
      }
    }

    prog?.stop();

    this.spawnOverlayApp("MessageComposer", this.pid, {
      title: `Fw: ${message.title}`,
      body: message.body,
      recipients: [],
      attachments,
    });
  }

  async saveMessage() {
    this.Log(`saveMessage`);

    const message = this.message();

    if (!message) return;

    const date = dayjs(message.createdAt).format("DD MMM YYYY, HH.mm.ss");
    const [path] = await Daemon!.files!.LoadSaveDialog({
      title: "Choose where to save the message",
      icon: "MessagingIcon",
      isSave: true,
      extensions: [".arcmsg"],
      saveName: `${message.title} from ${
        message.author?.displayName || message.author?.displayName || "unknown user"
      } - ${date}.msg`,
    });

    if (!path) return;

    const prog = await Daemon?.files?.FileProgress(
      {
        type: "size",
        caption: `Writing message...`,
        icon: "MessagingIcon",
        subtitle: path,
      },
      this.pid
    );

    try {
      await Fs.writeFile(path, textToBlob(JSON.stringify(message, null, 2)), (progress) => {
        prog?.show();
        prog?.setDone(progress.value);
        prog?.setMax(progress.max);
      });
    } catch {}

    await prog?.stop();
  }

  //#endregion
  //#region ARCHIVAL

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

  isArchived(id: string) {
    return this.getArchiveState().includes(id);
  }

  addToArchive(id: string) {
    this.Log(`addToArchive: ${id}`);

    const state = this.getArchiveState();

    if (state.includes(id)) return;

    state.push(id);
    this.setArchiveState(state);
  }

  removeFromArchive(id: string) {
    this.Log(`removeFromArchive: ${id}`);

    const state = this.getArchiveState();

    if (!state.includes(id)) return;

    state.splice(state.indexOf(id), 1);
    this.setArchiveState(state);
  }

  toggleArchived(message: ExpandedMessage) {
    this.Log(`toggleArchived: ${message._id}`);

    if (this.isArchived(message._id)) {
      this.removeFromArchive(message._id);
      this.switchPage(message.authorId === Daemon?.userInfo?._id ? "sent" : "inbox");
    } else {
      this.addToArchive(message._id);
      this.switchPage("archived");
    }

    this.readMessage(message._id, true);
  }

  //#endregion
  //#region PAGING

  async switchPage(id: string) {
    this.Log(`switchPage: ${id}`);

    if (this.messageWindow) return;
    if (this.pageId() === id && !this.errored()) return;
    if (!messagingPages[id]) return;

    this.errored.set(false);
    this.page.set(messagingPages[id]);
    this.pageId.set(id);

    await this.refresh();
  }

  async refresh() {
    this.Log(`refresh`);

    if (this.messageWindow) return;

    this.refreshing.set(true);
    const messages = await this.page()?.supplier?.(this);
    this.refreshing.set(false);

    if (!messages) {
      this.refreshFailed();

      return;
    }

    this.buffer.set(sortByKey(messages, "createdAt", true));
    this.correlated.set(this.correlateMessages(messages));
  }

  correlateMessages(messages: ExpandedMessage[]): ExpandedMessage[][] {
    const result: Record<string, ExpandedMessage[]> = {};

    for (const message of messages) {
      result[message.correlationId] ||= [];

      const existing = result[message.correlationId].filter((m) => m._id === message._id)[0];

      if (!existing) result[message.correlationId].push(message);
    }

    return Object.values(result);
  }

  refreshFailed() {
    this.Log(`refreshFailed`);

    this.errored.set(true);

    MessageBox(
      {
        title: "Failed to get messages",
        message: `ArcOS failed to get the messages for ${this.page()?.name || "an unknown page"}. Please refresh to try again.`,
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
        image: "WarningIcon",
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  Search(query: string) {
    this.Log(`Searching for ${query}`);

    if (this.messageWindow) return;
    if (!query) {
      this.searchResults.set([]);
      this.refresh();
      return;
    }

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
    this.Log(`Poppin' ${messageId}`);

    this.message.set(undefined);
    this.spawnApp(this.app.id, this.parentPid, this.pageId(), messageId);
  }

  //#endregion
  //#region ATTACHMENTS

  async readAttachment(attachment: MessageAttachment, messageId: string, prog: FileProgressMutator) {
    this.Log(`readAttachment: ${attachment._id}, ${messageId}`);

    const path = `T:/Apps/${this.app.id}/${messageId}/${attachment.filename}`;

    try {
      const existing = await Fs.readFile(path);

      if (existing) return existing;

      const contents = await this.service.readAttachment(messageId, attachment._id, (progress) => {
        prog?.show();
        prog?.setType("size");
        prog?.setDone(0);
        prog?.setMax(progress.max + 1);
        prog?.setDone(progress.value);
      });

      return contents;
    } catch {}
  }

  async openAttachment(attachment: MessageAttachment, messageId: string) {
    this.Log(`openAttachment: ${attachment._id}, ${messageId}`);

    const path = `T:/Apps/${this.app.id}/${messageId}/${attachment.filename}`;

    const prog = await Daemon?.files?.FileProgress(
      {
        type: "size",
        max: attachment.size,
        caption: `Reading Attachment...`,
        icon: "MessagingIcon",
        subtitle: attachment.filename,
      },
      this.pid
    );

    const contents = await this.readAttachment(attachment, messageId, prog!);

    await Sleep(300);
    await prog?.stop();

    if (!contents) {
      const info = Daemon?.assoc?.getFileAssociation(attachment.filename);
      MessageBox(
        {
          title: `'${attachment.filename}' unavailable`,
          message:
            "The attachment you tried to open could not be found, it may have been deleted. Please ask the sender of the message to send the attachment again.",
          image: info?.icon || this.getIconCached("DefaultMimeIcon"),
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          sound: "arcos.dialog.error",
        },
        this.pid,
        true
      );
      return;
    }

    try {
      await Fs.createDirectory(getParentDirectory(path));
      await Fs.writeFile(path, arrayBufferToBlob(contents, attachment.mimeType));
    } catch {}

    await Daemon?.files?.openFile(path);
  }

  //#endregion
}
