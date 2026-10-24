<script lang="ts" generics="TBlock extends ModularBlock = BaseLeafBlock">
  import type { IMuiRenderer } from "$interfaces/IMuiRenderer";
  import type { BaseLeafBlock, ModularBlock } from "$types/system/mui";
  import MuiBlock from "./MuiBlock.svelte";

  let { renderer, blocks }: { renderer: IMuiRenderer; blocks: TBlock[] } = $props();
</script>

{#each blocks as block}
  <MuiBlock {block} {renderer} />
{/each}
