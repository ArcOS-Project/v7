import type { StoreItem } from "$types/package";

export interface MultiUpdateStatusNode {
  state: "pending" | "working" | "success" | "failed" | "downloading";
  max: number;
  done: number;
  pkg: StoreItem;
}

export const StateIconTranslations: Record<string, string> = {
  pending: "ellipsis",
  working: "refresh-cw",
  success: "check",
  failed: "triangle-alert",
  downloading: "download",
};

export type MultiUpdateStatus = MultiUpdateStatusNode[];
