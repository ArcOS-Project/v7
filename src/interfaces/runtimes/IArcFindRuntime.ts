import type { IBaseService } from "$interfaces/IServiceHost";
import type { PathedFileEntry } from "$types/fs";
import type { SearchItem } from "$types/search";
import type { UserPreferences } from "$types/user";
import type { ReadableStore } from "$types/writable";
<<<<<<<< HEAD:src/interfaces/services/IArcFindService.ts
import type { FuseResult, FuseResultMatch } from "fuse.js";
========
import type { FuseResultMatch } from "fuse.js";
import type { IAppProcess } from "../IAppProcess";
>>>>>>>> development:src/interfaces/runtimes/IArcFindRuntime.ts

export interface IArcFindService extends IBaseService {
  loading: ReadableStore<boolean>;
  searchQuery: ReadableStore<string>;
  searchResults: ReadableStore<FuseResult<SearchItem>[]>;
  searching: ReadableStore<boolean>;
  SelectionIndex: ReadableStore<number>;

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
  MutateIndex(e: KeyboardEvent): void | -1;
  Trigger(result: SearchItem): Promise<void>;
  Submit(): void;
}
