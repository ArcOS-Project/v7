import EmbeddedComponentRenderer from "$lib/ModularUi/Renderers/EmbeddedComponentRenderer.svelte";
import IfRenderer from "$lib/ModularUi/Renderers/IfRenderer.svelte";
import SeparatorRenderer from "$lib/ModularUi/Renderers/SeparatorRenderer.svelte";
import type { Component } from "svelte";

export const BaseBlockImplementations: Record<string, Component<any>> = {
  EmbeddedComponent: EmbeddedComponentRenderer,
  Separator: SeparatorRenderer,
  If: IfRenderer,
};
