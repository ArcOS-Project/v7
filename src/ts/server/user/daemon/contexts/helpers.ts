import GlobalLoadIndicatorApp from "$apps/components/globalloadindicator/GlobalLoadIndicator";
import { GlobalLoadIndicatorRuntime } from "$apps/components/globalloadindicator/runtime";
import type { IconPickerData } from "$apps/components/iconpicker/types";
import { TerminalWindowRuntime } from "$apps/components/terminalwindow/runtime";
import TerminalWindowApp from "$apps/components/terminalwindow/TerminalWindow";
import SafeModeNotice from "$lib/Daemon/SafeModeNotice.svelte";
import type { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { KernelStack } from "$ts/env";
import { Sleep } from "$ts/sleep";
import { UUID } from "$ts/uuid";
import { Store } from "$ts/writable";
import type { ExpandedTerminal } from "$types/terminal";
import type { UserDaemon } from "..";
import { UserContext } from "../context";

export class HelpersUserContext extends UserContext {
  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  async GlobalLoadIndicator(caption?: string, pid?: number) {
    const process = await KernelStack().spawn<GlobalLoadIndicatorRuntime>(
      GlobalLoadIndicatorRuntime,
      undefined,
      this.userInfo!._id,
      pid || +this.env.get("shell_pid"),
      {
        data: { ...GlobalLoadIndicatorApp, overlay: true },
        id: GlobalLoadIndicatorApp.id,
        desktop: undefined,
      },
      caption
    );

    if (!process)
      return {
        caption: Store<string>(),
        stop: async () => {},
      };

    return {
      caption: process.caption,
      stop: async () => {
        await Sleep(500);
        await process.closeWindow();
      },
    };
  }

  async Confirm(title: string, message: string, no: string, yes: string, image = "QuestionIcon", pid?: number) {
    const shellPid = pid || +this.env.get("shell_pid");
    return new Promise((r) => {
      MessageBox(
        {
          title,
          message,
          image,
          buttons: [
            { caption: no, action: () => r(false) },
            { caption: yes, action: () => r(true), suggested: true },
          ],
        },
        shellPid,
        !!shellPid
      );
    });
  }

  async TerminalWindow(pid = +this.env.get("shell_pid")): Promise<ExpandedTerminal | undefined> {
    const process = await KernelStack().spawn<TerminalWindowRuntime>(TerminalWindowRuntime, undefined, this.userInfo!._id, pid, {
      data: { ...TerminalWindowApp },
      id: TerminalWindowApp.id,
      desktop: undefined,
    });

    if (!process?.term) return undefined;

    const term: ExpandedTerminal = process.term;
    term.process = process;

    return term;
  }

  async IconPicker(data: Omit<IconPickerData, "returnId">) {
    if (this._disposed) return;

    this.Log(`Opening OpenWith for ${data.forWhat}`);

    const uuid = UUID();

    await this.daemon.spawn?.spawnOverlay("IconPicker", +this.env.get("shell_pid"), {
      ...data,
      returnId: uuid,
    });

    return new Promise<string>(async (r) => {
      this.systemDispatch.subscribe<[string, string]>("ip-confirm", ([id, icon]) => {
        if (id === uuid) r(icon);
      });
      this.systemDispatch.subscribe("ip-cancel", ([id]) => {
        if (id === uuid) r(data.defaultIcon);
      });
    });
  }

  ParentIs(proc: AppProcess, appId: string) {
    const targetAppInstances = KernelStack()
      .renderer?.getAppInstances(appId)
      .map((p) => p.pid);

    return targetAppInstances?.includes(proc.parentPid);
  }
  async waitForLeaveInvocationAllow() {
    return new Promise<void>((r) => {
      const interval = setInterval(() => {
        if (!this.daemon._blockLeaveInvocations) r(clearInterval(interval));
      }, 1);
    });
  }


    safeModeNotice() {
      MessageBox(
        {
          title: "ArcOS is running in safe mode",
          content: SafeModeNotice,
          image: "WarningIcon",
          sound: "arcos.dialog.warning",
          buttons: [
            { caption: "Restart now", action: () => this.daemon.power?.restart() },
            { caption: "Okay", action: () => {}, suggested: true },
          ],
        },
        +this.env.get("shell_pid"),
        true
      );
    }
  
    iHaveFeedback(process: AppProcess) {
      this.daemon.spawn?.spawnApp(
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
  
}
