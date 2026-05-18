import type { IUserDaemon } from "$interfaces/daemon";
import { Env } from "$ts/env";
import type { FileHandler } from "$types/fs";

const installArcPkg: (d: IUserDaemon) => FileHandler = (daemon) => ({
  isHandler: true,
  name: "Install package",
  description: "Installs this ArcOS package on your account",
  icon: "DownloadIcon",
  opens: {
    extensions: [".arc"],
  },
  async handle(path) {
    daemon.spawn?.spawnApp("AppPreInstall", +Env.get("shell_pid"), { asOverlay: true }, path);
  },
});

export default installArcPkg;
