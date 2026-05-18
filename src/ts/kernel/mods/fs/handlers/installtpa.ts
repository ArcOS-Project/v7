import type { IUserDaemon } from "$interfaces/daemon";
import { Fs } from "$ts/env";
import { arrayBufferToText } from "$ts/util/convert";
import { getParentDirectory } from "$ts/util/fs";
import { tryJsonParse } from "$ts/util/json";
import type { FileHandler } from "$types/fs";

const installTpaFile: (d: IUserDaemon) => FileHandler = (daemon) => ({
  opens: {
    extensions: [".tpa"],
  },
  icon: "DownloadIcon",
  name: "Install application",
  description: "Install this TPA file as an app",
  handle: async (path: string) => {
    const text = arrayBufferToText((await Fs.readFile(path))!);
    const json = tryJsonParse(text);

    if (typeof json !== "object") throw new Error(`InstallTpaFileHandler: JSON parse failed`);

    await daemon.appreg!.registerApp({ ...json, workingDirectory: getParentDirectory(path), tpaPath: path });
  },
  isHandler: true,
});

export default installTpaFile;
