import type { IMessagingAppRuntime } from "$interfaces/runtimes/IMessagingAppRuntime";
import type { ExpandedMessage } from "$types/server/messaging";

// !tpa
/**
 * A page of the messaging app
 */
export interface MessagingPage {
  /**
   * The name of the page
   */
  name: string;
  /**
   * The icon of the page
   */
  icon: string;
  /**
   * A method that returns the messages that apply to the page.
   */
  supplier: (process: IMessagingAppRuntime) => Promise<ExpandedMessage[]> | ExpandedMessage[];
}
// !endtpa
