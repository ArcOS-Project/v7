import type { PathedFileEntry } from "$types/fs";
import type { SearchItem } from "$types/search";
import type { UserPreferences } from "$types/user";
import type { ReadableStore } from "$types/writable";
import type { FuseResultMatch } from "fuse.js";
import type { IAppProcess } from "./app";

export interface IArcFindRuntime extends IAppProcess {
  loading: ReadableStore<boolean>;
  start(): Promise<false | undefined>;
  stop(): Promise<void>;
  refresh(): Promise<SearchItem[] | undefined>;
  getFilesystemSearchSupplier(preferences: UserPreferences): Promise<SearchItem[]>;
  getAppSearchSupplier(preferences: UserPreferences): Promise<SearchItem[]>;
  getFlatTree(): Promise<PathedFileEntry[]>;
  Search(query: string): Promise<
    {
      id: string;
      item: SearchItem;
      refIndex: number;
      score?: number;
      matches?: ReadonlyArray<FuseResultMatch>;
    }[]
  >;
}
