<script lang="ts">
  import type { IJuiRenderer } from "$interfaces/IJuiRenderer";
  import type { JoltSeparatorBlock } from "$types/system/jui";

  const {block, renderer}: {block: JoltSeparatorBlock, renderer: IJuiRenderer} = $props();
</script>

<div class="sep {block.className ?? ""}"></div>