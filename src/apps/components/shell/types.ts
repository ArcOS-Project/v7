import type { Process } from "$ts/process/instance";
import type { ContextMenuItem } from "$types/app";
import type { Component } from "svelte";

export type WeatherInformation =
  | {
      temperature: number;
      condition: string;
      code: number;
      className: string;
      gradient:
        | {
            start: string;
            end: string;
          }
        | undefined;
      icon: string;
      iconColor: string;
      isNight: boolean;
    }
  | false;

export interface ShellTrayIcon {
  pid: number;
  identifier: string;
  popup?: TrayPopup;
  icon: string;
  context?: ContextMenuItem[];
  action?: (targetedProcess: Process) => void;
}

export interface TrayIconOptions {
  popup?: TrayPopup;
  icon: string;
  context?: ContextMenuItem[];
  action?: (targetedProcess: Process) => void;
}

export interface TrayPopup {
  component?: Component;
  width: number;
  height: number;
  className?: string;
}

export type TrayIconDiscriminator = `${number}#${string}`;
