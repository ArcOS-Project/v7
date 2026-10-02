import type { IUserDaemon } from "$interfaces/IUserDaemon";
import { Env } from "$ts/env";
import { CommandResult } from "$ts/result";
import type { FileHandler } from "$types/system/fs";

const installArcPkg: (d: IUserDaemon) => FileHandler = (daemon) => ({
  isHandler: true,
  name: "Install package",
  description: "Installs this ArcOS package on your account",
  icon: "DownloadIcon",
  opens: {
    extensions: [".arc"],
  },
  async handle(path) {
    return CommandResult.Ok(daemon.spawn?.spawnApp("AppPreInstall", +Env.get("shell_pid"), { asOverlay: true }, path));
  },
});

export default installArcPkg;
