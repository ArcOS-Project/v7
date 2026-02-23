import type { Component } from "svelte";
import type { MaybePromise } from "./common";

export interface MessageBoxData {
  title: string;
  message?: string;
  content?: Component<any>;
  buttons: MessageBoxButton[];
  image?: string; // ICON ID!!!
  sound?: string;
}

export interface MessageBoxButton {
  caption: string;
  action: () => MaybePromise<void | false>;
  suggested?: boolean;
}

export type ConfirmationData = Omit<MessageBoxData, "buttons">;
