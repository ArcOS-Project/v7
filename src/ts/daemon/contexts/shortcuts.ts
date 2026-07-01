import type { IShortcutsUserContext } from "$interfaces/contexts/IShortcutsUserContext";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import { Daemon, Env, Fs } from "$ts/env";
import { textToBlob } from "$ts/util/convert";
import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";
import { getItemNameFromPath, join } from "$ts/util/fs";
import { UUID } from "$ts/util/uuid";
import type { ArcShortcut } from "$types/system/shortcut";
import { UserContext } from "../context";

export class ShortcutsUserContext extends UserContext implements IShortcutsUserContext {
  constructor(id: string, daemon: IUserDaemon) {
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
          return await Daemon!.spawn?.spawnApp("fileManager", +Env.get("shell_pid"), {}, shortcut.target);
        default:
          MessageBox(
            {
              title: "Broken Shortcut",
              message: `ArcOS doesn't know how to open shortcut '${shortcut.name}' (${filename}) of type ${shortcut.type}.`,
              buttons: [BTN_OKAY_SUG],
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
          buttons: [BTN_OKAY_SUG],
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
    Daemon.spawn?.spawnApp("ShortcutProperties", +Env.get("shell_pid"), { asOverlay: true }, join(location, `${UUID()}.arclnk`), {
      icon: "ShortcutMimeIcon",
      name: "New shortcut",
      type: "new",
      target: location,
    });
  }
}
