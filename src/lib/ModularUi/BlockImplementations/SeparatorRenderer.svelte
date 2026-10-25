<script lang="ts">
  import type { IMuiRenderer } from "$interfaces/IMuiRenderer";
  import type { SeparatorBlock } from "$types/system/mui";

  const {block, renderer}: {block: SeparatorBlock, renderer: IMuiRenderer} = $props();
</script>

<div class="sep {block.className ?? ""}"></div>