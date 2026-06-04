import type { IChecksUserContext } from "$interfaces/contexts/IChecksUserContext";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { IDistributionServiceProcess } from "$interfaces/services/IDistributionServiceProcess";
import type { IMessagingInterface } from "$interfaces/services/IMessagingInterface";
import { Daemon, Env } from "$ts/env";
import { NightlyLogo } from "$ts/images/branding";
import { ArcBuild } from "$ts/metadata/build";
import { Plural } from "$ts/util";
import { MessageBox } from "$ts/util/dialog";
import { StoreItemIcon } from "$ts/util/distrib";
import { UserContext } from "../context";

export class ChecksUserContext extends UserContext implements IChecksUserContext {
  public NIGHTLY = false;

  constructor(id: string, daemon: IUserDaemon) {
    super(id, daemon);
  }

  checkReducedMotion() {
    if (
      Daemon!.preferencesCtx?.getGlobalSetting("reducedMotionDetection_disable") ||
      Daemon!.preferences().shell.visuals.noAnimations
    )
      return;

    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      Daemon!.notifications?.sendNotification({
        title: "Disable animations?",
        message: "ArcOS has detected that your device has Reduced Motion activated. Do you want ArcOS to reduce animations also?",
        buttons: [
          {
            caption: "Don't show again",
            action: () => {
              Daemon!.preferencesCtx?.setGlobalSetting("reducedMotionDetection_disable", true);
            },
          },
          {
            caption: "Reduce",
            action: () => {
              Daemon!.preferences.update((v) => {
                v.shell.visuals.noAnimations = true;
                return v;
              });
            },
          },
        ],
        image: "PersonalizationIcon",
        timeout: 6000,
      });
    }
  }

  async checkForUpdates() {
    if (Daemon!.preferences().globalSettings.noUpdateNotif) return;

    const distrib = this.serviceHost?.getService<IDistributionServiceProcess>("DistribSvc");
    const updates = await distrib?.checkForAllStoreItemUpdates();

    if (updates?.length) {
      const first = updates[0];
      const notif = Daemon!.notifications?.sendNotification({
        ...(updates.length === 1
          ? {
              title: "Update available!",
              message: `${first.pkg.pkg.name} can be updated from <b>v${first.oldVer}</b> to <b>v${first.newVer}</b>. Update now to get the latest features and security fixes.`,
              image: StoreItemIcon(first.pkg),
            }
          : {
              title: "Updates available!",
              message: `${updates.length} ${Plural(
                "package",
                updates.length
              )} can be updated. Update now to get the latest features and security fixes.`,
              image: "AppStoreIcon",
            }),
        buttons: [
          {
            caption: "View",
            action: () => {
              if (notif) Daemon!.notifications?.deleteNotification(notif);

              Daemon!.spawn?.spawnApp("AppStore", +Env.get("shell_pid"), {}, "installed");
            },
            suggested: true,
          },
          {
            caption: "Don't show again",
            action: () => {
              if (notif) Daemon!.notifications?.deleteNotification(notif);

              Daemon!.preferences.update((v) => {
                v.globalSettings.noUpdateNotif = true;
                return v;
              });
            },
          },
        ],
      });
    }
  }

  checkNightly() {
    const isNightly = !!Env.get(`NIGHTLY_WHODIS_${ArcBuild()}`);
    if (!isNightly) return;

    this.Log("NIGHTLY DETECTED. OPERATIONS MIGHT BE RESTRICTED.");

    MessageBox(
      {
        title: "ArcOS Nightly",
        message:
          "You're running a nightly build of ArcOS. Because of potentially major changes, user preference committing and file writes have been disabled to prevent your account from breaking when you return to the stable release. Nightly is NOT recommended for daily use (looking at you, Nik).<br><br>Just a reminder: ArcOS developers cannot be held accountable for breakages when using unstable ArcOS builds. We can however assist and resolve problems when something does go wrong.",
        buttons: [
          {
            caption: "Jump to stable",
            action: () => {
              location.href = "/";
            },
          },
          { caption: "Okay", action: () => {}, suggested: true },
        ],
        image: NightlyLogo,
        sound: "arcos.dialog.warning",
      },
      this.pid
    );
    this.NIGHTLY = true;
  }
}
