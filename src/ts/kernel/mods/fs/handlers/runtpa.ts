import type { IUserDaemon } from "$interfaces/daemon";
import { Fs } from "$ts/env";
import { arrayBufferToText } from "$ts/util/convert";
import { tryJsonParse } from "$ts/util/json";
import type { FileHandler } from "$types/fs";

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

    if (typeof json !== "object") throw new Error(`RunTpaFileHandler: JSON parse failed`);

    await daemon.spawn!.spawnThirdParty(json, path);
  },
  isHandler: true,
});

export default runTpaFile;
