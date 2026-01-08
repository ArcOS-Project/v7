import { MessageBox } from "$ts/dialog";
import { Env, Fs } from "$ts/env";
import { textToBlob } from "$ts/util/convert";
import { getItemNameFromPath, join } from "$ts/util/fs";
import { UUID } from "$ts/uuid";
import type { ArcShortcut } from "$types/shortcut";
import { Daemon, type UserDaemon } from "..";
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
          return await Daemon!.spawn?.spawnApp(shortcut.target, +Env.get("shell_pid"));
        case "file":
          return await Daemon!.files?.openFile(shortcut.target);
        case "folder":
          return await Daemon!.spawn?.spawnApp("fileManager", +Env.get("shell_pid"), shortcut.target);
        default:
          MessageBox(
            {
              title: "Broken Shortcut",
              message: `ArcOS doesn't know how to open shortcut '${shortcut.name}' (${filename}) of type ${shortcut.type}.`,
              buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
              sound: "arcos.dialog.warning",
              image: "WarningIcon",
            },
            +Env.get("shell_pid"),
            true
          );
      }
    } catch (e) {
      MessageBox(
        {
          title: "Failed to open shortcut",
          message: `ArcOS failed to open the shortcut you requested.<br><br> ${e}`,
          image: "ShortcutMimeIcon",
          sound: "arcos.dialog.error",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
        },
        +Env.get("shell_pid"),
        true
      );
    }
  }

  async createShortcut(data: ArcShortcut, path: string, dispatch = false) {
    if (!(await Daemon!.icons?.getIcon(data.icon))) return false;

    const string = JSON.stringify(data, null, 2);

    try {
      return await Fs.writeFile(path, textToBlob(string, "application/json"), undefined, dispatch);
    } catch {
      return false;
    }
  }

  async newShortcut(location: string) {
    Daemon.spawn?.spawnOverlay("ShortcutProperties", +Env.get("shell_pid"), join(location, `${UUID()}.arclnk`), {
      icon: "ShortcutMimeIcon",
      name: "New shortcut",
      type: "new",
      target: location,
    });
  }
}
