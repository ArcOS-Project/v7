import EmbeddedComponentRenderer from "$lib/ModularUi/BlockImplementations/EmbeddedComponentRenderer.svelte";
import IfRenderer from "$lib/ModularUi/BlockImplementations/IfRenderer.svelte";
import SeparatorRenderer from "$lib/ModularUi/BlockImplementations/SeparatorRenderer.svelte";
import type { Component } from "svelte";

export const BaseBlockImplementations: Record<string, Component<any>> = {
  EmbeddedComponent: EmbeddedComponentRenderer,
  Separator: SeparatorRenderer,
  If: IfRenderer,
};
