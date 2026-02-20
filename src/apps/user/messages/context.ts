import { Daemon } from "$ts/daemon";
import { Fs } from "$ts/env";
import { Backend } from "$ts/kernel/mods/server/axios";
import { UserPaths } from "$ts/user/store";
import { arrayBufferToBlob } from "$ts/util/convert";
import type { AppContextMenu, ContextMenuItem } from "$types/app";
import type { FilesystemProgress } from "$types/fs";
import type { ExpandedMessage, MessageAttachment } from "$types/messaging";
import type { ReadableStore } from "$types/writable";
import type { MessagingAppRuntime } from "./runtime";

export function MessagesContextMenu(runtime: MessagingAppRuntime): AppContextMenu {
  return { "message-attachment": [AttachmentItems(runtime)] };
}

function AttachmentItems(runtime: MessagingAppRuntime): ContextMenuItem {
  return {
    caption: "Download",
    icon: "download",
    action: async (message: ReadableStore<ExpandedMessage | undefined>, attachment: MessageAttachment) => {
      const fullMessage = message();

      const dlProg = await Daemon?.files?.FileProgress(
        {
          type: "size",
          max: 1,
          caption: `Reading attachment data`,
          icon: "MessagingIcon",
          subtitle: `Just a moment...`,
        },
        runtime.pid
      );

      const response = await Backend.get(`/messaging/attachment/${fullMessage?._id}/${attachment._id}`, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
        responseType: "arraybuffer",
        onDownloadProgress: (progress) => {
          dlProg?.show();
          dlProg?.setDone(0);
          dlProg?.setMax(progress.total! + 1);
          dlProg?.setDone(progress.total!);
        },
      });

      dlProg?.mutDone(+1);

      const [path] = await Daemon!.files!.LoadSaveDialog({
        title: "Choose where to save the attachment",
        isSave: true,
        startDir: UserPaths.Downloads,
        icon: "MessagingIcon",
        saveName: `${attachment.filename}`,
      });

      if (!path) return;

      const saveProg = await Daemon?.files?.FileProgress(
        {
          type: "size",
          max: 1,
          caption: "Saving attachment",
          icon: "MessagingIcon",
          subtitle: `Saving to ${path}`,
        },
        runtime.pid
      );

      await Fs.writeFile(path, arrayBufferToBlob(response.data), (progress: FilesystemProgress) => {
        saveProg?.show();
        saveProg?.setDone(0);
        saveProg?.setMax(progress.max + 1);
        saveProg?.setDone(progress.max);
      });

      saveProg?.mutDone(+1);
    },
  };
}
