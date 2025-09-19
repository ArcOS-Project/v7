export interface SearchItem {
  caption: string;
  action: (item?: SearchItem) => void;
  image?: string; // icon ID!!!
  description?: string;
}

export type SearchProvider = () => Promise<SearchItem[]> | SearchItem[];
