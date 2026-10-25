<script lang="ts" generics="TBlock extends JoltBlock = JoltBaseLeafBlock">
  import type { IJuiRenderer } from "$interfaces/IJuiRenderer";
  import type { JoltBaseLeafBlock, JoltBlock } from "$types/system/jui";
  import MuiBlock from "./JoltBlock.svelte";

  let { renderer, blocks }: { renderer: IJuiRenderer; blocks: TBlock[] } = $props();
</script>

{#each blocks as block}
  <MuiBlock {block} {renderer} />
{/each}
