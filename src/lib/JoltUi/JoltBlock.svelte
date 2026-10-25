<script lang="ts" generics="TBlock extends JoltBlock = JoltBaseLeafBlock">
  import type { IJuiRenderer } from "$interfaces/IJuiRenderer";
  import type { JoltBaseLeafBlock, JoltBlock } from "$types/system/jui";
  import JuiError from "./JoltError.svelte";

  const { block, renderer }: { block: TBlock; renderer: IJuiRenderer } = $props();
  const BlockComponent = $derived(renderer.ResolveBlockImplementation(block.type));
</script>

{#if BlockComponent}
  <BlockComponent {block} {renderer} />
{:else}
  <JuiError {block} message="No renderer for this block" />
{/if}
