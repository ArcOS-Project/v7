import GlobalLoadIndicatorApp from "$apps/components/globalloadindicator/GlobalLoadIndicator";
import { GlobalLoadIndicatorRuntime } from "$apps/components/globalloadindicator/runtime";
import type { IconPickerData } from "$apps/components/iconpicker/types";
import { TerminalWindowRuntime } from "$apps/components/terminalwindow/runtime";
import TerminalWindowApp from "$apps/components/terminalwindow/TerminalWindow";
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
}
