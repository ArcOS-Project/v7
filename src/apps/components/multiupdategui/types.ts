import type { StoreItem } from "$types/tpa/package";

// !tpa-props
/**
 * An interface that indicates the status of one of the app updates in MultiUpdateGui
 */
export interface MultiUpdateStatusNode {
  /**
   * The state of the update
   * 
   * pending - Update is waiting to be performed
   * working - The update is being performed
   * success - The update completed successfully
   * failed - An error occurred and the update could not be completed
   * downloading - The app package is downloading
   */
  state: "pending" | "working" | "success" | "failed" | "downloading";
  /**
   * The max value of the update's progress bar
   */
  max: number;
  /**
   * The done value of the update's progress bar
   */
  done: number;
  /**
   * The store item that the status node is about
   */
  pkg: StoreItem;
}

/**
 * An array of {@link MultiUpdateStatusNode}
 */
export type MultiUpdateStatus = MultiUpdateStatusNode[];
// !endtpa

export const StateIconTranslations: Record<string, string> = {
  pending: "ellipsis",
  working: "refresh-cw",
  success: "check",
  failed: "triangle-alert",
  downloading: "download",
};
