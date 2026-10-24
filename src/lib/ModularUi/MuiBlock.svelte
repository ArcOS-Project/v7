<script lang="ts" generics="TBlock extends ModularBlock = BaseLeafBlock">
  import type { IMuiRenderer } from "$interfaces/IMuiRenderer";
  import type { BaseLeafBlock, ModularBlock } from "$types/system/mui";
  import MuiError from "./MuiError.svelte";

  const { block, renderer }: { block: TBlock; renderer: IMuiRenderer } = $props();
  const BlockComponent = $derived(renderer.ResolveBlockImplementation(block.type));
</script>

{#if BlockComponent}
  <BlockComponent {block} {renderer} />
{:else}
  <MuiError {block} message="No renderer for this block" />
{/if}
