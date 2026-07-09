import type { IProcess } from "$interfaces/IProcess";
import type { ContextMenuItem } from "$types/apps/app";
import type { Component } from "svelte";

// !tpa
export interface ShellTrayIcon {
  pid: number;
  identifier: string;
  popup?: TrayPopup;
  icon: string;
  context?: ContextMenuItem[];
  action?: (targetedProcess: IProcess) => void;
}

export interface TrayIconOptions {
  popup?: TrayPopup;
  icon: string;
  context?: ContextMenuItem[];
  action?: (targetedProcess: IProcess) => void;
}

export interface TrayPopup {
  component?: Component;
  width: number;
  height: number;
  className?: string;
}

export type TrayIconDiscriminator = `${number}#${string}`;
