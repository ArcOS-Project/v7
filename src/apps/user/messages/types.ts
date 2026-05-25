import type { IMessagingAppRuntime } from "$interfaces/runtimes/IMessagingAppRuntime";
import type { ExpandedMessage } from "$types/messaging";

export interface MessagingPage {
  name: string;
  icon: string;
  supplier: (process: IMessagingAppRuntime) => Promise<ExpandedMessage[]> | ExpandedMessage[];
}
