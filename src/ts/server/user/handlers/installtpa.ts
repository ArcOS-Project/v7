import { arrayToText } from "$ts/fs/convert";
import { getParentDirectory } from "$ts/fs/util";
import { DownloadIcon } from "$ts/images/filesystem";
import { tryJsonParse } from "$ts/json";
import type { FileHandler } from "$types/fs";
import type { UserDaemon } from "../daemon";

const installTpaFile: (d: UserDaemon) => FileHandler = (daemon) => ({
  opens: {
    extensions: [".tpa"],
  },
  icon: DownloadIcon,
  name: "Install application",
  description: "Install this TPA file as an app",
  handle: async (path: string) => {
    const text = arrayToText((await daemon.fs.readFile(path))!);
    const json = tryJsonParse(text);

    if (typeof json !== "object") throw new Error(`InstallTpaFileHandler: JSON parse failed`);

    await daemon.installApp({ ...json, workingDirectory: getParentDirectory(path), tpaPath: path });
  },
  isHandler: true,
});

export default installTpaFile;
