import type { FilesystemDrive } from "$ts/kernel/mods/fs/drives/drive";
import type { UserQuota } from "$types/fs";
import type { Component } from "svelte";

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
  folder?: boolean;
}

export interface FileManagerNotice {
  icon: string;
  text: string;
  className?: string;
}

export interface VirtualFileManagerLocation {
  name: string;
  icon: string;
  component: Component;
  hidden?: boolean;
}
