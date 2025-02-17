import type { FilesystemDrive } from "$ts/fs/drive";
import type { UserQuota } from "$types/fs";

export interface Tab {
  location: string;
  title: string;
  icon: string;
}

export interface Location {
  name: string;
  icon: string;
  component: any;
}

export type QuotedDrive = { data: FilesystemDrive; quota: UserQuota };
