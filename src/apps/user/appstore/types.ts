import type { Component } from "svelte";
import type { AppStoreRuntime } from "./runtime";

export interface StorePage {
  name: string;
  icon: string;
  content: Component<any>;
  hidden?: boolean;
  separator?: boolean;
  props?: (process: AppStoreRuntime, props: Record<string, any>) => Promise<Record<string, any>>;
  groupName?: string;
}

export type StorePages = Map<string, StorePage>;
