import type { MaybePromise } from "./common";

// !tpa
export interface SearchItem {
  caption: string;
  action: (item?: SearchItem) => MaybePromise<void>;
  image?: string; // icon ID!!!
  description?: string;
}

export type SearchProvider = () => Promise<SearchItem[]> | SearchItem[];
// !endtpa