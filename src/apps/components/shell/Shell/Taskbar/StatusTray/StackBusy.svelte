<script lang="ts">
  import type { BooleanStore } from "$ts/writable";

  const { stackBusy }: { stackBusy: BooleanStore } = $props();
</script>

<div class="stack-busy">
  <span class="lucide icon-clock-3" class:blink={$stackBusy}></span>
</div>
