import type { ExpandedMessage } from "$types/messaging";
import type { MessagingAppRuntime } from "./runtime";

export interface MessagingPage {
  name: string;
  icon: string;
  supplier: (process: MessagingAppRuntime) => Promise<ExpandedMessage[]> | ExpandedMessage[];
}
