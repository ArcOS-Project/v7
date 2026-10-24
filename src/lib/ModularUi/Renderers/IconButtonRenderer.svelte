<script lang="ts" generics="TCondition extends string">
  import type { IMuiRenderer } from "$interfaces/IMuiRenderer";
  import type { IconButtonBlock } from "$types/system/mui";

  let { renderer, block }: { renderer: IMuiRenderer; block: IconButtonBlock } = $props();
</script>
