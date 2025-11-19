import SafeModeNotice from "$lib/Daemon/SafeModeNotice.svelte";
import type { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import type { DistributionServiceProcess } from "$ts/distrib";
import { StoreItemIcon } from "$ts/distrib/util";
import { KernelStateHandler } from "$ts/getters";
import { NightlyLogo } from "$ts/images/branding";
import { ArcBuild } from "$ts/metadata/build";
import type { MessagingInterface } from "$ts/server/messaging";
import { Plural } from "$ts/util";
import type { UserDaemon } from "..";
import { UserContext } from "../context";

export class ChecksUserContext extends UserContext {
  public NIGHTLY = false;
  private registeredAnchors: HTMLAnchorElement[] = [];
  public anchorInterceptObserver?: MutationObserver;

  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  async _init() {
    this.startAnchorRedirectionIntercept();
  }

  async _deactivate() {
    this.anchorInterceptObserver?.disconnect();
  }

  checkReducedMotion() {
    if (
      this.userDaemon.preferencesCtx?.getGlobalSetting("reducedMotionDetection_disable") ||
      this.userDaemon.preferences().shell.visuals.noAnimations
    )
      return;

    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      this.userDaemon.notifications?.sendNotification({
        title: "Disable animations?",
        message: "ArcOS has detected that your device has Reduced Motion activated. Do you want ArcOS to reduce animations also?",
        buttons: [
          {
            caption: "Don't show again",
            action: () => {
              this.userDaemon.preferencesCtx?.setGlobalSetting("reducedMotionDetection_disable", true);
            },
          },
          {
            caption: "Reduce",
            action: () => {
              this.userDaemon.preferences.update((v) => {
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
    if (this.userDaemon.preferences().globalSettings.noUpdateNotif) return;

    const distrib = this.serviceHost?.getService<DistributionServiceProcess>("DistribSvc");
    const updates = await distrib?.checkForAllStoreItemUpdates();

    if (updates?.length) {
      const first = updates[0];
      const notif = this.userDaemon.notifications?.sendNotification({
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
              if (notif) this.userDaemon.notifications?.deleteNotification(notif);

              this.userDaemon.spawn?.spawnApp("AppStore", +this.env.get("shell_pid"), "installed");
            },
            suggested: true,
          },
          {
            caption: "Don't show again",
            action: () => {
              if (notif) this.userDaemon.notifications?.deleteNotification(notif);

              this.userDaemon.preferences.update((v) => {
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
    const archived = this.userDaemon.preferences().appPreferences?.Messages?.archive || [];
    const messages =
      (await service?.getReceivedMessages())?.filter(
        (m) => !m.read && !archived.includes(m._id) && m.authorId !== this.userInfo?._id
      ) || [];

    if (!messages?.length) return;

    if (messages?.length === 1) {
      const message = messages[0];
      this.userDaemon?.notifications?.sendNotification({
        className: "incoming-message",
        image: message.author?.profilePicture,
        title: message.author?.username || "New message",
        message: message.title,
        buttons: [
          {
            caption: "View message",
            action: () => {
              this.userDaemon.spawn?.spawnApp("Messages", +this.env.get("shell_pid"), "inbox", message._id);
            },
          },
        ],
      });
    } else {
      this.userDaemon?.notifications?.sendNotification({
        title: "Missed messages",
        message: `You have ${messages.length} ${Plural("message", messages.length)} in your inbox that you haven't read yet.`,
        image: "MessagingIcon",
        buttons: [
          {
            caption: "Open inbox",
            action: () => {
              this.userDaemon.spawn?.spawnApp("Messages", +this.env.get("shell_pid"), "inbox");
            },
          },
        ],
      });
    }
  }
  async waitForLeaveInvocationAllow() {
    return new Promise<void>((r) => {
      const interval = setInterval(() => {
        if (!this.userDaemon._blockLeaveInvocations) r(clearInterval(interval));
      }, 1);
    });
  }

  checkNightly() {
    const isNightly = !!this.env.get(`NIGHTLY_WHODIS_${ArcBuild()}`);
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

  safeModeNotice() {
    MessageBox(
      {
        title: "ArcOS is running in safe mode",
        content: SafeModeNotice,
        image: "WarningIcon",
        sound: "arcos.dialog.warning",
        buttons: [
          { caption: "Restart now", action: () => this.userDaemon.power?.restart() },
          { caption: "Okay", action: () => {}, suggested: true },
        ],
      },
      +this.env.get("shell_pid"),
      true
    );
  }

  iHaveFeedback(process: AppProcess) {
    this.userDaemon.spawn?.spawnApp(
      "BugHuntCreator",
      undefined,
      `[${process.app.id}] Feedback report - ${process.windowTitle()}`,
      `Thank you for submitting feedback to ArcOS! Any feedback is of great help to make ArcOS the best I can. Please be so kind and fill out the following form:
  
  1. Do you want to submit a new 'app', 'feature', or 'other'? Please answer one.
     - Your answer:
  
  2. What do you want me to implement?
     - Your answer:
  
  3. How should I go about this? Any ideas?
     - Your answer:
  
  4. Did a previous version of ArcOS include this (v5 or v6)?
     - Your answer:
  
  5. Convince me why I should implement this feature.
     - Your answer:
  
  
  **Do not change any of the information below this line.**
  
  ------
  
  - Username: ${this.userInfo?.username}
  - User ID: ${this.userInfo?._id}
  
  ------
  
  
  # DISCLAIMER
  
  The information provided in this report is subject for review by me or another ArcOS acquaintance. We may contact you using the ArcOS Messages app if we have any additional questions. It's also possible that the feedback you've provided will be converted into a GitHub issue for communication with other developers. By submitting this feedback, you agree to that. The issue will not contain any personal information, any personal information will be filtered out by a human being.`,
      {
        sendAnonymously: true,
        excludeLogs: true,
        makePublic: true,
      }
    );
  }

  startAnchorRedirectionIntercept() {
    this.Log("Starting anchor redirection intercept");

    const handle = () => {
      if (this._disposed) return;

      const anchors = document.querySelectorAll("a");

      for (const anchor of anchors) {
        const href = anchor.getAttribute("href");

        if (this.registeredAnchors.includes(anchor) || href?.startsWith("@client/")) continue;

        this.registeredAnchors.push(anchor);

        anchor.addEventListener("click", (e) => {
          const currentState = KernelStateHandler()?.currentState;

          e.preventDefault();

          if (currentState !== "desktop") return;

          MessageBox(
            {
              title: "Open this page?",
              message: `You're about to leave ArcOS to navigate to <code>${anchor.href}</code> in a <b>new tab</b>. Are you sure you want to continue?`,
              buttons: [
                {
                  caption: "Stay here",
                  action() {},
                },
                {
                  caption: "Proceed",
                  action() {
                    window.open(anchor.href, "_blank");
                  },
                  suggested: true,
                },
              ],
              image: "GlobeIcon",
            },
            +this.env.get("shell_pid"),
            true
          );
        });
      }
    };

    this.anchorInterceptObserver = new MutationObserver(handle);
    this.anchorInterceptObserver.observe(document.body, { childList: true, subtree: true });
  }
}
