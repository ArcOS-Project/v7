<script lang="ts">
  import type { ModularBlock } from "$types/system/mui";

  let { block, message }: { block: ModularBlock; message: string } = $props();
</script>

<p class="error-text">MUI_ERR - {block.type}: {message}</p>
