import type { IUserDaemon } from "$interfaces/daemon";
import { MessageBox } from "$ts/util/dialog";
import { Env, Fs } from "$ts/env";
import { tryJsonParse } from "$ts/util/json";
import { arrayBufferToText } from "$ts/util/convert";
import type { FileHandler } from "$types/fs";
import type { UserTheme } from "$types/theme";

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
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          sound: "arcos.dialog.error",
          image: "ThemesIcon",
        },
        +Env.get("shell_pid"),
        true
      );
    }
    const content = await Fs.readFile(path);
    if (!content) return fail("The contents of the file could not be read");

    const json = tryJsonParse<UserTheme>(arrayBufferToText(content));

    if (typeof json === "string") return fail("Couldn't parse the JSON object");
    if (!daemon.themes!.verifyTheme(json)) return fail("The theme is missing some required data");

    const applied = daemon.themes!.applyThemeData(json);

    if (!applied) fail("The theme could not be applied.");
  },
});

export default applyArcTheme;
