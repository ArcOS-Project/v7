<script lang="ts">
  import type { JoltBlock } from "$types/system/jui";

  let { block, message }: { block: JoltBlock; message: string } = $props();
</script>

<p class="error-text">JUI_ERR - {block.type}: {message}</p>
