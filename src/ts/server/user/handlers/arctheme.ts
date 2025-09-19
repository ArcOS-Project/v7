import { MessageBox } from "$ts/dialog";
import { tryJsonParse } from "$ts/json";
import { arrayToText } from "$ts/util/convert";
import type { FileHandler } from "$types/fs";
import type { UserTheme } from "$types/theme";
import type { UserDaemon } from "../daemon";

const applyArcTheme: (d: UserDaemon) => FileHandler = (daemon) => ({
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
        +daemon.env.get("shell_pid"),
        true
      );
    }
    const content = await daemon.fs.readFile(path);
    if (!content) return fail("The contents of the file could not be read");

    const json = tryJsonParse<UserTheme>(arrayToText(content));

    if (typeof json === "string") return fail("Couldn't parse the JSON object");
    if (!daemon.verifyTheme(json)) return fail("The theme is missing some required data");

    daemon.applyThemeData(json);
  },
});

export default applyArcTheme;
