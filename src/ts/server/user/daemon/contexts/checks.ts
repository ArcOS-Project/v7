import { MessageBox } from "$ts/dialog";
import type { DistributionServiceProcess } from "$ts/distrib";
import { StoreItemIcon } from "$ts/distrib/util";
import { Env } from "$ts/env";
import { NightlyLogo } from "$ts/images/branding";
import { ArcBuild } from "$ts/metadata/build";
import type { MessagingInterface } from "$ts/server/messaging";
import { Plural } from "$ts/util";
import { Daemon, type UserDaemon } from "..";
import { UserContext } from "../context";

/**
 * RESTRICTED: this class does not have an entry in ProcessWithPermissions,
 * and as such cannot be accessed by third-party applications.
 */
export class ChecksUserContext extends UserContext {
  public NIGHTLY = false;

  constructor(id: string, daemon: UserDaemon) {
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

    const distrib = this.serviceHost?.getService<DistributionServiceProcess>("DistribSvc");
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

              Daemon!.spawn?.spawnApp("AppStore", +Env.get("shell_pid"), "installed");
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

  async checkForMissedMessages() {
    const service = this.serviceHost!.getService<MessagingInterface>("MessagingService")!;
    const archived = Daemon!.preferences().appPreferences?.Messages?.archive || [];
    const messages =
      (await service?.getReceivedMessages())?.filter(
        (m) => !m.read && !archived.includes(m._id) && m.authorId !== this.userInfo?._id
      ) || [];

    if (!messages?.length) return;

    if (messages?.length === 1) {
      const message = messages[0];
      Daemon!?.notifications?.sendNotification({
        className: "incoming-message",
        image: message.author?.profilePicture,
        title: message.author?.username || "New message",
        message: message.title,
        buttons: [
          {
            caption: "View message",
            action: () => {
              Daemon!.spawn?.spawnApp("Messages", +Env.get("shell_pid"), "inbox", message._id);
            },
          },
        ],
      });
    } else {
      Daemon!?.notifications?.sendNotification({
        title: "Missed messages",
        message: `You have ${messages.length} ${Plural("message", messages.length)} in your inbox that you haven't read yet.`,
        image: "MessagingIcon",
        buttons: [
          {
            caption: "Open inbox",
            action: () => {
              Daemon!.spawn?.spawnApp("Messages", +Env.get("shell_pid"), "inbox");
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
          { caption: "Jump to stable", action: () => (location.href = "/") },
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
