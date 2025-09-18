import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { MessagingInterface } from "$ts/server/messaging";
import { UserPaths } from "$ts/server/user/store";
import { Sleep } from "$ts/sleep";
import { getItemNameFromPath } from "$ts/util/fs";
import { UUID } from "$ts/uuid";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { MessageCreateData } from "$types/messaging";
import mime from "mime";
import type { Attachment } from "./types";

export class MessageComposerRuntime extends AppProcess {
  sending = Store<boolean>(false);
  recipients = Store<string[]>([]);
  attachments = Store<Attachment[]>([]);
  title = Store<string>("");
  body = Store<string>("");
  replyId: string | undefined;
  service: MessagingInterface;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, initialData?: MessageCreateData, replyId?: string) {
    super(pid, parentPid, app);

    if (initialData) {
      this.recipients.set(initialData.recipients);
      this.attachments.set(this.filesToAttachments(...initialData.attachments));
      this.title.set(initialData.title);
      this.body.set(initialData.body);
    }
    if (replyId) this.replyId = replyId;

    this.service = this.userDaemon!.serviceHost!.getService<MessagingInterface>("MessagingService")!;

    this.setSource(__SOURCE__);
  }

  //#endregion
  //#region SENDING

  async send() {
    const { recipients, attachments, title, body } = this;

    this.sending.set(true);

    const prog = await this.userDaemon?.FileProgress(
      {
        type: "none",
        caption: "Sending message",
        subtitle: "Preparing...",
        icon: this.getIconCached("MessagingIcon"),
      },
      this.pid
    );

    const sent = await this.service.sendMessage(
      title(),
      recipients(),
      body(),
      attachments().map((a) => a.data), // Reduce attachments down to the files themselves
      this.replyId,
      (progress) => {
        prog?.show();
        prog?.setType("size");
        prog?.setMax(progress.max);
        prog?.setDone(progress.value);
        prog?.updSub("Uploading...");
      }
    );

    await Sleep(500);

    prog?.stop();

    if (!sent) this.sendFailed();
    else this.closeWindow();
  }

  async discard() {
    if (!this.isModified()) return this.closeWindow();
    MessageBox(
      {
        title: "Discard message?",
        message: "Are you sure you want to discard this message? This cannot be undone.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          { caption: "Discard", action: () => this.closeWindow(), suggested: true },
        ],
        image: this.getIconCached("WarningIcon"),
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  sendFailed() {
    this.sending.set(false);
    MessageBox(
      {
        title: "Failed to send message",
        message:
          "ArcOS failed to send the message! It might be too large, or none of the recipients exist. Please check the recipients or try shrinking it down, and then resend it. If it still doesn't work, contact an ArcOS administrator.",
        image: this.getIconCached("WarningIcon"),
        sound: "arcos.dialog.warning",
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
      },
      this.pid,
      true
    );
  }

  //#endregion
  //#region ATTACHMENTS

  async addAttachment() {
    const attachments: Attachment[] = [];
    const paths = await this.userDaemon!.LoadSaveDialog({
      title: "Choose one or more files to attach",
      icon: this.getIconCached("UploadIcon"),
      startDir: UserPaths.Documents,
      multiple: true,
    });

    const prog = await this.userDaemon!.FileProgress(
      {
        max: 100,
        type: "none",
        caption: "Just a moment...",
        icon: this.getIconCached("MemoryIcon"),
      },
      this.pid
    );

    for (const path of paths) {
      if (!path) continue;

      const mimetype = mime.getType(path);
      const filename = getItemNameFromPath(path);
      try {
        const contents = await this.fs.readFile(path, (progress) => {
          prog.show();
          prog.updateCaption(progress.what ? `Reading ${progress.what}` : "Reading file...");
          prog.updSub(path);
          prog.setType("size");
          prog.setDone(0);
          prog.setMax(progress.max + 1);
          prog.setDone(progress.value);
        });

        await Sleep(10);

        if (!contents) continue;

        // Create a new NodeJS File based on what we got
        attachments.push({
          data: new File([contents], filename, { type: mimetype || "application/octet-stream" }),
          uuid: UUID(),
        });
      } catch {
        // silently error
      }
    }

    prog.stop();

    this.attachments.update((v) => {
      v.push(...attachments);
      return v;
    });
  }

  filesToAttachments(...files: File[]): Attachment[] {
    return files.map((f) => ({ data: f, uuid: UUID() })); // Give each Node file a UUID
  }

  removeAttachment(uuid: string) {
    this.attachments.update((v) => v.filter((a) => a.uuid !== uuid));
  }

  //#endregion
  //#region MISC

  removeRecipient(recipient: string) {
    this.recipients.update((v) => {
      return v.filter((r) => r !== recipient);
    });
  }

  isModified() {
    const title = this.title();
    const body = this.body();
    const recipients = this.recipients();
    const attachments = this.attachments();

    return title.length || body.length || recipients.length || attachments.length;
  }

  //#endregion
}
