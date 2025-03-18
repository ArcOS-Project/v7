<script lang="ts">
  import type { CurrentSource, LogSource } from "../types";

  const { currentSource, sources }: { currentSource: CurrentSource; sources: LogSource[] } = $props();
</script>

<div class="sidebar">
  {#each sources as { what, timestamp }, i (`${i}-${what}-${timestamp}`)}
    <button class="source-option" class:selected={$currentSource === what} onclick={() => ($currentSource = what)} title={what}>
      <span class="lucide icon-folder-closed" class:icon-folder-open={$currentSource === what}></span>
      <span>{what}</span>
    </button>
  {/each}
</div>
