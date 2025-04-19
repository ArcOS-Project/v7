import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { getDirectoryName } from "$ts/fs/util";
import { MessagingIcon } from "$ts/images/apps";
import { WarningIcon } from "$ts/images/dialog";
import { MemoryIcon, UploadIcon } from "$ts/images/general";
import type { ProcessHandler } from "$ts/process/handler";
import { MessagingInterface } from "$ts/server/messaging";
import { UUID } from "$ts/uuid";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { MessageCreateData } from "$types/messaging";
import mime from "mime";
import type { Attachment } from "./types";
import { Sleep } from "$ts/sleep";

export class MessageComposerRuntime extends AppProcess {
  sending = Store<boolean>(false);
  recipients = Store<string[]>([]);
  attachments = Store<Attachment[]>([]);
  title = Store<string>("");
  body = Store<string>("");
  replyId: string | undefined;
  service: MessagingInterface;

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    initialData?: MessageCreateData,
    replyId?: string
  ) {
    super(handler, pid, parentPid, app);

    if (initialData) {
      this.recipients.set(initialData.recipients);
      this.attachments.set(this.filesToAttachments(...initialData.attachments));
      this.title.set(initialData.title);
      this.body.set(initialData.body);
    }
    if (replyId) this.replyId = replyId;

    this.service = this.userDaemon!.serviceHost!.getService<MessagingInterface>("MessagingService")!;
  }

  async send() {
    const { recipients, attachments, title, body } = this;

    this.sending.set(true);

    const prog = await this.userDaemon?.FileProgress(
      {
        type: "none",
        caption: "Sending message",
        subtitle: "Preparing...",
        icon: MessagingIcon,
        waiting: true,
      },
      this.pid
    );

    const sent = await this.service.sendMessage(
      title(),
      recipients(),
      body(),
      attachments().map((a) => a.data),
      this.replyId,
      (progress) => {
        prog?.show();
        prog?.setType("size");
        prog?.setMax(progress.max);
        prog?.setDone(progress.value);
        prog?.updSub("Uploading...");
        prog?.setWait(false);
        prog?.setWork(true);
      }
    );

    prog?.setWait(true);
    prog?.setWork(false);

    await Sleep(500);

    prog?.stop();

    if (!sent) this.sendFailed();
    else this.closeWindow();
  }

  sendFailed() {
    this.sending.set(false);
    MessageBox(
      {
        title: "Failed to send message",
        message:
          "ArcOS failed to send the message! It might be too large, or none of the recipients exist. Please check the recipients or try shrinking it down, and then resend it. If it still doesn't work, contact an ArcOS administrator.",
        image: WarningIcon,
        sound: "arcos.dialog.warning",
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
      },
      this.pid,
      true
    );
  }

  async addAttachment() {
    const attachments: Attachment[] = [];
    const paths = await this.userDaemon!.LoadSaveDialog({
      title: "Choose one or more files to attach",
      icon: UploadIcon,
      startDir: "U:/",
      multiple: true,
    });

    const prog = await this.userDaemon!.FileProgress(
      {
        max: 100,
        waiting: true,
        type: "none",
        caption: "Just a moment...",
        icon: MemoryIcon,
      },
      this.pid
    );

    for (const path of paths) {
      if (!path) continue;

      const mimetype = mime.getType(path);
      const filename = getDirectoryName(path);
      const contents = await this.fs.readFile(path, (progress) => {
        prog.show();
        prog.updateCaption(progress.what ? `Reading ${progress.what}` : "Reading file...");
        prog.updSub(path);
        prog.setType("size");
        prog.setDone(0);
        prog.setMax(progress.max + 1);
        prog.setDone(progress.value);
        prog.setWait(false);
        prog.setWork(true);
      });

      if (!contents) continue;

      attachments.push({ data: new File([contents], filename, { type: mimetype || "application/octet-stream" }), uuid: UUID() });
    }

    prog.stop();

    this.attachments.update((v) => {
      v.push(...attachments);
      return v;
    });
  }

  removeRecipient(recipient: string) {
    this.recipients.update((v) => {
      return v.filter((r) => r !== recipient);
    });
  }

  filesToAttachments(...files: File[]): Attachment[] {
    return files.map((f) => ({ data: f, uuid: UUID() }));
  }

  removeAttachment(uuid: string) {
    this.attachments.update((v) => v.filter((a) => a.uuid !== uuid));
  }

  isModified() {
    const title = this.title();
    const body = this.body();
    const recipients = this.recipients();
    const attachments = this.attachments();

    return title.length || body.length || recipients.length || attachments.length;
  }

  async discard() {
    if (!this.isModified) return this.closeWindow();
    MessageBox(
      {
        title: "Discard message?",
        message: "Are you sure you want to discard this message? This cannot be undone.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          { caption: "Discard", action: () => this.closeWindow(), suggested: true },
        ],
        image: WarningIcon,
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }
}
