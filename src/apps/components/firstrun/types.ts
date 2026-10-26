import type { IFirstRunRuntime } from "$interfaces/runtimes/IFirstRunRuntime";

// !tpa
/**
 * A page of the FirstRun app
 */
export interface FirstRunPage {
  /**
   * Page name
   */
  name: string;
  /**
   * Page Svelte component
   */
  component: any;
  /**
   * Whether or not this is a Hero page
   */
  hero?: boolean;
  /**
   * The buttons on the bottom-bar
   */
  actions: {
    /**
     * Left-side actions
     */
    left: Action[];
    /**
     * Right-side actions
     */
    right: Action[];
  };
}

/**
 * An action for the FirstRun app
 */
export interface Action {
  /**
   * Button caption
   */
  caption: string;
  /**
   * Whether or not the button is 'suggested' (accented)
   */
  suggested?: boolean;
  /**
   * Whether or not the button is disabled
   */
  disabled?: boolean;
  /**
   * The action to perform when the button is clicked
   * @param {IFirstRunRuntime} process The First Run runtime
   * @returns nothing
   */
  action: (process: IFirstRunRuntime) => void;
}

/**
 * A theme choice for First Run
 */
export interface FirstRunTheme {
  /**
   * Name of the theme
   */
  name: string;
  /**
   * Subtitle of the theme
   */
  subtitle: string;
  /**
   * The image URL to use for the theme thumbnail
   */
  image: string;
  /**
   * The theme settings to apply to the user's preferences
   */
  configuration: {
    /**
     * Style to apply (light, dark)
     */
    style: string;
    /**
     * Wallpaper ID to apply (img01 etc)
     */
    wallpaper: string;
    /**
     * The accent color
     */
    accent: string;
  };
}
// !endtpa
