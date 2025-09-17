import { arrayToText } from "$ts/util/convert";
import { getParentDirectory } from "$ts/util/fs";
import { tryJsonParse } from "$ts/json";
import type { FileHandler } from "$types/fs";
import type { UserDaemon } from "../daemon";

const installTpaFile: (d: UserDaemon) => FileHandler = (daemon) => ({
  opens: {
    extensions: [".tpa"],
  },
  icon: daemon.getIconCached("DownloadIcon"),
  name: "Install application",
  description: "Install this TPA file as an app",
  handle: async (path: string) => {
    const text = arrayToText((await daemon.fs.readFile(path))!);
    const json = tryJsonParse(text);

    if (typeof json !== "object") throw new Error(`InstallTpaFileHandler: JSON parse failed`);

    await daemon.registerApp({ ...json, workingDirectory: getParentDirectory(path), tpaPath: path });
  },
  isHandler: true,
});

export default installTpaFile;
