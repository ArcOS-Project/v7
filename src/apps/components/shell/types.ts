import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";

// !tpa

/**
 * One quick setting of the ArcOS action center
 */
export interface QuickSetting {
  /**
   * A method that is called to determine if the setting is active or not
   * @param {IShellRuntime} process The shell
   * @returns Whether or not the setting is active (highlighted)
   */
  isActive: (process: IShellRuntime) => boolean | Promise<boolean>;
  /**
   * A method that is called when the quick setting is clicked
   * @param {IShellRuntime} process The shell
   * @returns nothing
   */
  action: (process: IShellRuntime) => any;
  /**
   * The icon to use for the quick setting
   */
  icon: string;
  /**
   * An optional class name to add to the quick setting button
   */
  className?: string;
  /**
   * The caption to display when hovering over the quick setting
   */
  caption: string;
}

/**
 * One action displayed in the bottom right of the start menu
 */
export interface StartMenuAction {
  /**
   * The caption to display when hovering over the action
   */
  caption: string;
  /**
   * The icon to use for the action
   */
  icon: string;
  /**
   * A method that is called when the action is clicked
   * @param {IShellRuntime} process The shell
   * @returns nothing
   */
  action: (process: IShellRuntime) => void;
  /**
   * An optional class name to add to the quick setting button
   */
  className?: string;
}

// !endtpa
