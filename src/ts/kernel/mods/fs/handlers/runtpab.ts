import type { IUserDaemon } from "$interfaces/IUserDaemon";
import { Env, Fs } from "$ts/env";
import { CommandResult } from "$ts/result";
import { arrayBufferToBlob } from "$ts/util/convert";
import { MessageBox } from "$ts/util/dialog";
import { join } from "$ts/util/fs";
import { UUID } from "$ts/util/uuid";
import type { FileHandler } from "$types/system/fs";
import { fromExtension } from "human-filetypes";
import JSZip from "jszip";

const runTpaBundle: (d: IUserDaemon) => FileHandler = (daemon) => ({
  opens: {
    extensions: [".tpab"],
  },
  icon: "CompressMimeIcon",
  name: "Run TPA package",
  description: "Opens this file as a package",
  handle: async (path: string) => {
    const prog = await daemon.files!.FileProgress(
      {
        type: "size",
        icon: "ArcAppMimeIcon",
        caption: "Reading TPA archive",
        subtitle: path,
      },
      +Env.get("shell_pid")
    );

    const content = await Fs.readFile(path, (progress) => {
      prog.show();
      prog.setMax(progress.max);
      prog.setDone(progress.value);
    });

    await prog.stop();

    if (!content) {
      return CommandResult.Error("The TPA bundle file could not be read");
    }

    const zip = new JSZip();
    const buffer = await zip.loadAsync(content, {});
    if (!buffer.files["_package.tpa"]) {
      return CommandResult.Error("This archive doesn't contain a TPA.");
    }

    await Fs.createDirectory("T:/PkgTemp");

    const extractPath = `T:/PkgTemp/${UUID()}`;

    Fs.createDirectory(extractPath);

    // First, create all directories
    const sortedPaths = Object.keys(buffer.files).sort((p) => (buffer.files[p].dir ? -1 : 0));

    for (const path of sortedPaths) {
      const item = buffer.files[path];
      const target = join(extractPath, path);
      if (item.dir) {
        await Fs.createDirectory(target);
      }
    }

    // Then, write all files
    for (const path of sortedPaths) {
      const item = buffer.files[path];
      const target = join(extractPath, path);
      if (!item.dir) {
        await Fs.writeFile(target, arrayBufferToBlob(await item.async("arraybuffer"), fromExtension(path)));
      }
    }

    return await daemon.files!.openFile(join(extractPath, "_package.tpa"));
  },
  isHandler: true,
});

export default runTpaBundle;
