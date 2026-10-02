import type { IUserDaemon } from "$interfaces/IUserDaemon";
import { Env, Fs } from "$ts/env";
import { CommandResult } from "$ts/result";
import { arrayBufferToText } from "$ts/util/convert";
import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";
import { tryJsonParse } from "$ts/util/json";
import type { FileHandler } from "$types/system/fs";
import type { UserTheme } from "$types/user/theme";

const applyArcTheme: (d: IUserDaemon) => FileHandler = (daemon) => ({
  isHandler: true,
  opens: {
    extensions: [".arctheme"],
  },
  name: "ArcOS Theme",
  description: "Apply this theme to your desktop",
  icon: "ThemesIcon",
  async handle(path) {
    function fail(reason: string) {
      MessageBox(
        {
          title: "Can't apply theme",
          message: `ArcOS was unable to load the theme file you're trying to apply. ${reason}. Please check the file, and then try again.`,
          buttons: [BTN_OKAY_SUG],
          sound: "arcos.dialog.error",
          image: "ThemesIcon",
        },
        +Env.get("shell_pid"),
        true
      );

      return reason;
    }

    const content = await Fs.readFile(path);
    if (!content) {
      return CommandResult.Error(fail("The contents of the file could not be read"));
    }

    const json = tryJsonParse<UserTheme>(arrayBufferToText(content));

    if (typeof json === "string") {
      return CommandResult.Error(fail("Couldn't parse the JSON object"));
    }

    if (!daemon.themes!.verifyTheme(json)) {
      return CommandResult.Error(fail("The theme is missing some required data"));
    }

    const applied = daemon.themes!.applyThemeData(json);
    if (!applied) {
      return CommandResult.Error(fail("The theme could not be applied."));
    }

    return CommandResult.Ok();
  },
});

export default applyArcTheme;
