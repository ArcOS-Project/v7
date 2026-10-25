<script lang="ts" generics="TBlock extends ModularBlock = BaseLeafBlock">
  import type { IMuiRenderer } from "$interfaces/IMuiRenderer";
  import MuiRendererBranch from "$lib/ModularUi/MuiRendererBranch.svelte";
  import type { BaseLeafBlock, IfBlock, ModularBlock } from "$types/system/mui";

  let { block, renderer }: { block: IfBlock<TBlock>; renderer: IMuiRenderer } = $props();

  const { Conditions } = renderer;
  const ConditionsMet = $derived(renderer.ConditionsMet(block.conditions));
</script>

{#if $ConditionsMet}
  <MuiRendererBranch {renderer} blocks={block.ifMet} />
{:else if block.else?.length}
  <MuiRendererBranch {renderer} blocks={block.else} />
{/if}
