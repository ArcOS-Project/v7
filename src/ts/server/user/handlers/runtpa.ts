import { arrayToText } from "$ts/fs/convert";
import { ArcAppMimeIcon } from "$ts/images/mime";
import { tryJsonParse } from "$ts/json";
import type { FileHandler } from "$types/fs";
import type { UserDaemon } from "../daemon";

const runTpaFile: (d: UserDaemon) => FileHandler = (daemon) => ({
  opens: {
    extensions: [".tpa"],
  },
  icon: ArcAppMimeIcon,
  name: "Run ArcOS app",
  description: "Run this TPA file as an application",
  handle: async (path: string) => {
    const text = arrayToText((await daemon.fs.readFile(path))!);
    const json = tryJsonParse(text);

    if (typeof json !== "object") throw new Error(`RunTpaFileHandler: JSON parse failed`);

    await daemon.spawnThirdParty(json, path);
  },
  isHandler: true,
});

export default runTpaFile;
