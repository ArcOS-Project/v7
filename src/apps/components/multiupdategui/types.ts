import type { StoreItem } from "$types/tpa/package";

// !tpa-props
export interface MultiUpdateStatusNode {
  state: "pending" | "working" | "success" | "failed" | "downloading";
  max: number;
  done: number;
  pkg: StoreItem;
}

export type MultiUpdateStatus = MultiUpdateStatusNode[];
// !endtpa

export const StateIconTranslations: Record<string, string> = {
  pending: "ellipsis",
  working: "refresh-cw",
  success: "check",
  failed: "triangle-alert",
  downloading: "download",
};
