import type { IUserDaemon } from "$interfaces/daemon";
import { Env, Fs } from "$ts/env";
import { MessageBox } from "$ts/util/dialog";
import { join } from "$ts/util/fs";
import { UUID } from "$ts/util/uuid";
import { ArchiveReaderProcess } from "$ts/zip";
import type { FileHandler } from "$types/fs";

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

    const reader = await ArchiveReaderProcess.Create(path, daemon.pid);
    await reader?.open((progress) => {
      prog.show();
      prog.setMax(progress.max);
      prog.setDone(progress.value);
    });

    await prog.stop();

    if (!reader?.exist("_package.tpa")) {
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
    const extractResult = await reader.extract(extractPath);

    if (extractResult.success) {
      await daemon.files!.openFile(join(extractPath, "_package.tpa"));
    }

    await reader.close();
  },
  isHandler: true,
});

export default runTpaBundle;
