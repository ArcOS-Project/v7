import type { Component } from "svelte";

export interface SettingsPage {
  name: string;
  icon: string;
  content: Component<any>;
  hidden?: boolean;
  separator?: boolean;
  description: string;
}

export type SettingsPages = Map<string, SettingsPage>;
export type SettingsSlides = Map<string, Component<any>>;
