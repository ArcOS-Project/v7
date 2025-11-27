import { MessageBox } from "$ts/dialog";
import { Env, Fs } from "$ts/env";
import { arrayBufferToBlob } from "$ts/util/convert";
import { join } from "$ts/util/fs";
import { UUID } from "$ts/uuid";
import type { FileHandler } from "$types/fs";
import { fromExtension } from "human-filetypes";
import JSZip from "jszip";
import type { UserDaemon } from "../daemon";

const runTpaBundle: (d: UserDaemon) => FileHandler = (daemon) => ({
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

    if (!content) throw new Error(`RunTpaBundleHandler: content read failure`);

    const zip = new JSZip();
    const buffer = await zip.loadAsync(content, {});

    if (!buffer.files["_package.tpa"]) {
      MessageBox(
        {
          title: "Failed to open TPA package",
          message: "This archive doesn't contain a TPA file.",
          buttons: [{ caption: "Okay", action: () => {} }],
          image: "ErrorIcon",
        },
        +Env.get("shell_pid"),
        true
      );

      return;
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

    await daemon.files!.openFile(join(extractPath, "_package.tpa"));
  },
  isHandler: true,
});

export default runTpaBundle;
