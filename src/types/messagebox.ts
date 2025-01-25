import type { Component } from "svelte";

export interface MessageBoxData {
  title: string;
  message?: string;
  content?: Component<any>;
  buttons: MessageBoxButton[];
  image?: string;
}

export interface MessageBoxButton {
  caption: string;
  action: () => void;
  suggested?: boolean;
}
