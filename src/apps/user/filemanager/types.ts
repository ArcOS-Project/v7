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

export interface LoadSaveDialogData {
  title: string;
  icon: string;
  startDir?: string;
  isSave?: boolean;
  targetPid?: number;
  extensions?: string[];
  returnId: string;
  saveName?: string;
  multiple?: boolean;
}
