import type { IUserDaemon } from "$interfaces/daemon";
import type { FileHandler } from "$types/fs";

const mountZipFile: (d: IUserDaemon) => FileHandler = (daemon) => ({
  opens: {
    extensions: [".zip", ".tpab", ".arc"],
  },
  icon: "CompressMimeIcon",
  name: "Mount ZIP file",
  description: "View the contents of this archive",
  async handle(path) {
    await daemon.files!.mountZip(path);
  },
  isHandler: true,
});

export default mountZipFile;
