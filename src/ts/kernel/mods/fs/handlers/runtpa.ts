import type { IUserDaemon } from "$interfaces/IUserDaemon";
import { Env, Fs } from "$ts/env";
import { CommandResult } from "$ts/result";
import { arrayBufferToText } from "$ts/util/convert";
import { getParentDirectory } from "$ts/util/fs";
import { tryJsonParse } from "$ts/util/json";
import type { FileHandler } from "$types/system/fs";

const runTpaFile: (d: IUserDaemon) => FileHandler = (daemon) => ({
  opens: {
    extensions: [".tpa"],
  },
  icon: "ArcAppMimeIcon",
  name: "Run ArcOS app",
  description: "Run this TPA file as an application",
  handle: async (path: string) => {
    const text = arrayBufferToText((await Fs.readFile(path))!);
    const json = tryJsonParse(text);
    const workingDirectory = getParentDirectory(path);

    if (typeof json !== "object") return CommandResult.Error("Failed to parse the TPA file");

    json.workingDirectory = workingDirectory;
    json.tpaPath = path;
    json.thirdParty = true;

    await daemon.spawn!.spawnAppMeta(json, +Env.get("userdaemon_pid"));
    return CommandResult.Ok();
  },
  isHandler: true,
});

export default runTpaFile;
