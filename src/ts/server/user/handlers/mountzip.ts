import type { FileHandler } from "$types/fs";
import type { UserDaemon } from "../daemon";

const mountZipFile: (d: UserDaemon) => FileHandler = (daemon) => ({
  opens: {
    extensions: [".zip", ".tpab", ".arc"],
  },
  icon: daemon.getIconCached("CompressMimeIcon"),
  name: "Mount ZIP file",
  description: "View the contents of this archive",
  async handle(path) {
    await daemon.mountZip(path);
  },
  isHandler: true,
});

export default mountZipFile;
