import type { FileHandler } from "$types/fs";
import type { UserDaemon } from "../daemon";

const installArcPkg: (d: UserDaemon) => FileHandler = (daemon) => ({
  isHandler: true,
  name: "Install package",
  description: "Installs this ArcOS package on your account",
  icon: "DownloadIcon",
  opens: {
    extensions: [".arc"],
  },
  async handle(path) {
    daemon.spawnContext?.spawnOverlay("AppPreInstall", +daemon.env.get("shell_pid"), path);
  },
});

export default installArcPkg;
