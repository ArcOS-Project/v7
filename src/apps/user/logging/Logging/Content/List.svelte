<script lang="ts">
  import type { LoggingRuntime } from "../../runtime";
  import Item from "./List/Item.svelte";

  const { process }: { process: LoggingRuntime } = $props();
  const { currentSource, selectedLevel, groups } = process;
</script>

<div class="log-list">
  <div class="row head">
    <div class="segment icon"></div>
    <div class="segment timestamp">Timestamp</div>
    <div class="segment message">Message</div>
  </div>
  <div class="rows">
    {#each $groups.get($currentSource) || [] as item, i (`${i}-${item.kernelTime}-${item.message}-${item.source}`)}
      {#if $selectedLevel == "all" || item.level === $selectedLevel}
        <Item {item} />
      {/if}
    {/each}
  </div>
</div>
