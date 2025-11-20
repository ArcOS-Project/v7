import { MessageBox } from "$ts/dialog";
import { textToBlob } from "$ts/util/convert";
import { getItemNameFromPath } from "$ts/util/fs";
import type { ArcShortcut } from "$types/shortcut";
import type { UserDaemon } from "..";
import { UserContext } from "../context";

export class ShortcutsUserContext extends UserContext {
  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  async handleShortcut(path: string, shortcut: ArcShortcut) {
    this.Log(`Handling shortcut "${path}"`);
    const filename = getItemNameFromPath(path);

    try {
      switch (shortcut.type) {
        case "app":
          return await this.daemon.spawn?.spawnApp(shortcut.target, +this.env.get("shell_pid"));
        case "file":
          return await this.daemon.files?.openFile(shortcut.target);
        case "folder":
          return await this.daemon.spawn?.spawnApp("fileManager", +this.env.get("shell_pid"), shortcut.target);
        default:
          MessageBox(
            {
              title: "Broken Shortcut",
              message: `ArcOS doesn't know how to open shortcut '${shortcut.name}' (${filename}) of type ${shortcut.type}.`,
              buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
              sound: "arcos.dialog.warning",
              image: "WarningIcon",
            },
            +this.env.get("shell_pid"),
            true
          );
      }
    } catch (e) {
      MessageBox(
        {
          title: "Failed to open shortcut",
          message: `ArcOS failed to open the shortcut you requested. Reason: ${e}`,
          image: "ShortcutMimeIcon",
          sound: "arcos.dialog.error",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
        },
        +this.env.get("shell_pid"),
        true
      );
    }
  }

  async createShortcut(data: ArcShortcut, path: string, dispatch = false) {
    if (!(await this.daemon.icons?.getIcon(data.icon))) return false;

    const string = JSON.stringify(data, null, 2);

    try {
      return await this.fs.writeFile(path, textToBlob(string, "application/json"), undefined, dispatch);
    } catch {
      return false;
    }
  }
}
