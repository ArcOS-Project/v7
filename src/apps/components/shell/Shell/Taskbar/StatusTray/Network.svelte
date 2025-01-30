<script lang="ts">
  import type { ReadableStore } from "$ts/writable";

  const { networkSpeed }: { networkSpeed: ReadableStore<number> } = $props();
</script>

{#if $networkSpeed > -1}
  {#if $networkSpeed <= 10}
    <span class="lucide icon-wifi-zero"></span>
  {:else if $networkSpeed <= 35}
    <span class="lucide icon-wifi-low"></span>
  {:else if $networkSpeed <= 80}
    <span class="lucide icon-wifi-high"></span>
  {:else}
    <span class="lucide icon-wifi"></span>
  {/if}
{:else}
  <span class="lucide icon-wifi-off"></span>
{/if}
