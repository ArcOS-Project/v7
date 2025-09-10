import { KernelStack } from "$ts/process/handler";
import { UserDaemon } from "$ts/server/user/daemon";
import type { Keyword } from "$types/msl";

export const mount: Keyword = async (lang) => {
  if (!lang.expectTokenLength(1, "mount")) return;

  const [path, letter] = lang.tokens;

  const daemonPid = lang.env.get("userdaemon_pid");
  const daemon = KernelStack().getProcess<UserDaemon>(+daemonPid);

  if (!daemonPid || !daemon) {
    lang.error("Can't mount without a user daemon", "mount");

    return;
  }

  const result = await daemon.mountZip(path.trim(), letter?.trim());

  if (!result) {
    lang.error("Failed to mount drive", "mount");

    return;
  }

  return `${result.driveLetter || result.uuid}:/`;
};
