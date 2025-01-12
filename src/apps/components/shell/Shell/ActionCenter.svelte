<script lang="ts">
  import type { BooleanStore } from "$ts/writable";

  const { actionCenterOpened }: { actionCenterOpened: BooleanStore } = $props();
</script>

<div class="actioncenter" class:opened={$actionCenterOpened}></div>
