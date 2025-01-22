import type { Component } from "svelte";

export interface SettingsPage {
  name: string;
  icon: string;
  content: Component<any>;
  hidden?: boolean;
  separator?: boolean;
}

export type SettingsPages = Map<string, SettingsPage>;
