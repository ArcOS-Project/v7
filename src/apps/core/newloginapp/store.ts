import type { INewLoginAppRuntime } from "$interfaces/runtimes/INewLoginAppRuntime";
import { Daemon, SoundBus, State } from "$ts/env";
import { CommandResult } from "$ts/result";
import type { UserDaemonStartOptions } from "$types/daemon";

export function NewLoginUserDaemonStartOptions(runtime: INewLoginAppRuntime): UserDaemonStartOptions {
  return {
    onUserInfo: async (info) => {
      runtime.SaveUserPersistence(info);
      runtime.LoadLoginStateUsingPersistenceFrom(info._id);

      if (info.hasTotp && info.restricted) {
        runtime.ShowLoading("Requesting 2FA");

        const unlocked = await runtime.AskFor2FA(info._id);

        if (!unlocked) {
          await Daemon.account!.discontinueToken();
          await Daemon.killSelf();
          runtime.ResetCookies();
          return CommandResult.Error("You didn't enter a valid 2FA code!");
        }
      }

      if (info.isSystem) {
        await runtime.ShowErrorAndWait(
          "This is a system account. Changes you make here can cause external ArcOS services to stop working. To continue, click Okay."
        );
      }

      runtime.ShowLoading(runtime.WelcomeString);

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
      preferencesSync: async (_daemon, broadcast) => {
        broadcast("Reading profile customization");
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
