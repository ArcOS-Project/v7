import type { Component } from "svelte";

export interface MessageBoxData {
  title: string;
  message?: string;
  content?: Component<any>;
  buttons: MessageBoxButton[];
  image?: string;
  sound?: string;
}

export interface MessageBoxButton {
  caption: string;
  action: () => void;
  suggested?: boolean;
}

export type ConfirmationData = Omit<MessageBoxData, "buttons">;
