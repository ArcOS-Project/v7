import { MessageBox } from "$ts/dialog";
import { arrayToBlob } from "$ts/fs/convert";
import { join } from "$ts/fs/util";
import { ErrorIcon } from "$ts/images/dialog";
import { ArcAppMimeIcon, CompressMimeIcon } from "$ts/images/mime";
import { UUID } from "$ts/uuid";
import type { FileHandler } from "$types/fs";
import { fromExtension } from "human-filetypes";
import JSZip from "jszip";
import type { UserDaemon } from "../daemon";

const runTpaBundle: (d: UserDaemon) => FileHandler = (daemon) => ({
  opens: {
    extensions: [".tpab"],
  },
  icon: CompressMimeIcon,
  name: "Run TPA package",
  description: "Opens this file as a package",
  handle: async (path: string) => {
    const prog = await daemon.FileProgress(
      {
        type: "size",
        icon: ArcAppMimeIcon,
        caption: "Reading TPA archive",
        subtitle: path,
        waiting: true,
      },
      +daemon.env.get("shell_pid")
    );

    const content = await daemon.fs.readFile(path, (progress) => {
      prog.show();
      prog.setWork(true);
      prog.setWait(false);
      prog.setMax(progress.max);
      prog.setDone(progress.value);
    });

    await prog.stop();

    if (!content) return;

    const zip = new JSZip();
    const buffer = await zip.loadAsync(content, {});

    if (!buffer.files["_package.tpa"]) {
      MessageBox(
        {
          title: "Failed to open TPA package",
          message: "This archive doesn't contain a TPA file.",
          buttons: [{ caption: "Okay", action: () => {} }],
          image: ErrorIcon,
        },
        +daemon.env.get("shell_pid"),
        true
      );

      return;
    }

    await daemon.fs.createDirectory("T:/PkgTemp");

    const extractPath = `T:/PkgTemp/${UUID()}`;

    daemon.fs.createDirectory(extractPath);

    // First, create all directories
    const sortedPaths = Object.keys(buffer.files).sort((p) => (buffer.files[p].dir ? -1 : 0));

    for (const path of sortedPaths) {
      const item = buffer.files[path];
      const target = join(extractPath, path);
      if (item.dir) {
        await daemon.fs.createDirectory(target);
      }
    }

    // Then, write all files
    for (const path of sortedPaths) {
      const item = buffer.files[path];
      const target = join(extractPath, path);
      if (!item.dir) {
        await daemon.fs.writeFile(target, arrayToBlob(await item.async("arraybuffer"), fromExtension(path)));
      }
    }

    await daemon.openFile(join(extractPath, "_package.tpa"));
  },
  isHandler: true,
});

export default runTpaBundle;
