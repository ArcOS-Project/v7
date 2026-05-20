import type { IMigrationService } from "$interfaces/services/MigrationSvc";
import type { IArcTerminal } from "$interfaces/terminal";
import { Daemon } from "$ts/daemon";
import { Env, Stack, SysDispatch } from "$ts/env";
import { CommandResult } from "$ts/result";
import { Sleep } from "$ts/sleep";
import type { UserDaemonStartOptions } from "$types/daemon";
import type { TerminalMode } from ".";
import { ArcTerminal } from "..";

export function ArcTermModeUserDaemonStartOptions(mode: TerminalMode): UserDaemonStartOptions {
  return {
    onUserInfo: async (info) => {
      if (info.hasTotp && info.restricted) {
        const unlocked = await mode.askForTotp(info._id);

        if (!unlocked) {
          await Daemon.account!.discontinueToken();
          await Daemon.killSelf();
          return CommandResult.Error("You didn't enter a valid 2FA code!");
        }
      }

      return CommandResult.Ok();
    },
    startStages: [
      "filesystem",
      "preferencesSync",
      "notifyLogin",
      "serviceHost",
      "driveNotifierWatcher",
      "indexing",
      "statusRefresh",
      "letsGo",
    ],
    stageCallbacks: {
      indexing: async (daemon, broadcast) => {
        await daemon.serviceHost?.getService<IMigrationService>("MigrationSvc")?.runMigrations(broadcast);
      },
      letsGo: async (daemon, broadcast) => {
        broadcast("Refreshing app storage");
        SysDispatch.dispatch("app-store-refresh");

        Env.set("CURRENTUSER", daemon.userInfo.username);
        Env.set("SHELL_PID", undefined);

        await Sleep(10);

        mode.term?.clear();
        mode.arcTerm = await Stack.spawn<IArcTerminal>(ArcTerminal, undefined, daemon.userInfo?._id, mode.pid, mode.term);
        mode.arcTerm!.IS_ARCTERM_MODE = true;
        mode.term?.focus();
      },
    },
  };
}
