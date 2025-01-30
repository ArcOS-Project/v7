<script lang="ts">
  import type { ReadableStore } from "$ts/writable";

  const { networkSpeed }: { networkSpeed: ReadableStore<number> } = $props();
</script>

<div class="network">
  <span class="lucide icon-wifi backdrop"></span>
  {#if $networkSpeed > -1}
    {#if $networkSpeed <= 10}
      <span class="lucide icon-wifi-zero" title="Bad connection"></span>
    {:else if $networkSpeed <= 35}
      <span class="lucide icon-wifi-low" title="Medium connection"></span>
    {:else if $networkSpeed <= 80}
      <span class="lucide icon-wifi-high" title="Normal connection"></span>
    {:else}
      <span class="lucide icon-wifi" title="Good connection"></span>
    {/if}
  {:else}
    <span class="lucide icon-wifi-off" title="Unknown connection"></span>
  {/if}
</div>
