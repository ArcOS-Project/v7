import { Daemon, SoundBus, State } from "$ts/env";
import { CommandResult } from "$ts/result";
import { authcode } from "$ts/util";
import type { UserDaemonStartOptions } from "$types/daemon";
import type { LoginAppRuntime } from "./runtime";

export function LoginUserDaemonStartOptions(runtime: LoginAppRuntime): UserDaemonStartOptions {
  return {
    onUserInfo: async (info) => {
      runtime.profileImage.set(`${runtime.server.url}/user/pfp/${info._id}${authcode()}`);

      if (info.hasTotp && info.restricted) {
        runtime.loadingStatus.set("Requesting 2FA");

        const unlocked = await runtime.askForTotp(info._id);

        if (!unlocked) {
          await Daemon.account!.discontinueToken();
          await Daemon.killSelf();
          runtime.resetCookies();
          return CommandResult.Error("You didn't enter a valid 2FA code!");
        }
      }

      runtime.loadingStatus.set(runtime.getWelcomeString());

      await runtime.loadPersistence();
      runtime.savePersistence(info.username, runtime.profileImage());

      return CommandResult.Ok();
    },
    startStages: [
      "filesystem",
      "preferencesSync",
      "notifyLogin",
      "serviceHost",
      "firstRun",
      "driveNotifierWatcher",
      "indexing",
      "statusRefresh",
      "letsGo",
      "workspaces",
      "autorun",
    ],
    stageCallbacks: {
      preferencesSync: async (daemon, broadcast) => {
        broadcast("Reading profile customization");

        await runtime.setUserDisplayStuff(daemon);

        if (!runtime.safeMode) {
          runtime.savePersistence(daemon.userInfo!.username, runtime.profileImage(), runtime.loginBackground());
        }
      },
      letsGo: async (daemon) => {
        await State?.loadState("desktop", { userDaemon: daemon }, true);
        SoundBus?.playSound("arcos.system.logon");
        daemon.renderer!.setAppRendererClasses(daemon.preferences());
        daemon.checks!.checkNightly();
      },
    },
  };
}
