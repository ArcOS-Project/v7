import type { MessageBoxButton } from "$types/shared/messagebox";
import type { Component } from "svelte";

export interface PswdResetPage {
  component: Component;
  buttons: (MessageBoxButton & { disabled?: boolean })[];
}
