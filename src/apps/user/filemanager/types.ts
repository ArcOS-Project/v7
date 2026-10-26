import type { IFilesystemDrive } from "$interfaces/IFilesystemDrive";
import type { UserQuota } from "$types/system/fs";
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

// !tpa
/**
 * A filesystem drive with its quota -- Used exclusively by the File Manager
 */
export type QuotedDrive = { data: IFilesystemDrive; quota: UserQuota };

/**
 * The properties of a load/save dialog. In ArcOS v7, the LoadSaveDialog is no longer a separate application. Instead, it's simply a slimmed down version of the File Manager. The File Manager turns into a LoadSaveDialog based on its process arguments.
 */
export interface LoadSaveDialogData {
  /**
   * The window title
   */
  title: string;
  /**
   * The window icon
   */
  icon: string;
  /**
   * The absolute path of in what folder it should start
   */
  startDir?: string;
  /**
   * Whether or not we're saving a file instead of loading it
   */
  isSave?: boolean;
  /**
   * The PID of the process against which to spawn the dialog
   */
  targetPid?: number;
  /**
   * For loading only -- The allowed file extensions for loading
   */
  extensions?: string[];
  /**
   * The internal UUID used to identify the result of the dialog
   */
  returnId: string;
  /**
   * For saving only -- The initial file name of the save dialog
   */
  saveName?: string;
  /**
   * For loading only -- Whether or not multiple files can be loaded
   */
  multiple?: boolean;
  /**
   * For loading only -- Whether or not we're loading a folder or a file
   */
  folder?: boolean;
}

/**
 * The data for the notice that is displayed in the bottom bar of the file manager (if present)
 */
export interface FileManagerNotice {
  /**
   * The icon to use
   */
  icon: string;
  /**
   * The message to display
   */
  text: string;
  /**
   * The optional class name to apply to the notice
   */
  className?: string;
}

/**
 * The data for a virtual File Manager location. Virtual components use custom Svelte components instead of rendering a directory listing. My ArcOS (my-arcos::) is a good example.
 */
export interface VirtualFileManagerLocation {
  /**
   * The name of the virtual location -- Displayed in the address bar, titlebar and sidebar.
   */
  name: string;
  /**
   * The icon of the virtual location -- Displayed in the address bar and sidebar.
   */
  icon: string;
  /**
   * The Svelte component to use for the virtual location.
   */
  component: Component;
  /**
   * Whether or not the virtual location is visible in the sidebar.
   */
  hidden?: boolean;
}

// !endtpa
