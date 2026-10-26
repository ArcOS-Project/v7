import type { IUserDaemon } from "$interfaces/IUserDaemon";

// !tpa
/**
 * One of the actions of the Exit app
 */
export interface ExitAction {
  /**
   * Caption under the icon
   */
  caption: string;
  /**
   * What happens when the action is activated normally
   * @param {IUserDaemon} daemon The user daemon
   * @returns nothing
   */
  action: (daemon: IUserDaemon) => void;
  /**
   * What happens when the action is activated with Shift
   * @param {IUserDaemon} daemon The user daemon
   * @returns nothing
   */
  alternateAction?: (daemon: IUserDaemon) => void;
  /**
   * Caption to display when Shift is held
   */
  alternateCaption?: string;
  /**
   * Icon to display
   */
  icon: string;
}
// !endtpa
