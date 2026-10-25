<script lang="ts" generics="TBlock extends ModularBlock = BaseLeafBlock">
  import type { IMuiRenderer } from "$interfaces/IMuiRenderer";
  import type { BaseLeafBlock, EmbeddedComponentBlock, ModularBlock } from "$types/system/mui";
  import MuiError from "../MuiError.svelte";
  import MuiRendererBranch from "../MuiRendererBranch.svelte";

  let { block, renderer }: { block: EmbeddedComponentBlock<TBlock>; renderer: IMuiRenderer } = $props();

  const Component = $derived(renderer.EmbeddedComponents[block.id]);
</script>

{#if Component}
  <Component {...block.props ?? {}} process={renderer.Process}>
    {#if block.subComponents?.length}
      <MuiRendererBranch {renderer} blocks={block.subComponents} />
    {/if}
  </Component>
{:else}
  <MuiError {block} message="unknown '{block.id}'" />
{/if}
