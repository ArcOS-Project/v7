import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { getDirectoryName } from "$ts/fs/util";
import { WarningIcon } from "$ts/images/dialog";
import { UploadIcon } from "$ts/images/general";
import type { ProcessHandler } from "$ts/process/handler";
import { MessagingInterface } from "$ts/server/messaging";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { MessageCreateData } from "$types/messaging";
import mime from "mime";

export class MessageComposerRuntime extends AppProcess {
  sending = Store<boolean>(false);
  data = Store<MessageCreateData>({
    recipients: [],
    attachments: [],
    title: "",
    body: "",
  });
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

    if (initialData) this.data.set(initialData);
    if (replyId) this.replyId = replyId;

    this.service = this.userDaemon!.serviceHost!.getService<MessagingInterface>("MessagingService")!;
  }

  async send() {
    const { recipients, attachments, title, body } = this.data();

    this.sending.set(true);

    const sent = await this.service.sendMessage(title, recipients, body, attachments, this.replyId);
    if (!sent) this.sendFailed();

    this.sending.set(false);
  }

  sendFailed() {
    MessageBox(
      {
        title: "Failed to send message",
        message:
          "ArcOS failed to send the message! It might be too large. Please try shrinking it down, and then resend it. If it still doesn't work, contact an ArcOS administrator.",
        image: WarningIcon,
        sound: "arcos.dialog.warning",
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
      },
      this.pid,
      true
    );
  }

  async addAttachment() {
    const attachments: File[] = [];
    const paths = await this.userDaemon!.LoadSaveDialog({
      title: "Choose one or more files to attach",
      icon: UploadIcon,
      startDir: "U:/",
      multiple: true,
    });

    for (const path of paths) {
      if (!path) continue;

      const mimetype = mime.getType(path);
      const filename = getDirectoryName(path);
      const contents = await this.fs.readFile(path);

      if (!contents) continue;

      attachments.push(new File([contents], filename, { type: mimetype || "application/octet-stream" }));
    }

    this.data.update((v) => {
      v.attachments.push(...attachments);
      return v;
    });
  }
}
