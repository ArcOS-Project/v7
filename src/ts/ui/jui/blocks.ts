import EmbeddedComponentRenderer from "$lib/JoltUi/BlockImplementations/EmbeddedComponentRenderer.svelte";
import IfRenderer from "$lib/JoltUi/BlockImplementations/IfRenderer.svelte";
import SeparatorRenderer from "$lib/JoltUi/BlockImplementations/SeparatorRenderer.svelte";
import type { Component } from "svelte";

export const BaseBlockImplementations: Record<string, Component<any>> = {
  EmbeddedComponent: EmbeddedComponentRenderer,
  Separator: SeparatorRenderer,
  If: IfRenderer,
};
