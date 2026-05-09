import type { GlobalLoadIndicatorProgress } from "$apps/components/globalloadindicator/types";
import type { IconPickerData } from "$apps/components/iconpicker/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IUserContext } from "$interfaces/IUserDaemon";
import type { ExpandedTerminal } from "$types/terminal";
import type { ReadableStore } from "$types/writable";

export interface IHelpersUserContext extends IUserContext {
  GlobalLoadIndicator(
    caption?: string,
    pid?: number,
    progress?: Partial<GlobalLoadIndicatorProgress>
  ): Promise<{
    caption: ReadableStore<string>;
    stop: () => Promise<void>;
    incrementProgress?: ((amount?: number) => void) | undefined;
    progress?: ReadableStore<GlobalLoadIndicatorProgress | undefined> | undefined;
  }>;
  Confirm(title: string, message: string, no: string, yes: string, image?: string, pid?: number): Promise<unknown>;
  TerminalWindow(pid?: number): Promise<ExpandedTerminal | undefined>;
  IconPicker(data: Omit<IconPickerData, "returnId">): Promise<string | undefined>;
  IconEditor(initialValue: string, defaultIcon?: string, name?: string): Promise<string>;
  ParentIs(proc: IAppProcess, appId: string): boolean | undefined;
  waitForLeaveInvocationAllow(): Promise<void>;
  safeModeNotice(): void;
  iHaveFeedback(process: IAppProcess): void;
}
