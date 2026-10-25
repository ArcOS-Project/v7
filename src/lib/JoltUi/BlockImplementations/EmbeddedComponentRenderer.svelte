<script lang="ts" generics="TBlock extends JoltBlock = JoltBaseLeafBlock">
  import type { IJuiRenderer } from "$interfaces/IJuiRenderer";
  import type { JoltBaseLeafBlock, JoltEmbeddedComponentBlock, JoltBlock } from "$types/system/jui";
  import JuiError from "../JoltError.svelte";
  import JuiRendererBranch from "../JoltRendererBranch.svelte";

  let { block, renderer }: { block: JoltEmbeddedComponentBlock<TBlock>; renderer: IJuiRenderer } = $props();

  const Component = $derived(renderer.EmbeddedComponents[block.id]);
</script>

{#if Component}
  <Component {...block.props ?? {}} process={renderer.Process}>
    {#if block.subComponents?.length}
      <JuiRendererBranch {renderer} blocks={block.subComponents} />
    {/if}
  </Component>
{:else}
  <JuiError {block} message="unknown '{block.id}'" />
{/if}
