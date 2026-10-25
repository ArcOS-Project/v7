<script lang="ts" generics="TBlock extends JoltBlock = JoltBaseLeafBlock">
  import type { IJuiRenderer } from "$interfaces/IJuiRenderer";
  import JuiRendererBranch from "$lib/JoltUi/JoltRendererBranch.svelte";
  import type { JoltBaseLeafBlock, JoltIfBlock, JoltBlock } from "$types/system/jui";

  let { block, renderer }: { block: JoltIfBlock<TBlock>; renderer: IJuiRenderer } = $props();

  const ConditionsMet = $derived(renderer.ConditionsMet(block.conditions));
</script>

{#if $ConditionsMet}
  <JuiRendererBranch {renderer} blocks={block.ifMet} />
{:else if block.else?.length}
  <JuiRendererBranch {renderer} blocks={block.else} />
{/if}
