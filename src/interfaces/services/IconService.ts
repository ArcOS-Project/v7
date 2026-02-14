import type { IBaseService } from "$interfaces/service";
import type { App } from "$types/app";
import type { ReadableStore } from "$types/writable";

export interface IIconService extends IBaseService {
  PATH: string;
  FILE_CACHE: Record<string, string>;
  ICON_TYPES: string[];
  DEFAULT_ICON: string;
  Configuration: ReadableStore<Record<string, string>>;
  start(): Promise<void>;
  loadConfiguration(): Promise<Record<string, string>>;
  writeConfiguration(config: Record<string, string>): Promise<Record<string, string>>;
  defaultConfiguration(): Record<string, string>;
  getIcon(id: string, noCache?: boolean): Promise<string>;
  getIconCached(id: string): string;
  parseIcon(id: string): ["fs" | "builtin" | "app", string];
  cacheEverything(): Promise<void>;
  getAppIcon(app: App, workingDirectory?: string): string;
  getGroupedIcons(): Record<string, Record<string, string>>;
}
