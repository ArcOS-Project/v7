<script lang="ts">
  import { AppsIcon } from "$ts/images/general";
  import type { CurrentSource, LogSource } from "../types";

  const { currentSource, sources }: { currentSource: CurrentSource; sources: LogSource[] } = $props();
</script>

<div class="sidebar">
  <button class="source-option" class:selected={$currentSource === "*"} onclick={() => ($currentSource = "*")}>
    <img src={AppsIcon} alt="" />
    <span>All Logs</span>
  </button>

  {#each sources as { what, timestamp }, i (`${i}-${what}-${timestamp}`)}
    <button class="source-option" class:selected={$currentSource === what} onclick={() => ($currentSource = what)} title={what}>
      <span class="lucide icon-folder-closed" class:icon-folder-open={$currentSource === what}></span>
      <span>{what}</span>
    </button>
  {/each}
</div>
