import type { IUserDaemon } from "$interfaces/IUserDaemon";
import { Fs } from "$ts/env";
import { CommandResult } from "$ts/result";
import { arrayBufferToText } from "$ts/util/convert";
import { getParentDirectory } from "$ts/util/fs";
import { tryJsonParse } from "$ts/util/json";
import type { FileHandler } from "$types/system/fs";

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

    if (typeof json !== "object") return CommandResult.Error("Failed to parse the JSON content");

    return await daemon.appreg!.registerApp({ ...json, workingDirectory: getParentDirectory(path), tpaPath: path });
  },
  isHandler: true,
});

export default installTpaFile;
